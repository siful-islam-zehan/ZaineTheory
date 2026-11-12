<main class="container section">
    <div class="card" style="max-width: 460px; margin: 2rem auto; padding: 2.25rem;">
        <div style="text-align: center; margin-bottom: 1.75rem;">
            <img src="assets/images/logo.svg" alt="Logo" style="width: 48px; height: 48px; margin: 0 auto 0.75rem;">
            <h2 style="font-size: 1.6rem; font-weight: 700;">Create Account</h2>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Join WebProject Studio today</p>
        </div>

        <?php if (!empty($_SESSION['error'])): ?>
            <div class="alert alert-error">
                <?= htmlspecialchars($_SESSION['error']); unset($_SESSION['error']); ?>
            </div>
        <?php endif; ?>

        <form action="index.php?page=register" method="POST">
            <div class="form-group">
                <label class="form-label" for="regName">Full Name</label>
                <input type="text" id="regName" name="name" class="form-control" placeholder="e.g. Asif Mahmud" required>
            </div>

            <div class="form-group">
                <label class="form-label" for="regEmail">Email Address</label>
                <input type="email" id="regEmail" name="email" class="form-control" placeholder="asif@example.com" required>
            </div>

            <div class="form-group">
                <label class="form-label" for="regPassword">Password</label>
                <input type="password" id="regPassword" name="password" class="form-control" placeholder="At least 6 characters" minlength="6" required>
            </div>

            <div class="form-group">
                <label class="form-label" for="regConfirmPassword">Confirm Password</label>
                <input type="password" id="regConfirmPassword" name="confirm_password" class="form-control" placeholder="Repeat your password" minlength="6" required>
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%; padding: 0.75rem;">Create Account ➔</button>
        </form>

        <p style="text-align: center; margin-top: 1.5rem; font-size: 0.9rem; color: var(--text-muted);">
            Already have an account? <a href="index.php?page=login" style="font-weight: 600;">Sign In</a>
        </p>
    </div>
</main>
