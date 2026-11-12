<?php
/**
 * REST API Endpoint: /api/users.php
 * Handles GET, POST, DELETE requests
 */

require_once __DIR__ . '/../config/config.php';
require_once __DIR__ . '/../backend/controllers/UserController.php';

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$controller = new UserController();

switch ($method) {
    case 'GET':
        if (isset($_GET['id'])) {
            $controller->get((int)$_GET['id']);
        } else {
            $controller->list();
        }
        break;

    case 'POST':
        $controller->store();
        break;

    default:
        jsonResponse([
            'status'  => 'error',
            'message' => "Method {$method} not allowed"
        ], 405);
        break;
}
