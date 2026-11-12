<?php
/**
 * Theorist Model (Scientists Who Changed The World)
 * Fetches dynamic data from SQLite or Wikipedia JSON cache
 */

require_once __DIR__ . '/../../config/config.php';
require_once __DIR__ . '/../../config/database.php';

class Theorist {
    private static function getJsonFallback(): array {
        $jsonPath = ROOT_PATH . '/assets/data/wiki_data.json';
        if (file_exists($jsonPath)) {
            $data = json_decode(file_get_contents($jsonPath), true);
            return $data['theorists'] ?? [];
        }
        return [];
    }

    public static function getAll(): array {
        try {
            $db = Database::getConnection();
            $stmt = $db->query("SELECT * FROM theorists ORDER BY id ASC");
            $rows = $stmt->fetchAll();
            if (!empty($rows)) {
                foreach ($rows as &$r) {
                    $r['sections'] = !empty($r['sections_json']) ? json_decode($r['sections_json'], true) : [];
                }
                return $rows;
            }
        } catch (Exception $e) {
            // fallback
        }

        return self::getJsonFallback();
    }

    public static function findBySlug(string $slug): ?array {
        try {
            $db = Database::getConnection();
            $stmt = $db->prepare("SELECT * FROM theorists WHERE slug = :slug LIMIT 1");
            $stmt->execute([':slug' => $slug]);
            $row = $stmt->fetch();
            if ($row) {
                $row['sections'] = !empty($row['sections_json']) ? json_decode($row['sections_json'], true) : [];
                return $row;
            }
        } catch (Exception $e) {
            // fallback
        }

        $all = self::getJsonFallback();
        foreach ($all as $item) {
            if (($item['slug'] ?? '') === $slug) {
                return $item;
            }
        }

        return null;
    }
}
