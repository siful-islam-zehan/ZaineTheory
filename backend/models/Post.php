<?php
/**
 * Post Model
 */

require_once __DIR__ . '/../../config/database.php';

class Post {
    private PDO $db;

    public function __construct() {
        $this->db = Database::getConnection();
    }

    /**
     * Get all published posts with author and category details
     */
    public function getAll(int $limit = 10): array {
        try {
            $sql = "SELECT p.*, u.name as author_name, c.name as category_name 
                    FROM posts p
                    LEFT JOIN users u ON p.user_id = u.id
                    LEFT JOIN categories c ON p.category_id = c.id
                    ORDER BY p.id DESC
                    LIMIT :limit";
            $stmt = $this->db->prepare($sql);
            $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
            $stmt->execute();
            return $stmt->fetchAll();
        } catch (PDOException $e) {
            return [];
        }
    }

    /**
     * Find post by slug
     */
    public function findBySlug(string $slug): ?array {
        try {
            $sql = "SELECT p.*, u.name as author_name, c.name as category_name 
                    FROM posts p
                    LEFT JOIN users u ON p.user_id = u.id
                    LEFT JOIN categories c ON p.category_id = c.id
                    WHERE p.slug = :slug LIMIT 1";
            $stmt = $this->db->prepare($sql);
            $stmt->execute(['slug' => $slug]);
            $post = $stmt->fetch();
            return $post ?: null;
        } catch (PDOException $e) {
            return null;
        }
    }

    /**
     * Create new post
     */
    public function create(array $data): int {
        $sql = "INSERT INTO posts (user_id, category_id, title, slug, content, image, status) 
                VALUES (:user_id, :category_id, :title, :slug, :content, :image, :status)";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([
            'user_id'     => $data['user_id'] ?? 1,
            'category_id' => $data['category_id'] ?? null,
            'title'       => $data['title'],
            'slug'        => $data['slug'],
            'content'     => $data['content'],
            'image'       => $data['image'] ?? 'assets/images/banner.svg',
            'status'      => $data['status'] ?? 'published'
        ]);
        return (int) $this->db->lastInsertId();
    }
}
