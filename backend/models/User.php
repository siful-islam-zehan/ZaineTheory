<?php
/**
 * User Model
 */

require_once __DIR__ . '/../../config/database.php';

class User {
    private PDO $db;

    public function __construct() {
        $this->db = Database::getConnection();
    }

    /**
     * Get all users
     */
    public function getAll(): array {
        try {
            $stmt = $this->db->query("SELECT id, name, email, role, avatar, created_at FROM users ORDER BY id DESC");
            return $stmt->fetchAll();
        } catch (PDOException $e) {
            return [];
        }
    }

    /**
     * Find user by ID
     */
    public function findById(int $id): ?array {
        try {
            $stmt = $this->db->prepare("SELECT id, name, email, role, avatar, created_at FROM users WHERE id = :id LIMIT 1");
            $stmt->execute(['id' => $id]);
            $user = $stmt->fetch();
            return $user ?: null;
        } catch (PDOException $e) {
            return null;
        }
    }

    /**
     * Find user by Email
     */
    public function findByEmail(string $email): ?array {
        try {
            $stmt = $this->db->prepare("SELECT * FROM users WHERE email = :email LIMIT 1");
            $stmt->execute(['email' => $email]);
            $user = $stmt->fetch();
            return $user ?: null;
        } catch (PDOException $e) {
            return null;
        }
    }

    /**
     * Create new user
     */
    public function create(array $data): int {
        $stmt = $this->db->prepare("INSERT INTO users (name, email, password, role) VALUES (:name, :email, :password, :role)");
        $stmt->execute([
            'name'     => $data['name'],
            'email'    => $data['email'],
            'password' => password_hash($data['password'], PASSWORD_DEFAULT),
            'role'     => $data['role'] ?? 'user'
        ]);
        return (int) $this->db->lastInsertId();
    }

    /**
     * Delete user
     */
    public function delete(int $id): bool {
        $stmt = $this->db->prepare("DELETE FROM users WHERE id = :id");
        return $stmt->execute(['id' => $id]);
    }
}
