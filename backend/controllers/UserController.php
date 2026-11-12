<?php
/**
 * User Controller
 */

require_once __DIR__ . '/../models/User.php';
require_once __DIR__ . '/../helpers/functions.php';

class UserController {
    private User $userModel;

    public function __construct() {
        $this->userModel = new User();
    }

    public function list(): void {
        $users = $this->userModel->getAll();
        jsonResponse([
            'status'  => 'success',
            'count'   => count($users),
            'data'    => $users
        ]);
    }

    public function get(int $id): void {
        $user = $this->userModel->findById($id);
        if (!$user) {
            jsonResponse(['status' => 'error', 'message' => 'User not found'], 404);
        }
        jsonResponse(['status' => 'success', 'data' => $user]);
    }

    public function store(): void {
        $data = getJsonInput();
        if (empty($data['name']) || empty($data['email']) || empty($data['password'])) {
            jsonResponse(['status' => 'error', 'message' => 'Name, email and password are required'], 422);
        }

        // Check duplicate
        if ($this->userModel->findByEmail($data['email'])) {
            jsonResponse(['status' => 'error', 'message' => 'Email already registered'], 409);
        }

        $id = $this->userModel->create([
            'name'     => sanitize($data['name']),
            'email'    => filter_var($data['email'], FILTER_SANITIZE_EMAIL),
            'password' => $data['password'],
            'role'     => $data['role'] ?? 'user'
        ]);

        jsonResponse([
            'status'  => 'success',
            'message' => 'User created successfully',
            'id'      => $id
        ], 201);
    }
}
