<?php
/**
 * Application Entry Point & Front Controller
 */

require_once __DIR__ . '/config/config.php';
require_once __DIR__ . '/config/database.php';
require_once __DIR__ . '/backend/helpers/functions.php';

// Simple Route Resolver
$page = isset($_GET['page']) ? trim($_GET['page']) : 'home';

// Allowed Views
$allowedPages = [
    'home'    => ['view' => 'home.php',    'title' => 'Home - ' . APP_NAME],
    'about'   => ['view' => 'about.php',   'title' => 'About Us - ' . APP_NAME],
    'contact' => ['view' => 'contact.php', 'title' => 'Contact Us - ' . APP_NAME],
];

if (array_key_exists($page, $allowedPages)) {
    $current = $allowedPages[$page];
    $pageTitle = $current['title'];
    $viewFile  = VIEWS_PATH . '/' . $current['view'];
} else {
    http_response_code(404);
    $pageTitle = 'Page Not Found - ' . APP_NAME;
    $viewFile  = VIEWS_PATH . '/404.php';
}

// Render Page
require_once VIEWS_PATH . '/partials/header.php';
if (file_exists($viewFile)) {
    require_once $viewFile;
} else {
    echo "<main class='container'><p>View file not found: " . htmlspecialchars($viewFile) . "</p></main>";
}
require_once VIEWS_PATH . '/partials/footer.php';
