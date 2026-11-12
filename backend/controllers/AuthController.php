<?php
/**
 * Auth Controller
 * Handles user login, registration, and session management
 */

require_once __DIR__ . '/../models/User.php';
require_once __DIR__ . '/../helpers/functions.php';

class AuthController {
    private User $userModel;

    public function __construct() {
        $this->userModel = new User();
    }

    /**
     * Handle user login
     */
    public function login(): void {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            return;
        }

        $email = trim($_POST['email'] ?? '');
        $password = $_POST['password'] ?? '';

        if (empty($email) || empty($password)) {
            $_SESSION['error'] = 'Please provide both email and password.';
            redirect('index.php?page=login');
        }

        $user = $this->userModel->findByEmail($email);

        if ($user && password_verify($password, $user['password'])) {
            // Set session
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['user_name'] = $user['name'];
            $_SESSION['user_email'] = $user['email'];
            $_SESSION['user_role'] = $user['role'];
            $_SESSION['success'] = 'Welcome back, ' . htmlspecialchars($user['name']) . '!';
            redirect('index.php?page=dashboard');
        } else {
            $_SESSION['error'] = 'Invalid email or password.';
            redirect('index.php?page=login');
        }
    }

    /**
     * Handle user registration
     */
    public function register(): void {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            return;
        }

        $name = trim($_POST['name'] ?? '');
        $email = trim($_POST['email'] ?? '');
        $password = $_POST['password'] ?? '';
        $confirmPassword = $_POST['confirm_password'] ?? '';

        if (empty($name) || empty($email) || empty($password)) {
            $_SESSION['error'] = 'All fields are required.';
            redirect('index.php?page=register');
        }

        if ($password !== $confirmPassword) {
            $_SESSION['error'] = 'Passwords do not match.';
            redirect('index.php?page=register');
        }

        if (strlen($password) < 6) {
            $_SESSION['error'] = 'Password must be at least 6 characters long.';
            redirect('index.php?page=register');
        }

        if ($this->userModel->findByEmail($email)) {
            $_SESSION['error'] = 'An account with this email already exists.';
            redirect('index.php?page=register');
        }

        $userId = $this->userModel->create([
            'name'     => sanitize($name),
            'email'    => filter_var($email, FILTER_SANITIZE_EMAIL),
            'password' => $password,
            'role'     => 'user'
        ]);

        $_SESSION['user_id'] = $userId;
        $_SESSION['user_name'] = $name;
        $_SESSION['user_email'] = $email;
        $_SESSION['user_role'] = 'user';
        $_SESSION['success'] = 'Account created successfully! Welcome aboard.';
        redirect('index.php?page=dashboard');
    }

    /**
     * Log out current user
     */
    public function logout(): void {
        unset($_SESSION['user_id'], $_SESSION['user_name'], $_SESSION['user_email'], $_SESSION['user_role']);
        session_destroy();
        redirect('index.php?page=login');
    }
}
