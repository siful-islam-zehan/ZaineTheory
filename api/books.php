<?php
/**
 * API: Popular Science Books
 * GET /api/books.php
 * GET /api/books.php?slug=book-hawking
 */

require_once __DIR__ . '/../config/config.php';
require_once __DIR__ . '/../backend/helpers/functions.php';
require_once __DIR__ . '/../backend/models/Book.php';

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$slug = sanitizeInput($_GET['slug'] ?? '');

if (!empty($slug)) {
    $book = Book::findBySlug($slug);
    if ($book) {
        jsonResponse([
            'success' => true,
            'source'  => 'wikipedia_sync',
            'data'    => $book
        ]);
    } else {
        jsonResponse(['success' => false, 'error' => 'Book not found'], 404);
    }
} else {
    $list = Book::getAll();
    jsonResponse([
        'success' => true,
        'source'  => 'wikipedia_sync',
        'count'   => count($list),
        'data'    => $list
    ]);
}
