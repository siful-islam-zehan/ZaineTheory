    <!-- FOOTER -->
    <footer class="zahn-footer">
        <div class="container">
            <div class="footer-columns">
                <div class="footer-bio">
                    <a href="index.php" class="brand-logo">
                        <img src="assets/images/zaine-logo.png" alt="ZaineTheory" class="brand-logo-img">
                    </a>
                    <p>
                        An independent global archive and open-access research repository dedicated to scientific theories, mathematical foundations, and humanity's intellectual heritage.
                    </p>
                </div>

                <div class="footer-col">
                    <h4>Subjects</h4>
                    <ul>
                        <li><a href="#research-subjects">Theoretical Physics</a></li>
                        <li><a href="#research-subjects">Astrophysics</a></li>
                        <li><a href="#research-subjects">Molecular Chemistry</a></li>
                        <li><a href="#research-subjects">Evolutionary Biology</a></li>
                        <li><a href="#research-subjects">Applied Mathematics</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Archive</h4>
                    <ul>
                        <li><a href="#spotlight-newton">Historical Manuscripts</a></li>
                        <li><a href="#theorists">Theorist Biographies</a></li>
                        <li><a href="#deep-science">Paradoxes & Proofs</a></li>
                        <li><a href="#publications">Curated Bookshelf</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Community</h4>
                    <ul>
                        <li><a href="#cta">Peer Review Submissions</a></li>
                        <li><a href="#cta">Open Access Initiative</a></li>
                        <li><a href="#cta">Research Grants</a></li>
                        <li><a href="#cta">Citation Standards</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Legal & Ethics</h4>
                    <ul>
                        <li><a href="#cta">Open Commons License</a></li>
                        <li><a href="#cta">Data Privacy Protocol</a></li>
                        <li><a href="#cta">Academic Integrity</a></li>
                        <li><a href="#cta">Security & Encryption</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bar">
                <div>© <?= date('Y') ?> ZaineTheory. All theories open to rational inquiry.</div>
                <div>Designed & Engineered with PHP, REST API & Modern Frontend</div>
            </div>
        </div>
    </footer>

    <!-- SCIENTIFIC READER DRAWER / MODAL (Powered Dynamically by Wikipedia API) -->
    <div class="reader-modal-overlay" id="readerModalOverlay">
        <div class="reader-modal-card">
            <button type="button" class="reader-close-btn" id="readerCloseBtn" aria-label="Close reader">✕</button>
            
            <!-- Live Wikipedia Search Bar within Modal -->
            <div class="reader-wiki-search-box">
                <span class="wiki-search-icon">🔍</span>
                <input type="text" id="modalWikiSearchInput" class="modal-wiki-search-input" placeholder="Search any theory or scientist on Wikipedia (e.g. Higgs Boson, Dark Matter, James Webb)..." autocomplete="off">
                <button type="button" id="modalWikiSearchBtn" class="modal-wiki-search-btn">Lookup</button>
            </div>

            <span class="reader-kicker" id="readerKicker">PEER-REVIEWED MANUSCRIPT • WIKIPEDIA DYNAMIC ENGINE</span>
            <h2 class="reader-title" id="readerTitle">Theoretical Manuscript Title</h2>
            <div class="reader-meta-row">
                <span id="readerAuthor">Author: Theoretical Physics Archive</span>
                <span id="readerDate">Published: Archive Record</span>
                <span id="readerField">Field: Foundational Science</span>
            </div>
            <div class="reader-content" id="readerBody">
                <p>Content will be dynamically injected here...</p>
            </div>
            <div class="reader-actions">
                <a href="#" target="_blank" rel="noopener noreferrer" class="btn-buy-google" id="readerGoogleBuyBtn" style="display: none;">🛒 Buy on Google Books ($18.00) ↗</a>
                <a href="https://en.wikipedia.org" target="_blank" rel="noopener noreferrer" class="btn-read-more" id="readerWikiLink">Read Full Entry on Wikipedia ↗</a>
                <button type="button" class="btn-more-research" onclick="closeReaderModal()">Close Reader</button>
            </div>
        </div>
    </div>

    <!-- Interactive Scripts -->
    <script src="assets/js/api.js"></script>
    <script src="assets/js/main.js"></script>
</body>
</html>
