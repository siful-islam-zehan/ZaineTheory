<main class="container section">
    <div class="card" style="max-width: 440px; margin: 2rem auto; padding: 2.25rem;">
        <div style="text-align: center; margin-bottom: 1.75rem;">
            <img src="assets/images/logo.svg" alt="Logo" style="width: 48px; height: 48px; margin: 0 auto 0.75rem;">
            <h2 style="font-size: 1.6rem; font-weight: 700;">Welcome Back</h2>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Sign in to your account to continue</p>
        </div>

        <?php if (!empty($_SESSION['error'])): ?>
            <div class="alert alert-error">
                <?= htmlspecialchars($_SESSION['error']); unset($_SESSION['error']); ?>
            </div>
        <?php endif; ?>

        <?php if (!empty($_SESSION['success'])): ?>
            <div class="alert alert-success">
                <?= htmlspecialchars($_SESSION['success']); unset($_SESSION['success']); ?>
            </div>
        <?php endif; ?>

        <form action="index.php?page=login" method="POST">
            <div class="form-group">
                <label class="form-label" for="loginEmail">Email Address</label>
                <input type="email" id="loginEmail" name="email" class="form-control" placeholder="name@example.com" value="admin@example.com" required>
            </div>

            <div class="form-group">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                    <label class="form-label" for="loginPassword" style="margin-bottom: 0;">Password</label>
                    <a href="#" style="font-size: 0.8rem; color: var(--primary);">Forgot?</a>
                </div>
                <input type="password" id="loginPassword" name="password" class="form-control" placeholder="••••••••" value="password" required>
            </div>

            <div style="margin-bottom: 1.25rem; font-size: 0.85rem; background: rgba(79, 70, 229, 0.08); padding: 0.6rem 0.8rem; border-radius: var(--radius-sm); border: 1px dashed rgba(79, 70, 229, 0.3);">
                🔑 <strong>Demo Access:</strong> <code>admin@example.com</code> / <code>password</code>
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%; padding: 0.75rem;">Sign In ➔</button>
        </form>

        <p style="text-align: center; margin-top: 1.5rem; font-size: 0.9rem; color: var(--text-muted);">
            Don't have an account? <a href="index.php?page=register" style="font-weight: 600;">Create one</a>
        </p>
    </div>
</main>
