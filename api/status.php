<?php
/**
 * API Health & Status Endpoint
 */

require_once __DIR__ . '/../config/config.php';
require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../backend/helpers/functions.php';

$dbStatus = 'disconnected';
$serverTime = date('Y-m-d H:i:s');

try {
    $db = Database::getConnection();
    $dbStatus = 'connected';
} catch (Exception $e) {
    $dbStatus = 'error: ' . $e->getMessage();
}

$wikiJson = ROOT_PATH . '/assets/data/wiki_data.json';
$wikiStats = null;
if (file_exists($wikiJson)) {
    $wd = json_decode(file_get_contents($wikiJson), true);
    $wikiStats = [
        'sync_time'  => $wd['sync_time'] ?? null,
        'theorists'  => count($wd['theorists'] ?? []),
        'researches' => count($wd['researches'] ?? []),
        'books'      => count($wd['books'] ?? []),
        'subjects'   => count($wd['subjects'] ?? [])
    ];
}

jsonResponse([
    'app'          => APP_NAME,
    'version'      => APP_VERSION,
    'status'       => 'operational',
    'database'     => $dbStatus,
    'php_version'  => PHP_VERSION,
    'server_time'  => $serverTime,
    'wikipedia_engine' => [
        'api'      => 'wikipedia-api (Python 3.12)',
        'synced'   => $wikiStats
    ],
    'endpoints'    => [
        'GET /api/theorists.php'  => 'Fetch theorists / scientists synced with Wikipedia',
        'GET /api/researches.php' => 'Fetch scientific discoveries & research papers',
        'GET /api/books.php'      => 'Fetch popular science books with chapters & prices',
        'GET /api/wiki.php?q=...' => 'Live on-demand Wikipedia paper/theory lookup',
        'GET /api/users.php'      => 'Fetch list of all users',
        'POST /api/users.php'     => 'Create a new user',
        'GET /api/posts.php'      => 'Fetch blog/articles',
        'POST /api/posts.php'     => 'Create new post',
        'GET /api/status.php'     => 'Check API server health'
    ]
]);
