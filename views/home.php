<?php
/**
 * Dynamic Home View - Powered by Wikipedia Engine & SQLite
 */
if (!defined('ROOT_PATH')) {
    define('ROOT_PATH', dirname(__DIR__));
}
if (file_exists(ROOT_PATH . '/backend/models/Theorist.php')) {
    require_once ROOT_PATH . '/backend/models/Theorist.php';
    require_once ROOT_PATH . '/backend/models/Research.php';
    require_once ROOT_PATH . '/backend/models/Book.php';
    $dynTheorists = class_exists('Theorist') ? Theorist::getAll() : [];
    $dynResearches = class_exists('Research') ? Research::getAll() : [];
    $dynBooks = class_exists('Book') ? Book::getAll() : [];
}
?>
    <main>
        <!-- ==============================================================
             HERO SECTION (ZAINE THEORY — IT'S JUST THEORY)
             ============================================================== -->
        <section class="hero-section" id="hero">
            <div class="container hero-grid">
                <!-- Left: Hero Text, Search & Actions -->
                <div class="hero-left">
                    <h1 class="hero-title">IT'S JUST THEORY</h1>
                    
                    <p class="hero-description">
                        A simple idea... or something deeper? This theory explores a different perspective that might change how you see things. Not facts, not proof, just a possibility worth thinking about. What if the truth was hidden in plain sight? This concept connects small details into one bigger idea. It may not be confirmed... but it definitely makes you think. An interplay built on observation, logic, and imagination. No rigid rules, no conclusions... just a theory that opens the door to curiosity and discussion.
                    </p>

                    <div class="hero-search-wrapper">
                        <input type="text" id="heroSearchInput" class="hero-search-input" placeholder="Search scientists, research, subjects, books" autocomplete="off">
                        <button type="button" id="heroSearchBtn" class="hero-search-btn">Search</button>
                    </div>

                    <div class="hero-actions-row">
                        <a href="#theorists" class="btn-explore-scientists">Explore Scientists ➔</a>
                        <a href="#research-subjects" class="btn-explore-research">Explore Research ➔</a>
                    </div>
                </div>

                <!-- Right: Hero Visual (Falling Slabs Live 60FPS Animation / Graphic) -->
                <div class="hero-right">
                    <div class="hero-animation-container">
                        <canvas id="heroFallingSlabsCanvas" class="hero-visual-canvas" width="500" height="470"></canvas>
                        <img id="heroVisualImg" class="hero-visual-img" src="assets/images/hero-visual-flipped.png" alt="Falling Slabs Animation" style="display: none;">
                    </div>
                </div>
            </div>
        </section>

        <!-- ==============================================================
             SECTION: FEATURED SPOTLIGHT - LAW OF NEWTON
             ============================================================== -->
        <section class="section-newton" id="spotlight-newton">
            <div class="container newton-grid">
                <div class="newton-portrait-wrapper">
                    <img src="assets/images/newton-portrait-clean.png" alt="Sir Isaac Newton" class="newton-portrait-clean">
                </div>

                <div class="newton-content">
                    <h2 class="newton-title">LAW OF NEWTON</h2>
                    <p class="newton-text">
                        Newton's classical laws of mechanics provide a foundational framework for understanding the motion of bodies under universal forces. Formulated in the seventeenth century, these principles mathematically describe trajectories, inertial reference frames, and gravitation across terrestrial and astronomical systems.
                    </p>
                    <p class="newton-text">
                        By integrating kinematics with coordinate systems, these laws established the core methodology of modern analytical physics, serving as a continuous bridge between observation, calculus, and natural philosophy.
                    </p>

                    <div class="newton-actions">
                        <button type="button" class="btn-read-more">Read More</button>
                        <button type="button" class="btn-more-research">More Research</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==============================================================
             SECTION: RESEARCH BY SUBJECT
             ============================================================== -->
        <section class="section-subjects" id="research-subjects">
            <div class="subjects-bg-watermark"></div>
            <div class="container">
                <h2 class="section-title-clean">Research By Subject</h2>
                <p class="section-subtitle-clean">Eight disciplines, each with its own scientists, research and reading.</p>

                <div class="subjects-grid">
                    <!-- Physics -->
                    <div class="subject-card">
                        <div>
                            <h3 class="subject-name">Physics</h3>
                            <p class="subject-desc">Explore theories, discoveries and researchers in physics.</p>
                        </div>
                        <div class="subject-card-footer">
                            <a href="#deep-science">EXPLORE ➔</a>
                            <a href="#deep-science">READ MORE ➔</a>
                        </div>
                    </div>

                    <!-- Chemistry -->
                    <div class="subject-card">
                        <div>
                            <h3 class="subject-name">Chemistry</h3>
                            <p class="subject-desc">Dive into chemical reactions, compounds, and pioneering chemistry.</p>
                        </div>
                        <div class="subject-card-footer">
                            <a href="#deep-science">EXPLORE ➔</a>
                            <a href="#deep-science">READ MORE ➔</a>
                        </div>
                    </div>

                    <!-- Biology -->
                    <div class="subject-card">
                        <div>
                            <h3 class="subject-name">Biology</h3>
                            <p class="subject-desc">Study living organisms, ecosystems, and genetic research.</p>
                        </div>
                        <div class="subject-card-footer">
                            <a href="#deep-science">EXPLORE ➔</a>
                            <a href="#deep-science">READ MORE ➔</a>
                        </div>
                    </div>

                    <!-- Astronomy -->
                    <div class="subject-card">
                        <div>
                            <h3 class="subject-name">Astronomy</h3>
                            <p class="subject-desc">Unlock the mysteries of the cosmos and celestial phenomena.</p>
                        </div>
                        <div class="subject-card-footer">
                            <a href="#deep-science">EXPLORE ➔</a>
                            <a href="#deep-science">READ MORE ➔</a>
                        </div>
                    </div>

                    <!-- Environmental Sci... -->
                    <div class="subject-card">
                        <div>
                            <h3 class="subject-name">Environmental Sci...</h3>
                            <p class="subject-desc">Focus on ecosystems, climate change, and sustainability.</p>
                        </div>
                        <div class="subject-card-footer">
                            <a href="#deep-science">EXPLORE ➔</a>
                            <a href="#deep-science">READ MORE ➔</a>
                        </div>
                    </div>

                    <!-- Geology -->
                    <div class="subject-card">
                        <div>
                            <h3 class="subject-name">Geology</h3>
                            <p class="subject-desc">Analyze Earth's structure, minerals, and geological processes.</p>
                        </div>
                        <div class="subject-card-footer">
                            <a href="#deep-science">EXPLORE ➔</a>
                            <a href="#deep-science">READ MORE ➔</a>
                        </div>
                    </div>

                    <!-- Computer Science -->
                    <div class="subject-card">
                        <div>
                            <h3 class="subject-name">Computer Science</h3>
                            <p class="subject-desc">Explore algorithms, AI developments, and computational theory.</p>
                        </div>
                        <div class="subject-card-footer">
                            <a href="#deep-science">EXPLORE ➔</a>
                            <a href="#deep-science">READ MORE ➔</a>
                        </div>
                    </div>

                    <!-- Mathematics -->
                    <div class="subject-card">
                        <div>
                            <h3 class="subject-name">Mathematics</h3>
                            <p class="subject-desc">Investigate abstract concepts, proofs, and mathematical models.</p>
                        </div>
                        <div class="subject-card-footer">
                            <a href="#deep-science">EXPLORE ➔</a>
                            <a href="#deep-science">READ MORE ➔</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==============================================================
             SECTION: THE PEOPLE BEHIND THE IDEAS (White #ffffff — matching mockup)
             ============================================================== -->
        <section class="section-people" id="theorists">
            <div class="container">
                <div class="people-header">
                    <div>
                        <div class="people-kicker">Scientists Who Changed the World</div>
                        <h2 class="people-title">The people behind the ideas.</h2>
                    </div>
                    <a href="#theorists" class="link-all-scientists">View all scientists ➔</a>
                </div>

                <div class="people-grid">
                <?php if (!empty($dynTheorists)): ?>
                    <?php foreach ($dynTheorists as $t): ?>
                    <div class="theorist-card" data-paper="<?= htmlspecialchars($t['slug']) ?>">
                        <div class="theorist-photo">
                            <img src="<?= htmlspecialchars($t['image'] ?? 'assets/images/avatar-placeholder.svg') ?>" alt="<?= htmlspecialchars($t['name']) ?>" loading="lazy">
                        </div>
                        <div class="theorist-meta">
                            <h3 class="theorist-name"><?= htmlspecialchars($t['name']) ?></h3>
                            <div class="theorist-sub-row">
                                <span class="theorist-role"><?= htmlspecialchars($t['role'] ?? 'THEORETICAL PHYSICIST') ?></span>
                                <span class="theorist-lifespan"><?= htmlspecialchars($t['lifespan'] ?? '') ?></span>
                            </div>
                        </div>
                    </div>
                    <?php endforeach; ?>
                <?php else: ?>
                    <!-- Albert Einstein -->
                    <div class="theorist-card" data-paper="einstein">
                        <div class="theorist-photo">
                            <img src="assets/images/scientist-einstein.jpg" alt="Albert Einstein" loading="lazy">
                        </div>
                        <div class="theorist-meta">
                            <h3 class="theorist-name">Albert Einstein</h3>
                            <div class="theorist-sub-row">
                                <span class="theorist-role">THEORETICAL PHYSICIST</span>
                                <span class="theorist-lifespan">1879 - 1955</span>
                            </div>
                        </div>
                    </div>

                    <!-- Marie Curie -->
                    <div class="theorist-card" data-paper="curie">
                        <div class="theorist-photo">
                            <img src="assets/images/scientist-curie.jpg" alt="Marie Curie" loading="lazy">
                        </div>
                        <div class="theorist-meta">
                            <h3 class="theorist-name">Marie Curie</h3>
                            <div class="theorist-sub-row">
                                <span class="theorist-role">PHYSICIST & CHEMIST</span>
                                <span class="theorist-lifespan">1867 - 1934</span>
                            </div>
                        </div>
                    </div>

                    <!-- Isaac Newton -->
                    <div class="theorist-card" data-paper="newton">
                        <div class="theorist-photo">
                            <img src="assets/images/scientist-newton.jpg" alt="Isaac Newton" loading="lazy">
                        </div>
                        <div class="theorist-meta">
                            <h3 class="theorist-name">Isaac Newton</h3>
                            <div class="theorist-sub-row">
                                <span class="theorist-role">MATHEMATICIAN & PHYSICIST</span>
                                <span class="theorist-lifespan">1643 - 1727</span>
                            </div>
                        </div>
                    </div>

                    <!-- Charles Darwin -->
                    <div class="theorist-card" data-paper="darwin">
                        <div class="theorist-photo">
                            <img src="assets/images/scientist-darwin.jpg" alt="Charles Darwin" loading="lazy">
                        </div>
                        <div class="theorist-meta">
                            <h3 class="theorist-name">Charles Darwin</h3>
                            <div class="theorist-sub-row">
                                <span class="theorist-role">NATURALIST</span>
                                <span class="theorist-lifespan">1809 - 1882</span>
                            </div>
                        </div>
                    </div>
                <?php endif; ?>
                </div>
            </div>
        </section>

        <!-- ==============================================================
             SECTION: WHERE THE DISCOVERIES ACTUALLY HAPPENED (Dark #000000)
             ============================================================== -->
        <section class="section-deep-science" id="deep-science">
            <div class="container">
                <div class="discoveries-header">
                    <div>
                        <div class="discoveries-kicker">Featured Research...</div>
                        <h2 class="discoveries-title">Where the discoveries actually happened.</h2>
                    </div>
                    <a href="#theorists" class="link-all-scientists">View all scientists ➔</a>
                </div>

                <div class="cards-grid-3">
                    <!-- Article 1: Quantum Entanglement -->
                    <div class="science-card" data-paper="quantum">
                        <div class="science-banner">
                            <img src="assets/images/quantum-banner.jpg" alt="Quantum Entanglement and Bell's Inequality" loading="lazy">
                        </div>
                        <div class="science-body">
                            <div class="science-subtitle">Physics · Quantum Mechanics</div>
                            <h3 class="science-card-title">Quantum Entanglement and Bell's Inequality</h3>
                            <div class="science-meta">Alain Aspect, John Clauser · 1982 · Experimental</div>
                            <p class="science-card-desc">
                                A landmark experiment confirming that entangled particles violate classical assumptions about locality and hidden variables.
                            </p>
                            <a href="#deep-science" class="science-read-link">Read Research ➔</a>
                        </div>
                    </div>

                    <!-- Article 2: Schrödinger's Cat -->
                    <div class="science-card" data-paper="schrodinger">
                        <div class="science-banner">
                            <img src="assets/images/schrodinger-banner.jpg" alt="Schrödinger’s Cat Paradox" loading="lazy">
                        </div>
                        <div class="science-body">
                            <div class="science-subtitle">Physics · Quantum Mechanics</div>
                            <h3 class="science-card-title">Schrödinger’s Cat Paradox</h3>
                            <div class="science-meta">Erwin Schrödinger · 1935 · Theoretical</div>
                            <p class="science-card-desc">
                                A thought experiment illustrating the problem of quantum superposition and measurement in quantum theory.
                            </p>
                            <a href="#deep-science" class="science-read-link">Explore Article ➔</a>
                        </div>
                    </div>

                    <!-- Article 3: Expanding Universe -->
                    <div class="science-card" data-paper="universe">
                        <div class="science-banner">
                            <img src="assets/images/expanding-universe-banner.jpg" alt="Observational Evidence for an Expanding Univ." loading="lazy">
                        </div>
                        <div class="science-body">
                            <div class="science-subtitle">Physics · Quantum Mechanics</div>
                            <h3 class="science-card-title">Observational Evidence for an Expanding Univ.</h3>
                            <div class="science-meta">Einstein, Podolsky, Rosen · 1935 · Theoretical</div>
                            <p class="science-card-desc">
                                A challenge to the completeness of quantum mechanics, introducing the concept of 'spooky action at a distance.'
                            </p>
                            <a href="#deep-science" class="science-read-link">Learn More ➔</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==============================================================
             SECTION: EVERY FIELD CONNECTS TO ANOTHER (White #ffffff)
             ============================================================== -->
        <section class="section-connect" id="connect">
            <div class="container connect-grid">
                <div class="connect-left">
                    <div class="connect-kicker">Discover Something New</div>
                    <h2 class="connect-title">Every field connects to another, if you look closely enough.</h2>
                    <p class="connect-desc">
                        A theorem in mathematics becomes a proof in physics. A discovery in chemistry becomes a treatment in medicine. ZaineTheory maps those connections — scientist to research, research to subject, subject to the books that explain it all.
                    </p>
                    <a href="#research-subjects" class="btn-explore-research-black">Explore Research ➔</a>
                </div>

                <div class="orbits-container">
                    <video id="orbitsVideo" class="orbits-video" autoplay loop muted playsinline poster="assets/images/orbits-diagram.svg">
                        <source src="assets/images/orbits-video.mp4" type="video/mp4">
                        <img src="assets/images/orbits-diagram.svg" alt="Every field connects to another - Orbits Diagram" loading="lazy">
                    </video>
                </div>
            </div>
        </section>

        <!-- ==============================================================
             SECTION: POPULAR SCIENCE BOOKS (Dark #000000 — matching mockup)
             ============================================================== -->
        <section class="section-books" id="publications">
            <div class="container">
                <div class="books-header">
                    <div>
                        <div class="books-kicker">Popular Science Books...</div>
                        <h2 class="books-title">Go deeper into the ideas.</h2>
                    </div>
                    <a href="#publications" class="link-all-scientists">View all Books ➔</a>
                </div>

                <div class="books-grid">
                    <!-- Book 1: A Brief History of Time -->
                    <div class="book-item" data-paper="book-hawking" data-buy-url="https://www.google.com/search?tbm=bks&q=buy+A+Brief+History+of+Time+Stephen+Hawking">
                        <div class="book-cover-wrap">
                            <div class="book-ground-shadow"></div>
                            <img src="assets/images/book-hawking.png" alt="A Brief History of Time - Stephen Hawking" class="book-cover-img" loading="lazy">
                            <div class="book-glare"></div>
                        </div>
                        <div class="book-meta">
                            <div class="book-title-caption">A Brief History of Time</div>
                            <div class="book-author-caption">Stephen Hawking</div>
                            <a href="https://www.google.com/search?tbm=bks&q=buy+A+Brief+History+of+Time+Stephen+Hawking" target="_blank" rel="noopener noreferrer" class="book-price-row" title="Buy on Google Books">
                                <span class="book-price">$18.00</span>
                                <span class="book-arrow">Buy on Google ➔</span>
                            </a>
                        </div>
                    </div>

                    <!-- Book 2: Silent Spring -->
                    <div class="book-item" data-paper="book-carson" data-buy-url="https://www.google.com/search?tbm=bks&q=buy+Silent+Spring+Rachel+Carson">
                        <div class="book-cover-wrap">
                            <div class="book-ground-shadow"></div>
                            <img src="assets/images/book-carson.png" alt="Silent Spring - Rachel Carson" class="book-cover-img" loading="lazy">
                            <div class="book-glare"></div>
                        </div>
                        <div class="book-meta">
                            <div class="book-title-caption">Silent Spring</div>
                            <div class="book-author-caption">Rachel Carson</div>
                            <a href="https://www.google.com/search?tbm=bks&q=buy+Silent+Spring+Rachel+Carson" target="_blank" rel="noopener noreferrer" class="book-price-row" title="Buy on Google Books">
                                <span class="book-price">$18.00</span>
                                <span class="book-arrow">Buy on Google ➔</span>
                            </a>
                        </div>
                    </div>

                    <!-- Book 3: Research Methods -->
                    <div class="book-item" data-paper="book-research" data-buy-url="https://www.google.com/search?tbm=bks&q=buy+Research+Methods+Willie+Tan">
                        <div class="book-cover-wrap">
                            <div class="book-ground-shadow"></div>
                            <img src="assets/images/book-research-tan.png" alt="Research Methods - Willie Tan" class="book-cover-img" loading="lazy">
                            <div class="book-glare"></div>
                        </div>
                        <div class="book-meta">
                            <div class="book-title-caption">Research Methods</div>
                            <div class="book-author-caption">Willie Tan</div>
                            <a href="https://www.google.com/search?tbm=bks&q=buy+Research+Methods+Willie+Tan" target="_blank" rel="noopener noreferrer" class="book-price-row" title="Buy on Google Books">
                                <span class="book-price">$18.00</span>
                                <span class="book-arrow">Buy on Google ➔</span>
                            </a>
                        </div>
                    </div>

                    <!-- Book 4: A Book on Research Methodology -->
                    <div class="book-item" data-paper="book-methodology" data-buy-url="https://www.google.com/search?tbm=bks&q=buy+A+Book+on+Research+Methodology+Priyanka+Pandey">
                        <div class="book-cover-wrap">
                            <div class="book-ground-shadow"></div>
                            <img src="assets/images/book-methodology-pandey.png" alt="Research Methodology - Dr. Priyanka Pandey" class="book-cover-img" loading="lazy">
                            <div class="book-glare"></div>
                        </div>
                        <div class="book-meta">
                            <div class="book-title-caption">A Book on Research Methodology</div>
                            <div class="book-author-caption">Dr. Priyanka Pandey, Dr. Wasim Raza</div>
                            <a href="https://www.google.com/search?tbm=bks&q=buy+A+Book+on+Research+Methodology+Priyanka+Pandey" target="_blank" rel="noopener noreferrer" class="book-price-row" title="Buy on Google Books">
                                <span class="book-price">$18.00</span>
                                <span class="book-arrow">Buy on Google ➔</span>
                            </a>
                        </div>
                    </div>

                    <!-- Book 5: Writing Scientific Research Articles -->
                    <div class="book-item" data-paper="book-writing" data-buy-url="https://www.google.com/search?tbm=bks&q=buy+Writing+Scientific+Research+Articles+Margaret+Cargill">
                        <div class="book-cover-wrap">
                            <div class="book-ground-shadow"></div>
                            <img src="assets/images/book-writing-cargill.png" alt="Writing Scientific Research Articles - Margaret Cargill" class="book-cover-img" loading="lazy">
                            <div class="book-glare"></div>
                        </div>
                        <div class="book-meta">
                            <div class="book-title-caption">Writing Scientific Research Articles</div>
                            <div class="book-author-caption">Margaret Cargill & Patrick O'Connor</div>
                            <a href="https://www.google.com/search?tbm=bks&q=buy+Writing+Scientific+Research+Articles+Margaret+Cargill" target="_blank" rel="noopener noreferrer" class="book-price-row" title="Buy on Google Books">
                                <span class="book-price">$18.00</span>
                                <span class="book-arrow">Buy on Google ➔</span>
                            </a>
                        </div>
                    </div>

                    <!-- Book 6: An Introduction to Scientific Research -->
                    <div class="book-item" data-paper="book-wilson" data-buy-url="https://www.google.com/search?tbm=bks&q=buy+An+Introduction+to+Scientific+Research+E+Bright+Wilson">
                        <div class="book-cover-wrap">
                            <div class="book-ground-shadow"></div>
                            <img src="assets/images/book-wilson.png" alt="An Introduction to Scientific Research - E. Bright Wilson" class="book-cover-img" loading="lazy">
                            <div class="book-glare"></div>
                        </div>
                        <div class="book-meta">
                            <div class="book-title-caption">An Introduction to Scientific Research</div>
                            <div class="book-author-caption">E. Bright Wilson, Jr.</div>
                            <a href="https://www.google.com/search?tbm=bks&q=buy+An+Introduction+to+Scientific+Research+E+Bright+Wilson" target="_blank" rel="noopener noreferrer" class="book-price-row" title="Buy on Google Books">
                                <span class="book-price">$18.00</span>
                                <span class="book-arrow">Buy on Google ➔</span>
                            </a>
                        </div>
                    </div>

                    <!-- Book 7: Becoming a Behavioral Science Researcher -->
                    <div class="book-item" data-paper="book-behavioral" data-buy-url="https://www.google.com/search?tbm=bks&q=buy+Becoming+a+Behavioral+Science+Researcher+Rex+B+Kline">
                        <div class="book-cover-wrap">
                            <div class="book-ground-shadow"></div>
                            <img src="assets/images/book-behavioral-kline.png" alt="Becoming a Behavioral Science Researcher - Rex B. Kline" class="book-cover-img" loading="lazy">
                            <div class="book-glare"></div>
                        </div>
                        <div class="book-meta">
                            <div class="book-title-caption">Becoming a Behavioral Science Researcher</div>
                            <div class="book-author-caption">Rex B. Kline</div>
                            <a href="https://www.google.com/search?tbm=bks&q=buy+Becoming+a+Behavioral+Science+Researcher+Rex+B+Kline" target="_blank" rel="noopener noreferrer" class="book-price-row" title="Buy on Google Books">
                                <span class="book-price">$18.00</span>
                                <span class="book-arrow">Buy on Google ➔</span>
                            </a>
                        </div>
                    </div>

                    <!-- Book 8: Cosmos -->
                    <div class="book-item" data-paper="book-cosmos" data-buy-url="https://www.google.com/search?tbm=bks&q=buy+Cosmos+Carl+Sagan">
                        <div class="book-cover-wrap">
                            <div class="book-ground-shadow"></div>
                            <img src="assets/images/book-cosmos.png" alt="Cosmos - Carl Sagan" class="book-cover-img" loading="lazy">
                            <div class="book-glare"></div>
                        </div>
                        <div class="book-meta">
                            <div class="book-title-caption">Cosmos</div>
                            <div class="book-author-caption">Carl Sagan</div>
                            <a href="https://www.google.com/search?tbm=bks&q=buy+Cosmos+Carl+Sagan" target="_blank" rel="noopener noreferrer" class="book-price-row" title="Buy on Google Books">
                                <span class="book-price">$18.00</span>
                                <span class="book-arrow">Buy on Google ➔</span>
                            </a>
                        </div>
                    </div>

                    <!-- Book 9: The Selfish Gene -->
                    <div class="book-item" data-paper="book-selfishgene" data-buy-url="https://www.google.com/search?tbm=bks&q=buy+The+Selfish+Gene+Richard+Dawkins">
                        <div class="book-cover-wrap">
                            <div class="book-ground-shadow"></div>
                            <img src="assets/images/book-selfishgene.png" alt="The Selfish Gene - Richard Dawkins" class="book-cover-img" loading="lazy">
                            <div class="book-glare"></div>
                        </div>
                        <div class="book-meta">
                            <div class="book-title-caption">The Selfish Gene</div>
                            <div class="book-author-caption">Richard Dawkins</div>
                            <a href="https://www.google.com/search?tbm=bks&q=buy+The+Selfish+Gene+Richard+Dawkins" target="_blank" rel="noopener noreferrer" class="book-price-row" title="Buy on Google Books">
                                <span class="book-price">$18.00</span>
                                <span class="book-arrow">Buy on Google ➔</span>
                            </a>
                        </div>
                    </div>

                    <!-- Book 10: The Science of Science -->
                    <div class="book-item" data-paper="book-scienceofscience" data-buy-url="https://www.google.com/search?tbm=bks&q=buy+The+Science+of+Science+Dashun+Wang">
                        <div class="book-cover-wrap">
                            <div class="book-ground-shadow"></div>
                            <img src="assets/images/book-scienceofscience.png" alt="The Science of Science - Dashun Wang & Barabási" class="book-cover-img" loading="lazy">
                            <div class="book-glare"></div>
                        </div>
                        <div class="book-meta">
                            <div class="book-title-caption">The Science of Science</div>
                            <div class="book-author-caption">Dashun Wang & Albert-László Barabási</div>
                            <a href="https://www.google.com/search?tbm=bks&q=buy+The+Science+of+Science+Dashun+Wang" target="_blank" rel="noopener noreferrer" class="book-price-row" title="Buy on Google Books">
                                <span class="book-price">$18.00</span>
                                <span class="book-arrow">Buy on Google ➔</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==============================================================
             SECTION: CALL TO ACTION (Crisp White #ffffff)
             ============================================================== -->
        <section class="section-cta" id="cta">
            <div class="container cta-box">
                <span style="font-family: var(--font-mono); font-size: 0.8rem; letter-spacing: 0.25em; color: #71717a; text-transform: uppercase;">JOIN THE REPOSITORY</span>
                <h2 class="cta-title">Every discovery starts with a question. Start exploring.</h2>
                <p class="cta-subtitle">
                    Access open archives, peer reviews, mathematical proofs, and historical manuscripts freely without academic paywalls.
                </p>
                <a href="#hero" class="btn-dark" style="padding: 1rem 2.75rem; font-size: 0.85rem;">START READING NOW ➔</a>
            </div>
        </section>
    </main>
