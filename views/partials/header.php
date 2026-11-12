<?php
if (!defined('APP_NAME')) {
    require_once __DIR__ . '/../../config/config.php';
}
$pageTitle = $pageTitle ?? 'ZaineTheory — It\'s Just Theory';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="ZaineTheory — An open theoretical archive exploring scientific discoveries, paradoxes, and natural philosophy.">
    <title><?= htmlspecialchars($pageTitle) ?></title>

    <!-- Favicon (Inline Data URI for instant browser render & no cache delay) -->
    <link rel="icon" type="image/png" href="data:image/png;base64,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">
    <link rel="shortcut icon" href="favicon.ico?v=zainetheory2026">
    <link rel="icon" type="image/svg+xml" href="assets/favicon/favicon.svg?v=zainetheory2026">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png?v=zainetheory2026">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png?v=zainetheory2026">
    <link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-touch-icon.png?v=zainetheory2026">
    <link rel="manifest" href="assets/favicon/site.webmanifest?v=zainetheory2026">
    <meta name="theme-color" content="#09090c">

    <!-- Stylesheets -->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/components.css">
</head>
<body>

    <!-- NAVBAR (ZaineTheory) -->
    <header class="zahn-nav">
        <div class="container nav-wrapper">
            <a href="index.php" class="brand-logo">
                <img src="assets/images/zaine-logo.png" alt="ZaineTheory" class="brand-logo-img">
            </a>

            <nav>
                <ul class="nav-menu" id="navMenu">
                    <li class="nav-item"><a href="index.php">Home</a></li>
                    <li class="nav-item"><a href="#theorists">Interviews</a></li>
                    <li class="nav-item"><a href="#research-subjects">Database</a></li>
                    <li class="nav-item"><a href="#deep-science">Files</a></li>
                    <li class="nav-item"><a href="#publications">Libraries</a></li>
                </ul>
            </nav>

            <div class="nav-cta">
                <a href="#spotlight-newton" class="btn-demo-note">Read Demo Note</a>
                <a href="#cta" class="btn-apply-class">Apply for Class</a>
            </div>

            <button type="button" class="nav-mobile-btn" id="mobileMenuBtn" aria-label="Toggle Menu">☰</button>
        </div>
    </header>
