<?php
/**
 * API: Researches & Discoveries
 * GET /api/researches.php
 * GET /api/researches.php?slug=quantum-entanglement
 */

require_once __DIR__ . '/../config/config.php';
require_once __DIR__ . '/../backend/helpers/functions.php';
require_once __DIR__ . '/../backend/models/Research.php';

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$slug = sanitizeInput($_GET['slug'] ?? '');

if (!empty($slug)) {
    $research = Research::findBySlug($slug);
    if ($research) {
        jsonResponse([
            'success' => true,
            'source'  => 'wikipedia_sync',
            'data'    => $research
        ]);
    } else {
        jsonResponse(['success' => false, 'error' => 'Research not found'], 404);
    }
} else {
    $list = Research::getAll();
    jsonResponse([
        'success' => true,
        'source'  => 'wikipedia_sync',
        'count'   => count($list),
        'data'    => $list
    ]);
}
