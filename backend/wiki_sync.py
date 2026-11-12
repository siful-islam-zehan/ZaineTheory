"""
Zaine Theory - Wikipedia Dynamic Data Sync Engine
Fetches authentic scientific data for Theorists, Researches, Books, and Subjects using wikipedia-api,
and populates the SQLite database (database/app.sqlite) and JSON cache (assets/data/wiki_data.json).
"""

import sys
import os
import json
import sqlite3
import re
from datetime import datetime

try:
    import wikipediaapi
except ImportError:
    print("wikipedia-api not installed. Run: pip install wikipedia-api")
    sys.exit(1)

# Paths
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DB_PATH = os.path.join(BASE_DIR, "database", "app.sqlite")
JSON_OUTPUT_PATH = os.path.join(BASE_DIR, "assets", "data", "wiki_data.json")
DB_JSON_PATH = os.path.join(BASE_DIR, "database", "wiki_data.json")

os.makedirs(os.path.join(BASE_DIR, "assets", "data"), exist_ok=True)
os.makedirs(os.path.join(BASE_DIR, "database"), exist_ok=True)

# Initialize Wikipedia API with custom user agent
USER_AGENT = "ZaineTheory/2.0 (https://zainetheory.org; contact@zainetheory.org) wikipedia-api/0.16.0"
wiki = wikipediaapi.Wikipedia(user_agent=USER_AGENT, language="en")


def clean_summary(text, max_len=600):
    """Clean summary text and limit length if desired."""
    if not text:
        return ""
    # Remove extra brackets/pronunciation markers
    cleaned = re.sub(r'\s*\([^)]*;\s*[^)]*\)', '', text)
    cleaned = re.sub(r'\s+', ' ', cleaned).strip()
    return cleaned


def extract_sections(page, depth=1):
    """Extract top-level sections as structured outline."""
    sections_list = []
    for s in page.sections:
        if s.title.lower() in ['see also', 'references', 'external links', 'further reading', 'notes', 'sources']:
            continue
        text_preview = s.text[:400] if s.text else ""
        sections_list.append({
            "title": s.title,
            "preview": text_preview.strip()
        })
        if len(sections_list) >= 4:
            break
    return sections_list


def fetch_page_data(title):
    """Fetch structured data for a Wikipedia page title."""
    print(f"Fetching from Wikipedia: '{title}'...")
    try:
        page = wiki.page(title)
        if not page.exists():
            print(f"  Warning: Page '{title}' does not exist on Wikipedia!")
            return None
        
        summary = clean_summary(page.summary)
        sections = extract_sections(page)
        
        return {
            "title": page.title,
            "summary": summary,
            "full_url": page.fullurl,
            "pageid": page.pageid,
            "sections": sections,
            "fetched_at": datetime.utcnow().isoformat() + "Z"
        }
    except Exception as e:
        print(f"  Error fetching '{title}': {e}")
        return None


# Target datasets to sync
THEORISTS_CONFIG = [
    {
        "slug": "newton",
        "name": "Isaac Newton",
        "wiki_title": "Isaac Newton",
        "role": "MATHEMATICIAN & PHYSICIST",
        "lifespan": "1642 - 1727",
        "image": "assets/images/scientist-newton.jpg",
        "key_discovery": "Universal Gravitation, Laws of Motion, Infinitesimal Calculus & Optics",
        "quote": "If I have seen further, it is by standing on the shoulders of giants."
    },
    {
        "slug": "einstein",
        "name": "Albert Einstein",
        "wiki_title": "Albert Einstein",
        "role": "THEORETICAL PHYSICIST",
        "lifespan": "1879 - 1955",
        "image": "assets/images/scientist-einstein.jpg",
        "key_discovery": "Special & General Relativity, Mass-Energy Equivalence (E=mc²), Photoelectric Effect",
        "quote": "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world."
    },
    {
        "slug": "curie",
        "name": "Marie Curie",
        "wiki_title": "Marie Curie",
        "role": "PHYSICIST & CHEMIST",
        "lifespan": "1867 - 1934",
        "image": "assets/images/scientist-curie.jpg",
        "key_discovery": "Pioneering Research on Radioactivity, Discovery of Polonium and Radium, Two Nobel Prizes",
        "quote": "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less."
    },
    {
        "slug": "darwin",
        "name": "Charles Darwin",
        "wiki_title": "Charles Darwin",
        "role": "NATURALIST & BIOLOGIST",
        "lifespan": "1809 - 1882",
        "image": "assets/images/scientist-darwin.jpg",
        "key_discovery": "Theory of Evolution by Natural Selection, Common Descent, On the Origin of Species",
        "quote": "It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change."
    }
]

RESEARCHES_CONFIG = [
    {
        "slug": "quantum-entanglement",
        "title": "Quantum Entanglement and Bell's Inequality",
        "wiki_title": "Quantum entanglement",
        "secondary_wiki": "Bell's theorem",
        "category": "Physics • Quantum Mechanics",
        "author_names": "Alain Aspect, John Clauser, Anton Zeilinger (Nobel 2022)",
        "year": "1982 / 2022",
        "research_type": "Experimental",
        "banner_img": "assets/images/quantum-banner.jpg",
        "equation": "|Ψ⟩ = (|00⟩ + |11⟩) / √2   |   |⟨QS⟩ + ⟨RS⟩ + ⟨RT⟩ - ⟨QT⟩| ≤ 2"
    },
    {
        "slug": "schrodinger-cat",
        "title": "Schrödinger's Cat Paradox",
        "wiki_title": "Schrödinger's cat",
        "secondary_wiki": "Quantum superposition",
        "category": "Physics • Quantum Mechanics",
        "author_names": "Erwin Schrödinger",
        "year": "1935",
        "research_type": "Theoretical Thought Experiment",
        "banner_img": "assets/images/schrodinger-banner.jpg",
        "equation": "iℏ ∂/∂t |Ψ(t)⟩ = Ĥ |Ψ(t)⟩   |   |Ψ⟩ = 1/√2 (|Alive⟩ + |Dead⟩)"
    },
    {
        "slug": "expanding-universe",
        "title": "Observational Evidence for an Expanding Univ.",
        "wiki_title": "Expansion of the universe",
        "secondary_wiki": "Hubble's law",
        "category": "Physics • Cosmology & Astrophysics",
        "author_names": "Edwin Hubble, Georges Lemaître, Alexander Friedmann",
        "year": "1929",
        "research_type": "Observational Astronomy",
        "banner_img": "assets/images/expanding-universe-banner.jpg",
        "equation": "v = H₀ · D   |   (ȧ/a)² = (8πG/3)ρ - kc²/a² + Λc²/3"
    },
    {
        "slug": "law-of-newton",
        "title": "Laws of Motion & Universal Gravitation",
        "wiki_title": "Newton's laws of motion",
        "secondary_wiki": "Philosophiæ Naturalis Principia Mathematica",
        "category": "Physics • Classical Mechanics",
        "author_names": "Sir Isaac Newton",
        "year": "1687",
        "research_type": "Foundational Physics",
        "banner_img": "assets/images/newton-portrait-clean.png",
        "equation": "F = m · a   |   F_g = G · (m₁ · m₂) / r²"
    }
]

BOOKS_CONFIG = [
    {
        "slug": "book-hawking",
        "title": "A Brief History of Time",
        "wiki_title": "A Brief History of Time",
        "author": "Stephen Hawking",
        "field": "Cosmology & Theoretical Physics",
        "year": "1988",
        "price": 18.00,
        "cover_img": "assets/images/book-hawking.png"
    },
    {
        "slug": "book-carson",
        "title": "Silent Spring",
        "wiki_title": "Silent Spring",
        "author": "Rachel Carson",
        "field": "Ecology & Environmental Science",
        "year": "1962",
        "price": 18.00,
        "cover_img": "assets/images/book-carson.png"
    },
    {
        "slug": "book-research-tan",
        "title": "Research Methods: A Practical Guide",
        "wiki_title": "Scientific method",
        "author": "Willie Tan",
        "field": "Research Methodology & Epistemology",
        "year": "2017",
        "price": 18.00,
        "cover_img": "assets/images/book-research-tan.png"
    },
    {
        "slug": "book-methodology-pandey",
        "title": "A Book on Research Methodology",
        "wiki_title": "Methodology",
        "author": "Dr. Priyanka Pandey, Dr. Wasim Raza",
        "field": "Life Sciences Research & Biostatistics",
        "year": "2015",
        "price": 18.00,
        "cover_img": "assets/images/book-methodology-pandey.png"
    },
    {
        "slug": "book-writing-cargill",
        "title": "Writing Scientific Research Articles",
        "wiki_title": "Academic publishing",
        "author": "Margaret Cargill & Patrick O'Connor",
        "field": "Scientific Communication & Peer Review",
        "year": "2013",
        "price": 18.00,
        "cover_img": "assets/images/book-writing-cargill.png"
    },
    {
        "slug": "book-wilson",
        "title": "An Introduction to Scientific Research",
        "wiki_title": "E. Bright Wilson",
        "author": "E. Bright Wilson, Jr.",
        "field": "Experimental Design & Scientific Philosophy",
        "year": "1952",
        "price": 18.00,
        "cover_img": "assets/images/book-wilson.png"
    },
    {
        "slug": "book-behavioral-kline",
        "title": "Becoming a Behavioral Science Researcher",
        "wiki_title": "Behavioral sciences",
        "author": "Rex B. Kline",
        "field": "Quantitative Psychology & Statistics",
        "year": "2020",
        "price": 18.00,
        "cover_img": "assets/images/book-behavioral-kline.png"
    },
    {
        "slug": "book-cosmos",
        "title": "Cosmos",
        "wiki_title": "Cosmos (Sagan book)",
        "author": "Carl Sagan",
        "field": "Astronomy, Astrophysics & Astrobiology",
        "year": "1980",
        "price": 18.00,
        "cover_img": "assets/images/book-cosmos.png"
    },
    {
        "slug": "book-selfishgene",
        "title": "The Selfish Gene",
        "wiki_title": "The Selfish Gene",
        "author": "Richard Dawkins",
        "field": "Evolutionary Biology & Genetics",
        "year": "1976",
        "price": 18.00,
        "cover_img": "assets/images/book-selfishgene.png"
    },
    {
        "slug": "book-scienceofscience",
        "title": "The Science of Science",
        "wiki_title": "Science of science",
        "author": "Dashun Wang & Albert-László Barabási",
        "field": "Network Science, Scientometrics & Big Data",
        "year": "2021",
        "price": 18.00,
        "cover_img": "assets/images/book-scienceofscience.png"
    }
]

SUBJECTS_CONFIG = [
    {
        "slug": "classical-mechanics",
        "name": "Classical Mechanics",
        "wiki_title": "Classical mechanics",
        "kicker": "01 • FOUNDATIONAL PHYSICS",
        "description": "Motion of macroscopic objects under forces, from planetary orbits to projectile trajectory."
    },
    {
        "slug": "quantum-mechanics",
        "name": "Quantum Mechanics",
        "wiki_title": "Quantum mechanics",
        "kicker": "02 • MICROSCOPIC REALITY",
        "description": "Fundamental theory in physics describing the behavior of nature at the scale of atoms and subatomic particles."
    },
    {
        "slug": "astrophysics",
        "name": "Astrophysics & Cosmology",
        "wiki_title": "Astrophysics",
        "kicker": "03 • COSMIC SCALE",
        "description": "The study of stars, black holes, the expansion of the universe, and the fabric of spacetime."
    },
    {
        "slug": "evolutionary-biology",
        "name": "Evolutionary Biology",
        "wiki_title": "Evolutionary biology",
        "kicker": "04 • LIFE SCIENCES",
        "description": "The origin and descent of species, genetic inheritance, and natural selection across geological epochs."
    }
]


def init_database(conn):
    """Create modern database schema in SQLite."""
    cursor = conn.cursor()
    cursor.executescript("""
    CREATE TABLE IF NOT EXISTS theorists (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT UNIQUE NOT NULL,
        name TEXT NOT NULL,
        wiki_title TEXT,
        role TEXT,
        lifespan TEXT,
        image TEXT,
        summary TEXT,
        key_discovery TEXT,
        quote TEXT,
        wikipedia_url TEXT,
        sections_json TEXT,
        updated_at TEXT
    );

    CREATE TABLE IF NOT EXISTS researches (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT UNIQUE NOT NULL,
        title TEXT NOT NULL,
        wiki_title TEXT,
        category TEXT,
        author_names TEXT,
        year TEXT,
        research_type TEXT,
        banner_img TEXT,
        equation TEXT,
        summary TEXT,
        full_url TEXT,
        sections_json TEXT,
        updated_at TEXT
    );

    CREATE TABLE IF NOT EXISTS books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT UNIQUE NOT NULL,
        title TEXT NOT NULL,
        wiki_title TEXT,
        author TEXT,
        field TEXT,
        year TEXT,
        price REAL DEFAULT 18.00,
        cover_img TEXT,
        google_buy_url TEXT,
        summary TEXT,
        full_url TEXT,
        sections_json TEXT,
        updated_at TEXT
    );

    CREATE TABLE IF NOT EXISTS subjects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT UNIQUE NOT NULL,
        name TEXT NOT NULL,
        wiki_title TEXT,
        kicker TEXT,
        description TEXT,
        summary TEXT,
        full_url TEXT,
        updated_at TEXT
    );

    CREATE TABLE IF NOT EXISTS wiki_cache (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        query_key TEXT UNIQUE NOT NULL,
        title TEXT NOT NULL,
        summary TEXT,
        full_url TEXT,
        sections_json TEXT,
        fetched_at TEXT
    );
    """)
    conn.commit()


def main():
    print("==================================================")
    print("  Zaine Theory - Wikipedia Dynamic Sync Engine    ")
    print("==================================================")

    conn = sqlite3.connect(DB_PATH)
    init_database(conn)
    cursor = conn.cursor()

    compiled_data = {
        "sync_time": datetime.utcnow().isoformat() + "Z",
        "theorists": [],
        "researches": [],
        "books": [],
        "subjects": []
    }

    # 1. Sync Theorists
    print("\n--- Syncing Theorists ---")
    for item in THEORISTS_CONFIG:
        wdata = fetch_page_data(item["wiki_title"])
        summary = wdata["summary"] if wdata else ""
        full_url = wdata["full_url"] if wdata else f"https://en.wikipedia.org/wiki/{item['wiki_title'].replace(' ', '_')}"
        sections = wdata["sections"] if wdata else []

        cursor.execute("""
            INSERT INTO theorists (slug, name, wiki_title, role, lifespan, image, summary, key_discovery, quote, wikipedia_url, sections_json, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(slug) DO UPDATE SET
                name=excluded.name,
                wiki_title=excluded.wiki_title,
                role=excluded.role,
                lifespan=excluded.lifespan,
                image=excluded.image,
                summary=excluded.summary,
                key_discovery=excluded.key_discovery,
                quote=excluded.quote,
                wikipedia_url=excluded.wikipedia_url,
                sections_json=excluded.sections_json,
                updated_at=excluded.updated_at
        """, (
            item["slug"], item["name"], item["wiki_title"], item["role"], item["lifespan"],
            item["image"], summary, item["key_discovery"], item["quote"], full_url,
            json.dumps(sections), datetime.utcnow().isoformat()
        ))

        compiled_data["theorists"].append({
            **item,
            "summary": summary,
            "wikipedia_url": full_url,
            "sections": sections
        })

    # 2. Sync Researches
    print("\n--- Syncing Researches & Theories ---")
    for item in RESEARCHES_CONFIG:
        wdata = fetch_page_data(item["wiki_title"])
        summary = wdata["summary"] if wdata else ""
        full_url = wdata["full_url"] if wdata else f"https://en.wikipedia.org/wiki/{item['wiki_title'].replace(' ', '_')}"
        sections = wdata["sections"] if wdata else []

        cursor.execute("""
            INSERT INTO researches (slug, title, wiki_title, category, author_names, year, research_type, banner_img, equation, summary, full_url, sections_json, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(slug) DO UPDATE SET
                title=excluded.title,
                wiki_title=excluded.wiki_title,
                category=excluded.category,
                author_names=excluded.author_names,
                year=excluded.year,
                research_type=excluded.research_type,
                banner_img=excluded.banner_img,
                equation=excluded.equation,
                summary=excluded.summary,
                full_url=excluded.full_url,
                sections_json=excluded.sections_json,
                updated_at=excluded.updated_at
        """, (
            item["slug"], item["title"], item["wiki_title"], item["category"], item["author_names"],
            item["year"], item["research_type"], item["banner_img"], item["equation"],
            summary, full_url, json.dumps(sections), datetime.utcnow().isoformat()
        ))

        compiled_data["researches"].append({
            **item,
            "summary": summary,
            "full_url": full_url,
            "sections": sections
        })

    # 3. Sync Books
    print("\n--- Syncing Popular Science Books ---")
    for item in BOOKS_CONFIG:
        wdata = fetch_page_data(item["wiki_title"])
        summary = wdata["summary"] if wdata else ""
        full_url = wdata["full_url"] if wdata else f"https://en.wikipedia.org/wiki/{item['wiki_title'].replace(' ', '_')}"
        sections = wdata["sections"] if wdata else []

        google_buy_url = f"https://www.google.com/search?tbm=bks&q=buy+{item['title'].replace(' ', '+')}+{item['author'].replace(' ', '+')}"

        cursor.execute("""
            INSERT INTO books (slug, title, wiki_title, author, field, year, price, cover_img, google_buy_url, summary, full_url, sections_json, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(slug) DO UPDATE SET
                title=excluded.title,
                wiki_title=excluded.wiki_title,
                author=excluded.author,
                field=excluded.field,
                year=excluded.year,
                price=excluded.price,
                cover_img=excluded.cover_img,
                google_buy_url=excluded.google_buy_url,
                summary=excluded.summary,
                full_url=excluded.full_url,
                sections_json=excluded.sections_json,
                updated_at=excluded.updated_at
        """, (
            item["slug"], item["title"], item["wiki_title"], item["author"], item["field"],
            item["year"], item["price"], item["cover_img"], google_buy_url, summary, full_url,
            json.dumps(sections), datetime.utcnow().isoformat()
        ))

        compiled_data["books"].append({
            **item,
            "google_buy_url": google_buy_url,
            "summary": summary,
            "full_url": full_url,
            "sections": sections
        })

    # 4. Sync Subjects
    print("\n--- Syncing Subjects ---")
    for item in SUBJECTS_CONFIG:
        wdata = fetch_page_data(item["wiki_title"])
        summary = wdata["summary"] if wdata else ""
        full_url = wdata["full_url"] if wdata else f"https://en.wikipedia.org/wiki/{item['wiki_title'].replace(' ', '_')}"

        cursor.execute("""
            INSERT INTO subjects (slug, name, wiki_title, kicker, description, summary, full_url, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(slug) DO UPDATE SET
                name=excluded.name,
                wiki_title=excluded.wiki_title,
                kicker=excluded.kicker,
                description=excluded.description,
                summary=excluded.summary,
                full_url=excluded.full_url,
                updated_at=excluded.updated_at
        """, (
            item["slug"], item["name"], item["wiki_title"], item["kicker"], item["description"],
            summary, full_url, datetime.utcnow().isoformat()
        ))

        compiled_data["subjects"].append({
            **item,
            "summary": summary,
            "full_url": full_url
        })

    conn.commit()
    conn.close()

    # Write compiled JSON data for immediate web client access
    with open(JSON_OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(compiled_data, f, indent=2, ensure_ascii=False)
    with open(DB_JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(compiled_data, f, indent=2, ensure_ascii=False)

    print(f"\n[OK] SQLite Database updated: {DB_PATH}")
    print(f"[OK] Dynamic JSON Cache updated: {JSON_OUTPUT_PATH}")
    print(f"Total synced: {len(compiled_data['theorists'])} Theorists, {len(compiled_data['researches'])} Researches, {len(compiled_data['books'])} Books, {len(compiled_data['subjects'])} Subjects.")


if __name__ == "__main__":
    main()
