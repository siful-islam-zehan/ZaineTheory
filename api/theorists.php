<?php
/**
 * API: Theorists / Scientists
 * GET /api/theorists.php
 * GET /api/theorists.php?slug=newton
 */

require_once __DIR__ . '/../config/config.php';
require_once __DIR__ . '/../backend/helpers/functions.php';
require_once __DIR__ . '/../backend/models/Theorist.php';

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$slug = sanitizeInput($_GET['slug'] ?? '');

if (!empty($slug)) {
    $theorist = Theorist::findBySlug($slug);
    if ($theorist) {
        jsonResponse([
            'success' => true,
            'source'  => 'wikipedia_sync',
            'data'    => $theorist
        ]);
    } else {
        jsonResponse(['success' => false, 'error' => 'Theorist not found'], 404);
    }
} else {
    $list = Theorist::getAll();
    jsonResponse([
        'success' => true,
        'source'  => 'wikipedia_sync',
        'count'   => count($list),
        'data'    => $list
    ]);
}
