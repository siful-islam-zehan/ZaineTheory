<main class="container section">
    <div class="card" style="max-width: 650px; margin: 0 auto;">
        <h2>Contact Us</h2>
        <p style="margin-top: 0.5rem; margin-bottom: 1.5rem; color: var(--text-muted);">
            Send us a message or inquiry through the form below.
        </p>

        <?php if (!empty($_POST['name'])): ?>
            <div class="alert alert-success">
                ✓ Thank you, <?= htmlspecialchars($_POST['name']) ?>! Your message has been received.
            </div>
        <?php endif; ?>

        <form action="index.php?page=contact" method="POST">
            <div class="form-group">
                <label class="form-label" for="name">Your Name</label>
                <input type="text" id="name" name="name" class="form-control" placeholder="e.g. Tanvir Hasan" required>
            </div>

            <div class="form-group">
                <label class="form-label" for="email">Email Address</label>
                <input type="email" id="email" name="email" class="form-control" placeholder="name@example.com" required>
            </div>

            <div class="form-group">
                <label class="form-label" for="subject">Subject</label>
                <input type="text" id="subject" name="subject" class="form-control" placeholder="Project Inquiry" required>
            </div>

            <div class="form-group">
                <label class="form-label" for="message">Message</label>
                <textarea id="message" name="message" class="form-control" rows="4" placeholder="Write your message here..." required></textarea>
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message 🚀</button>
        </form>
    </div>
</main>
