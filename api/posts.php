<?php
/**
 * REST API Endpoint: /api/posts.php
 * Handles GET and POST requests
 */

require_once __DIR__ . '/../config/config.php';
require_once __DIR__ . '/../backend/models/Post.php';
require_once __DIR__ . '/../backend/helpers/functions.php';

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$postModel = new Post();

switch ($method) {
    case 'GET':
        if (isset($_GET['slug'])) {
            $post = $postModel->findBySlug($_GET['slug']);
            if (!$post) {
                jsonResponse(['status' => 'error', 'message' => 'Post not found'], 404);
            }
            jsonResponse(['status' => 'success', 'data' => $post]);
        } else {
            $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 10;
            $posts = $postModel->getAll($limit);
            jsonResponse(['status' => 'success', 'count' => count($posts), 'data' => $posts]);
        }
        break;

    case 'POST':
        $data = getJsonInput();
        if (empty($data['title']) || empty($data['content'])) {
            jsonResponse(['status' => 'error', 'message' => 'Title and content are required'], 422);
        }

        $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $data['title'])));
        $id = $postModel->create([
            'user_id'     => $data['user_id'] ?? 1,
            'category_id' => $data['category_id'] ?? null,
            'title'       => sanitize($data['title']),
            'slug'        => $slug . '-' . time(),
            'content'     => sanitize($data['content']),
            'image'       => $data['image'] ?? 'assets/images/banner.svg'
        ]);

        jsonResponse([
            'status'  => 'success',
            'message' => 'Post created successfully',
            'id'      => $id
        ], 201);
        break;

    default:
        jsonResponse(['status' => 'error', 'message' => "Method {$method} not allowed"], 405);
        break;
}
