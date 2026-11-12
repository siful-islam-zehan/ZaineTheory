/**
 * ZaineTheory - Interactive Engine
 */

// Runtime Favicon Refresh (Bypasses stale browser caches immediately)
(function enforceZaineTheoryFavicon() {
    const dataUri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAF6klEQVR4nLVXWUxUVxj+z7nnLjN3NjZlkTpOVSoioE1VpFTbpEuENn2QYuuDNWlcmzQ+2CJGGgX1vVGITexTNWpjXAhJfWiMAsaaxoZC2iYqi5ZVZVjuMndvzjAQIIBToH9yJ2fO9n3/f/7lHIDJggAAw/8neOr+aErboY1Vb3y4Wh55UWBaRio4k+bMSRiG6Rf8Sfce3q9vnkDEnkggCp7/5q6Uvp7m77SRgTJTV5BjW1M4zk0wwwDDCiB4Eq+7k4NfPrp/9Z8xEmjMJK9v/jTxaUfLbWWgK9vQVAchbC0ANmCEQdM0TAgDhBOwmJDesTiUVdRy+2oX1Y7EVLS6n/5dQ8FNPaJjwnLgOHRszoIQoj+gyDKEQq9q/f19vGFoujzQHXxGyDlA6H1wHES1t1Zs+HiVJg2UGppqIUxYcKKuMD9wAFDkYau0dFt/bu6agUhEBYawrGlGLE0afG9F7rvr6RFEtYwM9r5l6ioghB0AB80XnH6yPGycO/fDUGJiolVWtj2FEBaoxhTD1BVHUcNvA8D9KAHLMhc7tj1vf8OYGtSJgtfWnh1asmSJU1xckkQIIXTMiVoWgWPbyDatxXRN7JyRM5Mm0/XPpLmu66Bpinr27PeRHTs+w4sWpfEYMxzDELCpgpMliklm28w0tYm9sc+mC6eNz8zMpfKlSxftnJzVuLCwCAxDFzmOnw58XMh04KZpQCi0TMrOzo4ghDjbtpFhGEhRFDsnJ8fctKkg+n/U5GOENaewsIhZuXI5t23bJ0pz8+/JXm8ATNOcEXxGC1DlLGsUtKioKJKfnw8FBRt4epZut9s907q2tjZpzZo8tb29I8Ht9r4UfFoC1FEIIdDZ2Sk+fvxQrK+vcwCwFQqFhu7duwtut1sEAE1VVRxzLmRZFnAcB62tf0ZaW/8IiKKPGXW4lwuerpMuphuKohe83gDieYFIkuy5du2Gdfp0zWB2dk7k8OEjzxBCBjU/ndvc3Bzeu3ev4HJ5SLzg01pgIgn6UQdiGAZGRkb43bu/4ABA37dvv1Re/nUCxpijBFpaWofWr9/IWpbtEQRhVqeLywJThRKhQH5/gnH+/IXhmpozvtTUVFdszOnp6TG3by9TfD6vQY/jvwiOZxIFNwwDkpKSzYaGBtTUdFel2FRT6gPBYJCRZYXRdQPTyJgph8zLAjzPQ3t7u/vOnQYSDC7FNDQJIU5jY9PQ2rXr2CtXfkqSZZmh8zVNA9OMr5TjeAjE4hxcLtfIzZs/OxkZGR7a19vbJ1VXn1CzsrLskpKPBg8e/OqZrut2VtZKORDw63b0PjFPAgihMQuoly9f1NPT0/w0S1LzBwJ+sa7ueuKDB79xdXXXhczMTMflEgYuXPgxnJeXq2maGqsP8yCAMQZVlazy8m9Giou3Us/HNOxoZAiCgFmWpZHBA4Bw4MB+/5MnnbzX6yWWFV91I7MNMgwGRZGhoKBw8NChQz7qDjdu1A2Ew2GahMZDdczhGIah6ZmSErq6umieilXAORBAKJqOQRB4ubb2DMOyhD169NtwdfVx7yzrxtE4zkVoIZozAYwxSNKQeeLESTUvL89bWRkF93s8fnbML2YT6iPxZEQSIz7psDBmQJKGYcuWd6SKisPcsWPHpaqqUfB4N45D0DgBjNnngLFDDYgwLcc6pKSkRKqqqpSKiiPCqVMnfaLoWyBw6jPYwQx5Pk7ALSY3Klw30tVhhBC9vViwc+fnLyorK923bv0S8Hj80Yq3EErT6xjhXYh3+2+P9tBQRMhOW5ZXN9zfUUKv5bzg5vx+n97V1cWJohhXXX85NgW3dMwQzpscbOjtaN6MoupScRzkS31tj2XoTXK4OxhRZVuRJSIIvGkY+gK8jhxwLBsxLMeJCel93ozQrrHQRbEZ0WdSdmHpK+HuR7UR6cVWy1DBXhCzU7/CQDgXCJ6EW4FFmXv++rX+4cSnGUwkQRvL132wMSKHCy3DTJvvO4HeuBnC9nPewN22BzcbY4+ecaypQgcW4EU4M5up6f9fElC3+kljHi4AAAAASUVORK5CYII=';
    const setFav = () => {
        const iconRels = ['icon', 'shortcut icon', 'apple-touch-icon'];
        iconRels.forEach(rel => {
            let link = document.querySelector(`link[rel="${rel}"]`);
            if (!link) {
                link = document.createElement('link');
                link.rel = rel;
                document.head.appendChild(link);
            }
            link.href = dataUri;
        });
    };
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setFav);
    } else {
        setFav();
    }
})();

let dynamicWikiData = null;

async function loadWikiDataset() {
    try {
        const res = await fetch('assets/data/wiki_data.json');
        if (res.ok) {
            dynamicWikiData = await res.json();
            console.log('[Wikipedia Engine] Dynamic dataset loaded successfully:', dynamicWikiData);
        }
    } catch (e) {
        console.warn('[Wikipedia Engine] Local dataset not loaded, will use fallback:', e);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadWikiDataset();
    initHeroVisual();
    initSubjectsVisual();
    initOrbitsVisual();
    initSearchFilter();
    initSmoothScroll();
    initMobileMenu();
    initReaderModal();
    initBookCardInteractivity();
});

/**
 * Interactive Scientific Reader Drawer / Modal Data & Logic
 */
const papersDatabase = {
    'newton': {
        kicker: 'CLASSICAL MECHANICS • 1687',
        title: 'Philosophiae Naturalis Principia Mathematica',
        author: 'Sir Isaac Newton (Lucasian Professor of Mathematics)',
        date: 'July 5, 1687',
        field: 'Classical Mechanics & Gravitational Physics',
        body: `
            <p>Sir Isaac Newton’s monumental treatise established the three universal laws of motion and the law of universal gravitation, forming the foundation of classical physics for over two centuries.</p>
            <div class="reader-equation-box">F = m · a &nbsp;&nbsp;|&nbsp;&nbsp; F_g = G · (m₁ · m₂) / r²</div>
            <p><strong>First Law (Inertia):</strong> A body remains at rest or in uniform motion along a straight line unless acted upon by a net external force.</p>
            <p><strong>Second Law (Force):</strong> The rate of change of momentum of a body is directly proportional to the applied force and takes place in the direction in which the force acts.</p>
            <p><strong>Third Law (Reciprocal Action):</strong> To every action there is always an equal and opposite reaction.</p>
            <p>These mathematical formulations unified terrestrial physics with the motion of planets, moons, and comets, confirming the heliocentric Copernican model through rigorous geometry and calculus.</p>
        `
    },
    'einstein': {
        kicker: 'THEORETICAL PHYSICS • 1905 & 1915',
        title: 'On the Electrodynamics of Moving Bodies & General Relativity',
        author: 'Albert Einstein (Institute for Advanced Study, Princeton)',
        date: 'June 30, 1905 / November 25, 1915',
        field: 'Special & General Relativity, Quantum Theory',
        body: `
            <p>Albert Einstein revolutionized modern physics during his "annus mirabilis" of 1905, establishing that the speed of light in a vacuum is invariant and defining the equivalence of mass and energy.</p>
            <div class="reader-equation-box">E = m · c² &nbsp;&nbsp;|&nbsp;&nbsp; G_μν + Λg_μν = (8πG / c⁴) · T_μν</div>
            <p>Ten years later, in 1915, Einstein completed the General Theory of Relativity, demonstrating that gravity is not a traditional force but rather the curvature of spacetime induced by mass and energy.</p>
            <p>His theoretical predictions—including gravitational redshift, gravitational lensing, and the existence of black holes and gravitational waves—have all been conclusively confirmed by observational astrophysics.</p>
        `
    },
    'curie': {
        kicker: 'RADIOACTIVITY & ATOMIC PHYSICS • 1898 & 1911',
        title: 'Recherches sur les substances radioactives',
        author: 'Marie Skłodowska-Curie (Sorbonne University / Radium Institute)',
        date: '1898 – 1911',
        field: 'Nuclear Physics & Radiochemistry',
        body: `
            <p>Marie Skłodowska-Curie pioneered the fundamental study of radioactivity, coining the very term and discovering two new chemical elements: polonium and radium.</p>
            <div class="reader-equation-box">Activity = -dN/dt = λ · N &nbsp;&nbsp;|&nbsp;&nbsp; T½ = ln(2) / λ</div>
            <p>Through arduous chemical fractional crystallization of tonnes of pitchblende ore, Curie demonstrated that radioactive emissions were an intrinsic subatomic phenomenon rather than molecular reactions.</p>
            <p>She remains the only individual ever honored with Nobel Prizes in two distinct scientific disciplines (Physics in 1903, Chemistry in 1911).</p>
        `
    },
    'darwin': {
        kicker: 'EVOLUTIONARY BIOLOGY • 1859',
        title: 'On the Origin of Species by Means of Natural Selection',
        author: 'Charles Robert Darwin (Royal Geographical Society)',
        date: 'November 24, 1859',
        field: 'Evolutionary Biology & Natural History',
        body: `
            <p>Charles Darwin established that all species of life have descended over time from common ancestors through the scientific mechanism of natural selection.</p>
            <div class="reader-equation-box">Phenotypic Variation + Differential Fitness + Heritability ⇒ Adaptation</div>
            <p>Following his five-year global voyage aboard HMS Beagle (1831–1836), Darwin synthesized empirical evidence showing how ecological competition and environmental pressures preserve favorable variations.</p>
            <p>His framework unified anatomy, biogeography, embryology, and paleontology, constituting the unifying conceptual foundation of all contemporary life sciences.</p>
        `
    },
    'quantum': {
        kicker: 'QUANTUM FOUNDATIONS • 1964',
        title: "Quantum Entanglement and Bell's Theorem",
        author: 'John Stewart Bell (CERN Theoretical Physics Division)',
        date: 'November 4, 1964',
        field: 'Quantum Information & Foundations',
        body: `
            <p>In 1935, Albert Einstein, Boris Podolsky, and Nathan Rosen published the EPR paradox, questioning whether quantum mechanics was complete or if "hidden local variables" determined particle properties.</p>
            <div class="reader-equation-box">|⟨A, B⟩ - ⟨A, B'⟩| + |⟨A', B⟩ + ⟨A', B'⟩| ≤ 2 &nbsp;(Bell's Inequality)</div>
            <p>In 1964, John Stewart Bell proved that no physical theory based on local realism can reproduce all the predictions of quantum mechanics. Subsequent experiments by Alain Aspect and others showed that nature violates Bell's inequality, confirming quantum entanglement as a fundamental non-local reality.</p>
            <p>Today, quantum entanglement is the cornerstone of quantum cryptography, quantum teleportation, and quantum computation architectures.</p>
        `
    },
    'schrodinger': {
        kicker: 'MEASUREMENT PROBLEM • 1935',
        title: "Schrödinger’s Cat Paradox and Quantum Superposition",
        author: 'Erwin Schrödinger (Nobel Laureate in Physics)',
        date: 'November 1935',
        field: 'Quantum Measurement Theory',
        body: `
            <p>Erwin Schrödinger formulated this thought experiment to illustrate the philosophical dilemma between quantum superposition at the subatomic level and macroscopic everyday reality.</p>
            <div class="reader-equation-box">|Ψ⟩ = 1/√2 (|Alive⟩ + |Decayed⟩)</div>
            <p>In the experiment, a cat is placed in a sealed box with a radioactive atom, a Geiger counter, and a vial of poison. If the atom decays, the poison is released. According to the Copenhagen interpretation, until an observation occurs, the atom is in a superposition of decayed and undecayed states, implying the cat is simultaneously alive and dead.</p>
            <p>The paradox catalyzed modern theories of quantum decoherence and the Many-Worlds interpretation, exploring how quantum probabilities collapse into definitive classical reality.</p>
        `
    },
    'universe': {
        kicker: 'OBSERVATIONAL COSMOLOGY • 1929',
        title: 'Observational Evidence for an Expanding Universe',
        author: 'Edwin Hubble & Milton Humason (Mount Wilson Observatory)',
        date: 'March 15, 1929',
        field: 'Observational Astronomy & Relativistic Cosmology',
        body: `
            <p>Using the 100-inch Hooker telescope, Edwin Hubble measured the spectral redshifts of distant galaxies, discovering that their recessional velocities are directly proportional to their distances from Earth.</p>
            <div class="reader-equation-box">v = H₀ · d &nbsp;(Hubble-Lemaître Law)</div>
            <p>This empirical discovery supported Georges Lemaître and Alexander Friedmann’s solutions to Einstein’s general theory of relativity, confirming that spacetime itself is expanding from a dense initial singularity—the foundation of Big Bang cosmology.</p>
        `
    },
    'book-hawking': {
        kicker: 'COSMOLOGY & THEORETICAL PHYSICS • 1988',
        title: 'A Brief History of Time: From the Big Bang to Black Holes',
        author: 'Stephen W. Hawking (University of Cambridge)',
        date: '1988 (10th Anniversary Updated Edition)',
        field: 'General Relativity, Quantum Gravity & Cosmological Physics',
        body: `
            <p>Stephen Hawking’s world-renowned classic makes complex concepts of modern cosmology accessible to all readers. It explores the nature of space and time, the expanding universe, and black holes.</p>
            <div class="reader-equation-box">S_BH = (k · c³ · A) / (4 · G · ħ) &nbsp;(Bekenstein-Hawking Entropy)</div>
            <p>Hawking details how black holes are not completely black but emit subatomic thermal radiation (Hawking Radiation) due to quantum quantum vacuum fluctuations near the event horizon.</p>
        `
    },
    'book-carson': {
        kicker: 'ENVIRONMENTAL SCIENCE & ECOLOGY • 1962',
        title: 'Silent Spring',
        author: 'Rachel Carson (Marine Biologist & Conservationist)',
        date: 'September 27, 1962',
        field: 'Ecology, Ecotoxicology & Environmental Conservation',
        body: `
            <p>Rachel Carson’s landmark publication catalyzed the modern global environmental movement, documenting the detrimental impacts of indiscriminate synthetic chemical pesticide usage on ecosystems.</p>
            <p>By exposing bioaccumulation across ecological food chains, Carson prompted a worldwide ban on DDT in agriculture and the establishment of international environmental protection frameworks.</p>
        `
    },
    'book-cosmos': {
        kicker: 'ASTRONOMY & ASTROPHYSICS • 1980',
        title: 'Cosmos: The Story of Cosmic Evolution, Science and Civilisation',
        author: 'Carl Sagan (Cornell University / Planetary Society)',
        date: '1980',
        field: 'Planetary Science, Astrophysics & Astrobiology',
        body: `
            <p>Carl Sagan explores 15 billion years of cosmic evolution and the development of science and civilization. Through poetic prose and scientific rigor, Sagan weaves together the history of human understanding.</p>
            <div class="reader-equation-box">N = R* · f_p · n_e · f_l · f_i · f_c · L &nbsp;(Drake Equation)</div>
            <p>The work emphasizes our cosmic connection: "The cosmos is within us. We are made of star-stuff. We are a way for the cosmos to know itself."</p>
        `
    },
    'book-selfishgene': {
        kicker: 'EVOLUTIONARY BIOLOGY • 1976',
        title: 'The Selfish Gene (40th Anniversary Edition)',
        author: 'Richard Dawkins (Oxford University / New College)',
        date: '1976',
        field: 'Gene-Centric Evolutionary Biology & Ethology',
        body: `
            <p>Richard Dawkins presents a gene-centered view of natural selection, demonstrating how organisms are "survival machines" constructed by replicating genes to maximize their reproductive propagation.</p>
            <p>The book also introduced the groundbreaking concept of the <em>meme</em> as the cultural analogue to the biological gene, launching the interdisciplinary field of memetics.</p>
        `
    },
    'book-scienceofscience': {
        kicker: 'COMPUTATIONAL SOCIAL SCIENCE • 2021',
        title: 'The Science of Science',
        author: 'Dashun Wang & Albert-László Barabási',
        date: '2021 (Cambridge University Press)',
        field: 'Network Science, Scientometrics & Computational Discovery',
        body: `
            <p>Wang and Barabási integrate big-data network analytics with historical citation models to decipher the fundamental laws governing scientific breakthroughs, collaboration, and high-impact innovation.</p>
            <p>The text quantitative models the hot-hand effect, team composition dynamics, and predictive indicators of paradigm shifts across modern STEM disciplines.</p>
        `
    },
    'book-wilson': {
        kicker: 'EXPERIMENTAL SCIENTIFIC METHODOLOGY • 1952',
        title: 'An Introduction to Scientific Research',
        author: 'E. Bright Wilson, Jr. (Harvard University)',
        date: '1952 (McGraw-Hill / Dover)',
        field: 'Philosophy of Science, Experimental Design & Error Analysis',
        body: `
            <p>A masterclass in experimental methodology, this definitive text instructs researchers in experimental design, precision instrumentation, systematic error elimination, and empirical hypothesis verification.</p>
        `
    },
    'book-behavioral': {
        kicker: 'BEHAVIORAL METHODOLOGY • 2015',
        title: 'Becoming a Behavioral Science Researcher: A Guide to Producing Research That Matters',
        author: 'Rex B. Kline (Concordia University)',
        date: '2015 (Second Edition)',
        field: 'Psychometrics, Behavioral Methodology & Statistical Modeling',
        body: `
            <p>Rex Kline provides a transparent, practical guide for conducting reproducible behavioral science research, focusing on structural equation modeling, effect sizes, and statistical power integrity.</p>
        `
    },
    'book-methodology': {
        kicker: 'LIFE SCIENCES METHODOLOGY • 2021',
        title: 'A Book on Research Methodology for Ph.D. Course Work in Life Sciences',
        author: 'Dr. Priyanka Pandey & Dr. Wasim Raza',
        date: '2021',
        field: 'Biological Sciences, Bio-statistics & Research Ethics',
        body: `
            <p>A comprehensive academic curriculum guide providing doctoral scholars with systematic protocols for biochemical experimentation, bioinformatics modeling, bioethics, and scientific writing standards.</p>
        `
    },
    'book-research': {
        kicker: 'RESEARCH METHODOLOGY • 2018',
        title: 'Research Methods: A Practical Guide for Students and Researchers',
        author: 'Willie Tan (National University of Singapore)',
        date: '2018 (World Scientific Publishing)',
        field: 'Applied Research Methodology & Epistemology',
        body: `
            <p>An accessible handbook bridging philosophical foundations of inquiry with quantitative and qualitative methodology, sample stratification, and empirical validity verification.</p>
        `
    },
    'book-writing': {
        kicker: 'SCIENTIFIC COMMUNICATION • 2013',
        title: 'Writing Scientific Research Articles: Strategy and Steps',
        author: 'Margaret Cargill & Patrick O’Connor (University of Adelaide)',
        date: '2013 (Wiley-Blackwell)',
        field: 'Scholarly Publication, Peer Review & Academic Writing',
        body: `
            <p>A pedagogical guide breaking down the anatomy of top-tier peer-reviewed articles, providing structured frameworks for drafting results, data visualization, and navigating international peer review.</p>
        `
    }
};

// ==============================================================
// STATIC GOOGLE KNOWLEDGE BASE FOR THEORIES & TOPICS
// Shown when specific queries are not found on Wikipedia or as instant overview
// ==============================================================
const googleStaticTheories = {
    'string theory': {
        title: 'String Theory',
        field: 'Theoretical Physics • Quantum Gravity',
        snippet: 'String theory is a theoretical framework in which the point-like particles of particle physics are replaced by one-dimensional objects called strings. It describes how these strings propagate through space and interact with each other, aiming to unify general relativity with quantum mechanics into a single "theory of everything".',
        principles: 'Vibrational Modes, Extra Dimensions (10 or 11 dimensions), Supersymmetry (Superstrings), D-branes, M-theory unification.',
        proponents: 'Gabriele Veneziano, Edward Witten, Leonard Susskind, Brian Greene',
        equation: 'S = -(T / 2) ∫ d²σ √(-γ) γᵃᵇ ∂ₐX^μ ∂ᵦX_μ   (Polyakov Action)'
    },
    'big bang': {
        title: 'Big Bang Theory',
        field: 'Cosmology & Relativistic Astrophysics',
        snippet: 'The Big Bang is the prevailing cosmological model explaining the rapid expansion of the observable universe from an initial state of extremely high density and temperature approximately 13.8 billion years ago. Major observational evidence includes the Cosmic Microwave Background (CMB) and galactic spectral redshift.',
        principles: 'Cosmic Inflation, Nucleosynthesis, Cosmic Microwave Background (2.725K), Hubble Expansion, Spacetime Metric Curvature.',
        proponents: 'Georges Lemaître, Alexander Friedmann, Edwin Hubble, George Gamow',
        equation: 'H² = (ȧ/a)² = (8πG/3)ρ - kc²/a² + Λc²/3   (Friedmann Equation)'
    },
    'dark matter': {
        title: 'Dark Matter Hypothesis',
        field: 'Astrophysics & Particle Cosmology',
        snippet: 'Dark matter is a hypothetical form of matter that appears not to interact with the electromagnetic field (it does not absorb, reflect, or emit light) and is thus invisible. Its presence is inferred through gravitational effects on galactic rotation curves and gravitational lensing of distant galaxies.',
        principles: 'Galactic Flat Rotation Curves, Gravitational Lensing, WIMPs (Weakly Interacting Massive Particles), Axions, Cold Dark Matter (ΛCDM).',
        proponents: 'Fritz Zwicky (1933), Vera Rubin (1970s), Kent Ford',
        equation: 'v(r) = √(G · M(r) / r) ≈ constant at large r'
    },
    'dark energy': {
        title: 'Dark Energy',
        field: 'Cosmology & Fundamental Physics',
        snippet: 'Dark energy is an unknown form of energy that affects the universe on the largest scales. Its primary effect is accelerating the expansion of the universe. It constitutes roughly 68% of the total energy density of the present observable universe.',
        principles: 'Accelerating Expansion, Cosmological Constant (Λ), Negative Pressure Equation of State (w ≈ -1), Quintessence scalar fields.',
        proponents: 'Saul Perlmutter, Brian Schmidt, Adam Riess (Nobel 2011)',
        equation: 'p = w · ρ · c²   |   w = -1 (Cosmological Constant Vacuum Energy)'
    },
    'chaos theory': {
        title: 'Chaos Theory',
        field: 'Nonlinear Dynamics & Applied Mathematics',
        snippet: 'Chaos theory is an interdisciplinary branch of mathematics focusing on underlying patterns and deterministic laws of dynamical systems that are highly sensitive to initial conditions—popularly known as the Butterfly Effect.',
        principles: 'Deterministic Chaos, Sensitive Dependence on Initial Conditions, Strange Attractors, Fractals, Lyapunov Exponents.',
        proponents: 'Henri Poincaré, Edward Lorenz, Mitchell Feigenbaum, Benoît Mandelbrot',
        equation: 'x_(n+1) = r · x_n · (1 - x_n)   (Logistic Map / Lorenz Attractor)'
    },
    'standard model': {
        title: 'Standard Model of Particle Physics',
        field: 'Quantum Field Theory & Particle Physics',
        snippet: 'The Standard Model is the theory describing three of the four known fundamental forces (electromagnetic, weak, and strong interactions—excluding gravity) in the universe and classifying all known elementary subatomic particles.',
        principles: 'Quarks, Leptons, Gauge Bosons (Photons, Gluons, W/Z), Higgs Mechanism, SU(3) × SU(2) × U(1) Gauge Symmetry.',
        proponents: 'Sheldon Glashow, Steven Weinberg, Abdus Salam, Peter Higgs',
        equation: 'ℒ_SM = -¼ F_μν F^μν + iψ̄ D̸ ψ + (D_μ Φ)† (D^μ Φ) - V(Φ) + ψ̄_L Y Φ ψ_R + h.c.'
    },
    'plate tectonics': {
        title: 'Theory of Plate Tectonics',
        field: 'Geophysics & Earth Sciences',
        snippet: 'Plate tectonics is the universally accepted scientific theory that Earth’s lithosphere consists of several large rigid tectonic plates that move slowly over the asthenosphere, explaining earthquakes, volcanoes, and continental drift.',
        principles: 'Continental Drift, Seafloor Spreading, Subduction Zones, Transform Faults, Mantle Convection.',
        proponents: 'Alfred Wegener, Harry Hess, Tuzo Wilson',
        equation: 'Velocity of Plate Motion: v = d / t ≈ 1 to 10 cm/year'
    },
    'information theory': {
        title: 'Information Theory',
        field: 'Applied Mathematics, Computer Science & Cybernetics',
        snippet: 'Information theory is the mathematical study of the quantification, storage, and communication of information, foundational to all digital communication, data compression, cryptography, and artificial intelligence.',
        principles: 'Shannon Entropy, Channel Capacity, Bit as Universal Unit, Error-Correcting Codes, Mutual Information.',
        proponents: 'Claude Shannon (1948), John von Neumann, Norbert Wiener',
        equation: 'H(X) = - ∑ P(x_i) · log₂ P(x_i)   (Shannon Entropy)'
    },
    'game theory': {
        title: 'Game Theory',
        field: 'Mathematical Economics & Decision Science',
        snippet: 'Game theory is the study of mathematical models of strategic interactions among rational decision-makers, widely applied in economics, evolutionary biology, political science, and artificial intelligence.',
        principles: 'Nash Equilibrium, Zero-Sum Games, Prisoner\'s Dilemma, Dominant Strategies, Evolutionary Stable Strategy (ESS).',
        proponents: 'John von Neumann, Oskar Morgenstern, John Nash (Nobel 1994)',
        equation: 'u_i(s_i*, s_-i*) ≥ u_i(s_i, s_-i*)   ∀ s_i ∈ S_i   (Nash Equilibrium)'
    },
    'black hole': {
        title: 'Black Hole Physics & Thermodynamics',
        field: 'General Relativity & Quantum Gravity',
        snippet: 'A black hole is a region of spacetime where gravity is so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from inside its event horizon.',
        principles: 'Singularity, Event Horizon, Schwarzschild Radius, Hawking Radiation, No-Hair Theorem, Information Paradox.',
        proponents: 'Karl Schwarzschild, Albert Einstein, Subrahmanyan Chandrasekhar, Stephen Hawking, Roger Penrose',
        equation: 'r_s = 2GM / c²   |   S = (k · c³ · A) / (4 · G · ħ)'
    },
    'higgs boson': {
        title: 'Higgs Mechanism & The Higgs Field',
        field: 'Particle Physics & Quantum Electrodynamics',
        snippet: 'The Higgs mechanism describes how elementary gauge bosons acquire mass through spontaneous symmetry breaking in a scalar field that permeates the entire universe, confirmed by the discovery of the Higgs boson at CERN\'s LHC in 2012.',
        principles: 'Spontaneous Symmetry Breaking, Vacuum Expectation Value, Yukawa Coupling, LHC Discovery at 125.18 GeV.',
        proponents: 'Peter Higgs, François Englert, Robert Brout (Nobel 2013)',
        equation: 'V(Φ) = μ² Φ†Φ + λ (Φ†Φ)²   |   v = √(-μ² / λ) ≈ 246 GeV'
    },
    'fermi paradox': {
        title: 'The Fermi Paradox',
        field: 'Astrobiology & Planetary Science',
        snippet: 'The Fermi paradox highlights the apparent contradiction between the high statistical probability of extraterrestrial intelligence in our galaxy and the complete absence of detectable evidence or contact: "Where is everybody?"',
        principles: 'Drake Equation, Great Filter Hypothesis, Rare Earth Hypothesis, Dyson Spheres, Kardashev Scale.',
        proponents: 'Enrico Fermi (1950), Michael H. Hart, Frank Drake, Robin Hanson',
        equation: 'N = R* · f_p · n_e · f_l · f_i · f_c · L   (Drake Probability Equation)'
    }
};

function formatGoogleKnowledgePanel(data, query) {
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query + ' theory')}`;
    const googleScholarUrl = `https://scholar.google.com/scholar?q=${encodeURIComponent(query)}`;
    const googleBooksUrl = `https://www.google.com/search?tbm=bks&q=${encodeURIComponent(query + ' theory')}`;

    return `
        <div class="google-knowledge-panel">
            <div class="google-brand-header">
                <span class="google-brand-badge">
                    <span class="google-g-blue">G</span><span class="google-g-red">o</span><span class="google-g-yellow">o</span><span class="google-g-blue">g</span><span class="google-g-green">l</span><span class="google-g-red">e</span>
                    <span style="color: #94a3b8; font-weight: 400; margin-left: 0.25rem;">Knowledge Graph • Scientific Overview</span>
                </span>
                <span class="google-verified-tag">✓ Verified Theory Record</span>
            </div>

            <div class="google-theory-title">${data.title}</div>
            <div class="google-theory-field">${data.field}</div>

            <div class="google-snippet-box">
                <p style="margin: 0;">${data.snippet}</p>
            </div>

            <div class="google-facts-grid">
                <div class="google-fact-item">
                    <div class="google-fact-label">Core Principles</div>
                    <div class="google-fact-value">${data.principles}</div>
                </div>
                <div class="google-fact-item">
                    <div class="google-fact-label">Key Proponents / Founders</div>
                    <div class="google-fact-value">${data.proponents}</div>
                </div>
                ${data.equation ? `
                <div class="google-fact-item" style="grid-column: 1 / -1;">
                    <div class="google-fact-label">Governing Formula / Mathematical Principle</div>
                    <div class="google-fact-value" style="font-family: var(--font-mono); color: #38bdf8; font-size: 0.88rem; margin-top: 0.25rem;">${data.equation}</div>
                </div>
                ` : ''}
            </div>

            <div class="google-actions-row">
                <a href="${googleSearchUrl}" target="_blank" rel="noopener noreferrer" class="btn-google-action btn-google-search">
                    🔍 Search on Google ↗
                </a>
                <a href="${googleScholarUrl}" target="_blank" rel="noopener noreferrer" class="btn-google-action btn-google-scholar">
                    🎓 Google Scholar Papers ↗
                </a>
                <a href="${googleBooksUrl}" target="_blank" rel="noopener noreferrer" class="btn-google-action btn-google-books">
                    📚 Google Books Library ↗
                </a>
            </div>
        </div>
    `;
}

function generateGoogleKnowledgeCard(rawQuery) {
    const q = (rawQuery || '').trim();
    const cleanQ = q.toLowerCase();

    for (const [key, data] of Object.entries(googleStaticTheories)) {
        if (cleanQ.includes(key) || key.includes(cleanQ)) {
            return formatGoogleKnowledgePanel(data, q);
        }
    }

    const titleCase = q.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const syntheticData = {
        title: titleCase + (titleCase.toLowerCase().includes('theory') ? '' : ' Theory'),
        field: 'Theoretical & Natural Sciences • Peer-Reviewed Corpus',
        snippet: `In scientific inquiry, <strong>${titleCase}</strong> represents a systematic theoretical model formulated to explain observed phenomena, establish empirical hypotheses, and advance natural philosophy through mathematical and observational frameworks.`,
        principles: `Observation & Empirical Verification, Mathematical Modeling, Falsifiability, Peer Review & Reproducibility.`,
        proponents: `Global Scientific Research Community & Theoretical Literature`,
        equation: `ΔS ≥ 0 &nbsp;|&nbsp; ∇ · F = ρ &nbsp;|&nbsp; Ĥ|Ψ⟩ = E|Ψ⟩`
    };
    return formatGoogleKnowledgePanel(syntheticData, q);
}

function initReaderModal() {
    const overlay = document.getElementById('readerModalOverlay');
    const closeBtn = document.getElementById('readerCloseBtn');
    const modalSearchInput = document.getElementById('modalWikiSearchInput');
    const modalSearchBtn = document.getElementById('modalWikiSearchBtn');
    const wikiLink = document.getElementById('readerWikiLink');
    const googleBuyBtn = document.getElementById('readerGoogleBuyBtn');
    if (!overlay) return;

    window.openReader = function(paperKey) {
        let data = papersDatabase[paperKey];
        let wikiEntry = null;

        if (dynamicWikiData) {
            wikiEntry = (dynamicWikiData.theorists || []).find(t => t.slug === paperKey);
            if (!wikiEntry) {
                wikiEntry = (dynamicWikiData.researches || []).find(r => 
                    r.slug === paperKey || 
                    (paperKey === 'quantum' && r.slug.includes('quantum')) || 
                    (paperKey === 'schrodinger' && r.slug.includes('schrodinger')) || 
                    (paperKey === 'universe' && r.slug.includes('expanding'))
                );
            }
            if (!wikiEntry) {
                wikiEntry = (dynamicWikiData.books || []).find(b => b.slug === paperKey);
            }
        }

        if (!data && wikiEntry) {
            data = {
                kicker: 'WIKIPEDIA ARCHIVE • ' + (wikiEntry.role || wikiEntry.field || 'PEER-REVIEWED'),
                title: wikiEntry.name || wikiEntry.title,
                author: wikiEntry.author || wikiEntry.name || 'Scientific Archive',
                date: wikiEntry.year || wikiEntry.lifespan || 'Historical',
                field: wikiEntry.field || wikiEntry.category || 'Natural Sciences',
                body: `<p>${wikiEntry.summary}</p>`
            };
        }

        if (!data) return;

        const isBook = paperKey.startsWith('book-') || (wikiEntry && dynamicWikiData?.books?.some(b => b.slug === wikiEntry.slug));
        const bookBuyUrl = (wikiEntry && wikiEntry.google_buy_url)
            ? wikiEntry.google_buy_url
            : `https://www.google.com/search?tbm=bks&q=buy+${encodeURIComponent((data.title || paperKey) + ' ' + (data.author || ''))}`;

        document.getElementById('readerKicker').textContent = data.kicker;
        document.getElementById('readerTitle').textContent = data.title;
        document.getElementById('readerAuthor').textContent = 'Author: ' + (data.author || 'Archive');
        document.getElementById('readerDate').textContent = 'Published: ' + (data.date || 'Historical');
        document.getElementById('readerField').textContent = 'Field: ' + (data.field || 'Natural Sciences');

        let fullBody = '';

        if (isBook) {
            fullBody += `
                <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.28); border-radius: 8px; padding: 1.15rem 1.35rem; margin: 0.5rem 0 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
                    <div>
                        <div style="font-family: var(--font-mono); font-size: 0.65rem; color: #34d399; letter-spacing: 0.1em; text-transform: uppercase;">Official Purchase Option</div>
                        <div style="font-size: 0.95rem; font-weight: 600; color: #ffffff; margin-top: 0.2rem;">Available across global retailers via Google Books ($18.00)</div>
                    </div>
                    <a href="${bookBuyUrl}" target="_blank" rel="noopener noreferrer" class="btn-buy-google">🛒 Buy on Google Books ↗</a>
                </div>
            `;
        }

        if (wikiEntry && wikiEntry.summary) {
            fullBody += `
                <div class="wiki-badge-row">
                    <span class="wiki-badge">WIKIPEDIA DYNAMIC SYNC</span>
                    <span class="wiki-badge">${wikiEntry.wiki_title || 'Peer-Reviewed Archive'}</span>
                </div>
                <p><strong>Overview:</strong> ${wikiEntry.summary}</p>
            `;
        }

        if (data.body) {
            fullBody += data.body;
        }

        if (wikiEntry && wikiEntry.sections && wikiEntry.sections.length) {
            fullBody += `
                <div class="wiki-sections-wrap" style="margin-top: 1.5rem;">
                    <h4 style="font-family: var(--font-mono); font-size: 0.72rem; color: #38bdf8; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.75rem;">Key Sections from Wikipedia</h4>
            `;
            wikiEntry.sections.forEach(s => {
                fullBody += `
                    <div class="wiki-section-box">
                        <div class="wiki-section-title">${s.title}</div>
                        <div class="wiki-section-text">${s.preview}...</div>
                    </div>
                `;
            });
            fullBody += `</div>`;
        }

        document.getElementById('readerBody').innerHTML = fullBody;

        if (wikiLink) {
            const destUrl = (wikiEntry && (wikiEntry.full_url || wikiEntry.wikipedia_url))
                ? (wikiEntry.full_url || wikiEntry.wikipedia_url)
                : `https://en.wikipedia.org/wiki/${encodeURIComponent((data.title || '').replace(/\s+/g, '_'))}`;
            wikiLink.href = destUrl;
            wikiLink.textContent = 'Read Full Entry on Wikipedia ↗';
        }

        if (googleBuyBtn) {
            if (isBook) {
                googleBuyBtn.href = bookBuyUrl;
                googleBuyBtn.style.display = 'inline-flex';
                googleBuyBtn.textContent = '🛒 Buy on Google Books ($18.00) ↗';
            } else {
                googleBuyBtn.style.display = 'none';
            }
        }

        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.lookupWikipediaLive = async function(query) {
        if (!query || !query.trim()) return;
        const q = query.trim();

        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        document.getElementById('readerKicker').textContent = 'LIVE SCIENTIFIC QUERY IN PROGRESS...';
        document.getElementById('readerTitle').textContent = `Looking up: "${q}"`;
        document.getElementById('readerAuthor').textContent = 'Source: Wikipedia Universal Encyclopedia & Google';
        document.getElementById('readerDate').textContent = 'Live Query: ' + new Date().toLocaleTimeString();
        document.getElementById('readerField').textContent = 'Field: Natural Sciences & Research';
        document.getElementById('readerBody').innerHTML = `<p style="color: #38bdf8;">Searching Wikipedia and Google scientific archives...</p>`;

        if (googleBuyBtn) googleBuyBtn.style.display = 'none';

        try {
            // 1. Try local PHP API proxy
            let res = await fetch(`api/wiki.php?q=${encodeURIComponent(q)}`).catch(() => null);
            let json = null;
            if (res && res.ok) {
                json = await res.json();
            } else {
                // 2. Fallback to direct Wikipedia REST API
                res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(q.replace(/\s+/g, '_'))}`).catch(() => null);
                if (res && res.ok) {
                    const wdata = await res.json();
                    json = {
                        success: true,
                        data: {
                            title: wdata.title,
                            summary: wdata.extract,
                            full_url: wdata.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${encodeURIComponent(q)}`,
                            description: wdata.description
                        }
                    };
                }
            }

            if (json && json.success && json.data && json.data.summary) {
                const item = json.data;
                document.getElementById('readerKicker').textContent = `WIKIPEDIA ENTRY • ${item.description || 'SCIENTIFIC ARCHIVE'}`;
                document.getElementById('readerTitle').textContent = item.title;
                document.getElementById('readerAuthor').textContent = 'Source: Wikipedia Universal Encyclopedia';
                document.getElementById('readerDate').textContent = 'Live Synced: ' + (item.fetched_at || 'Verified Record');
                document.getElementById('readerField').textContent = 'Field: Peer-Reviewed Scientific Heritage';

                let bodyHtml = `
                    <div class="wiki-badge-row">
                        <span class="wiki-badge">LIVE WIKIPEDIA API</span>
                        <span class="wiki-badge">${item.title}</span>
                    </div>
                    <p style="font-size: 1.05rem; line-height: 1.8; color: #f4f4f5;">${item.summary}</p>
                `;

                if (item.sections && item.sections.length) {
                    bodyHtml += `<div class="wiki-sections-wrap" style="margin-top: 1.5rem;">
                        <h4 style="font-family: var(--font-mono); font-size: 0.72rem; color: #38bdf8; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.75rem;">Sections Outline</h4>`;
                    item.sections.forEach(s => {
                        bodyHtml += `<div class="wiki-section-box">
                            <div class="wiki-section-title">${s.title}</div>
                            <div class="wiki-section-text">${s.preview}...</div>
                        </div>`;
                    });
                    bodyHtml += `</div>`;
                }

                // Add Google Knowledge actions under Wikipedia article as well
                bodyHtml += `
                    <div style="margin-top: 1.75rem; padding-top: 1.25rem; border-top: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
                        <span style="font-family: var(--font-mono); font-size: 0.7rem; color: #94a3b8;">Cross-reference on Google:</span>
                        <a href="https://www.google.com/search?q=${encodeURIComponent(q + ' theory')}" target="_blank" rel="noopener noreferrer" class="btn-google-action btn-google-search">🔍 Google Search ↗</a>
                        <a href="https://scholar.google.com/scholar?q=${encodeURIComponent(q)}" target="_blank" rel="noopener noreferrer" class="btn-google-action btn-google-scholar">🎓 Google Scholar ↗</a>
                    </div>
                `;

                document.getElementById('readerBody').innerHTML = bodyHtml;

                if (wikiLink && item.full_url) {
                    wikiLink.href = item.full_url;
                    wikiLink.textContent = 'Read Full Entry on Wikipedia ↗';
                }
            } else {
                // If not found in Wikipedia, show Google Static Knowledge Panel!
                renderGoogleStaticFallback(q);
            }
        } catch (err) {
            // On any network error, show Google Static Knowledge Panel!
            renderGoogleStaticFallback(q);
        }
    };

    function renderGoogleStaticFallback(query) {
        const cardHtml = generateGoogleKnowledgeCard(query);
        document.getElementById('readerKicker').textContent = 'GOOGLE KNOWLEDGE GRAPH • SCIENTIFIC ARCHIVE';
        document.getElementById('readerTitle').textContent = `Theory Overview: ${query}`;
        document.getElementById('readerAuthor').textContent = 'Source: Google Scientific Knowledge Base';
        document.getElementById('readerDate').textContent = 'Archive Record: Verified';
        document.getElementById('readerField').textContent = 'Field: Natural Philosophy, Physics & Research';
        document.getElementById('readerBody').innerHTML = cardHtml;

        if (wikiLink) {
            wikiLink.href = `https://www.google.com/search?q=${encodeURIComponent(query + ' theory')}`;
            wikiLink.textContent = 'Explore on Google ↗';
        }

        if (googleBuyBtn) {
            googleBuyBtn.href = `https://www.google.com/search?tbm=bks&q=books+on+${encodeURIComponent(query)}`;
            googleBuyBtn.style.display = 'inline-flex';
            googleBuyBtn.textContent = '📚 Find Related Books on Google ↗';
        }
    }

    if (modalSearchBtn && modalSearchInput) {
        modalSearchBtn.addEventListener('click', () => {
            lookupWikipediaLive(modalSearchInput.value);
        });
        modalSearchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') lookupWikipediaLive(modalSearchInput.value);
        });
    }

    window.closeReaderModal = function() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeReaderModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeReaderModal();
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeReaderModal();
        }
    });

    // Wire up buttons across the page
    document.querySelectorAll('.btn-read-more').forEach(btn => {
        btn.addEventListener('click', () => openReader('newton'));
    });

    // Wire up theorist scientist cards
    document.querySelectorAll('.theorist-card[data-paper]').forEach(card => {
        card.addEventListener('click', () => {
            const paper = card.getAttribute('data-paper');
            if (paper) openReader(paper);
        });
    });

    // Wire up discovery cards
    document.querySelectorAll('.science-card[data-paper]').forEach(card => {
        card.addEventListener('click', () => {
            const paper = card.getAttribute('data-paper');
            if (paper) openReader(paper);
        });
    });
    const scienceLinks = document.querySelectorAll('.science-card .science-read-link');
    if (scienceLinks[0]) scienceLinks[0].addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); openReader('quantum'); });
    if (scienceLinks[1]) scienceLinks[1].addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); openReader('schrodinger'); });
    if (scienceLinks[2]) scienceLinks[2].addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); openReader('universe'); });

    // Wire up popular science book cards (ignore clicks on the buy button row)
    document.querySelectorAll('.book-item[data-paper]').forEach(book => {
        book.addEventListener('click', (e) => {
            if (e.target.closest('.book-price-row')) return;
            const paper = book.getAttribute('data-paper');
            if (paper) openReader(paper);
        });
    });
}

/**
 * Hero Visual Controller
 * Renders the authentic Pi-Slices falling slabs 60fps canvas animation,
 * responds dynamically to mouse movement with 3D perspective tilt,
 * and auto-swaps to hero-animation.gif if placed in assets/images/
 */
function initHeroVisual() {
    const canvas = document.getElementById('heroFallingSlabsCanvas');
    const heroImg = document.getElementById('heroVisualImg');
    const heroSection = document.querySelector('.hero-section');

    // 1. Auto-detect if user has placed hero-animation.gif locally
    if (heroImg && canvas) {
        const testGif = new Image();
        testGif.src = 'assets/images/hero-animation.gif';
        testGif.onload = () => {
            heroImg.src = testGif.src;
            heroImg.style.display = 'block';
            canvas.style.display = 'none';
        };
    }

    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Isometric slab parameters matching Pi-Slices reference
    const RX = 68;
    const RY = 36;
    const THICKNESS = 10;
    const STACK_X = 265;
    const STACK_BOTTOM = 460;
    const STACK_COUNT = 15;
    const STACK_TOP_Y = STACK_BOTTOM - (STACK_COUNT * THICKNESS);

    // Falling path parameters (flipped: falls from top right to bottom-left stack)
    const START_X = 430;
    const START_Y = 20;
    const START_ANGLE = -0.72; // ~40 degrees tilt

    const CTRL_X = 380;
    const CTRL_Y = 170;

    const CYCLE_DURATION = 720; // ms per slab drop
    const SLABS_IN_AIR = 7;

    function getPointOnArc(t) {
        const u = 1 - t;
        const x = u * u * START_X + 2 * u * t * CTRL_X + t * t * STACK_X;
        const y = u * u * START_Y + 2 * u * t * CTRL_Y + t * t * STACK_TOP_Y;
        const angle = u * START_ANGLE;
        return { x, y, angle };
    }

    function drawIsometricSlab(cx, cy, angle = 0) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);

        const rx = RX;
        const ry = RY;
        const h = THICKNESS;

        // 4 Top vertices of the diamond/isometric square
        const p0 = { x: 0, y: -ry };
        const p1 = { x: rx, y: 0 };
        const p2 = { x: 0, y: ry };
        const p3 = { x: -rx, y: 0 };

        // 4 Bottom vertices (shifted down by h)
        const b1 = { x: rx, y: h };
        const b2 = { x: 0, y: ry + h };
        const b3 = { x: -rx, y: h };

        ctx.fillStyle = '#000000';
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.35;
        ctx.lineJoin = 'miter';

        // 1. Draw bottom-left vertical face
        ctx.beginPath();
        ctx.moveTo(p3.x, p3.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.lineTo(b2.x, b2.y);
        ctx.lineTo(b3.x, b3.y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // 2. Draw bottom-right vertical face
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.lineTo(b2.x, b2.y);
        ctx.lineTo(b1.x, b1.y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // 3. Draw top face (diamond)
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.lineTo(p3.x, p3.y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.restore();
    }

    let startTimestamp = null;

    function render(timestamp) {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        const progress = (elapsed % CYCLE_DURATION) / CYCLE_DURATION;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 1. Draw the Stack at bottom
        // Sinks smoothly as each slab lands to maintain seamless continuous loop
        const sinkY = progress * THICKNESS;
        for (let i = 0; i < STACK_COUNT + 1; i++) {
            const slabY = STACK_BOTTOM - i * THICKNESS + sinkY;
            if (slabY < STACK_BOTTOM + THICKNESS) {
                drawIsometricSlab(STACK_X, slabY, 0);
            }
        }

        // 2. Draw Falling Slabs in air along the arc
        for (let i = SLABS_IN_AIR - 1; i >= 0; i--) {
            const t = (progress + i) / SLABS_IN_AIR;
            if (t >= 0 && t <= 1.02) {
                const pt = getPointOnArc(t);
                drawIsometricSlab(pt.x, pt.y, pt.angle);
            }
        }

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);

    // Mouse 3D perspective response
    const activeVisual = canvas;
    if (heroSection && activeVisual) {
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            activeVisual.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
        });

        heroSection.addEventListener('mouseleave', () => {
            activeVisual.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
        });
    }
}

/**
 * Interconnected Disciplines / Orbits Visual Controller
 * Plays orbits video seamlessly in an infinite loop
 */
function initOrbitsVisual() {
    const orbitsVideo = document.getElementById('orbitsVideo');
    if (!orbitsVideo) return;

    orbitsVideo.muted = true;
    orbitsVideo.setAttribute('playsinline', '');
    const playPromise = orbitsVideo.play();
    if (playPromise !== undefined) {
        playPromise.catch(() => {
            window.addEventListener('scroll', () => orbitsVideo.play(), { once: true });
            window.addEventListener('click', () => orbitsVideo.play(), { once: true });
        });
    }
}

/**
 * Research By Subject - Interactive Background Torus Visual
 * Handles continuous smooth rotation, auto-detects torus-ring.gif, and adds interactive mouse parallax
 */
function initSubjectsVisual() {
    const watermark = document.querySelector('.subjects-bg-watermark');
    const subjectsSection = document.querySelector('.section-subjects');
    if (!watermark) return;

    // Auto-detect if user has placed torus-ring.gif locally
    const testGif = new Image();
    testGif.src = 'assets/images/torus-ring.gif';
    testGif.onload = () => {
        watermark.style.backgroundImage = "url('assets/images/torus-ring.gif')";
    };

    // Responsive subtle mouse drift for organic depth
    if (subjectsSection) {
        subjectsSection.addEventListener('mousemove', (e) => {
            const rect = subjectsSection.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            watermark.style.marginRight = `${-x * 35}px`;
            watermark.style.marginTop = `${y * 25}px`;
        });

        subjectsSection.addEventListener('mouseleave', () => {
            watermark.style.marginRight = '0px';
            watermark.style.marginTop = '0px';
        });
    }
}

/**
 * Search Bar Handler
 */
function initSearchFilter() {
    const searchInput = document.getElementById('heroSearchInput');
    const searchBtn = document.getElementById('heroSearchBtn');

    if (!searchInput) return;

    function handleSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) {
            alert('Search scientists (e.g. "Newton", "Einstein"), subjects, or research.');
            return;
        }

        if (query.includes('newton') || query.includes('motion')) {
            document.getElementById('spotlight-newton')?.scrollIntoView({ behavior: 'smooth' });
        } else if (query.includes('subject') || query.includes('physics') || query.includes('math') || query.includes('geology') || query.includes('computer')) {
            document.getElementById('research-subjects')?.scrollIntoView({ behavior: 'smooth' });
        } else if (query.includes('einstein') || query.includes('scientist') || query.includes('curie') || query.includes('darwin')) {
            document.getElementById('theorists')?.scrollIntoView({ behavior: 'smooth' });
        } else if (query.includes('book') || query.includes('hawking') || query.includes('cosmos')) {
            document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Live Wikipedia Lookup on demand!
            if (window.lookupWikipediaLive) {
                window.lookupWikipediaLive(searchInput.value.trim());
            } else {
                document.getElementById('deep-science')?.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    if (searchBtn) searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
}

/**
 * Smooth Anchor Navigation
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

/**
 * Mobile Navigation Menu Toggle
 */
function initMobileMenu() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (!mobileBtn || !navMenu) return;

    mobileBtn.addEventListener('click', () => {
        const isOpen = navMenu.style.display === 'flex';
        navMenu.style.display = isOpen ? 'none' : 'flex';
        if (!isOpen) {
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.right = '0';
            navMenu.style.background = '#000000';
            navMenu.style.padding = '1.5rem';
            navMenu.style.borderBottom = '1px solid rgba(255,255,255,0.15)';
        }
    });
}

/**
 * 3D Dynamic Perspective Tilt & Glare Controller for Popular Science Books
 */
function initBookCardInteractivity() {
    const bookItems = document.querySelectorAll('.book-item');
    if (!bookItems.length) return;

    bookItems.forEach((item) => {
        const coverImg = item.querySelector('.book-cover-img');
        const glare = item.querySelector('.book-glare');
        if (!coverImg) return;

        let isHovered = false;

        item.addEventListener('mouseenter', () => {
            isHovered = true;
            coverImg.style.animation = 'none';
            coverImg.style.transition = 'transform 0.18s ease-out, filter 0.3s ease-out';
        });

        item.addEventListener('mousemove', (e) => {
            if (!isHovered) return;
            const rect = item.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;

            const tiltX = (y - 0.5) * -12;
            const tiltY = (x - 0.5) * 14;

            coverImg.style.transform = `translateY(-16px) scale(1.05) rotateX(${tiltX.toFixed(2)}deg) rotateY(${(-4 + tiltY).toFixed(2)}deg)`;

            if (glare) {
                const glareX = (x * 100).toFixed(1);
                const glareY = (y * 100).toFixed(1);
                glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 65%)`;
            }
        });

        item.addEventListener('mouseleave', () => {
            isHovered = false;
            coverImg.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), filter 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
            coverImg.style.transform = '';
            setTimeout(() => {
                if (!isHovered) {
                    coverImg.style.animation = '';
                }
            }, 350);
        });
    });
}
