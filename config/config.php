<?php
/**
 * Application Configuration
 */

// Error reporting (set to 0 in production)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Session start if not already active
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Application Constants
define('APP_NAME', 'ZaineTheory');
define('APP_VERSION', '1.0.0');
define('APP_URL', 'http://localhost:8000');

// Database Configuration
define('DB_HOST', 'localhost');
define('DB_NAME', 'my_website_db');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_CHARSET', 'utf8mb4');

// Paths
define('ROOT_PATH', dirname(__DIR__));
define('VIEWS_PATH', ROOT_PATH . '/views');
define('ASSETS_PATH', ROOT_PATH . '/assets');

// Timezone
date_default_timezone_set('Asia/Dhaka');
