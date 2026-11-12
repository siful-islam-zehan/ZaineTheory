<?php
/**
 * Database Auto-Installer / Migration Script
 * Run this from browser or terminal: php database/setup.php
 */

require_once __DIR__ . '/../config/config.php';
require_once __DIR__ . '/../config/database.php';

try {
    $db = Database::getConnection();
    $sql = file_get_contents(__DIR__ . '/schema.sql');

    // Clean for multi-query execution
    $db->exec($sql);

    echo "<h2 style='color: green;'>✓ Database tables and seed data created successfully!</h2>";
    echo "<p><a href='../index.php'>Go to Home Page</a></p>";
} catch (PDOException $e) {
    echo "<h2 style='color: red;'>✗ Database Setup Error:</h2>";
    echo "<p>" . htmlspecialchars($e->getMessage()) . "</p>";
}
