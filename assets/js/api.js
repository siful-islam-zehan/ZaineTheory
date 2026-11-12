/**
 * WebProject Studio - API Client Service
 * Handles all REST API communications (Fetch API)
 */

const Api = {
    baseUrl: 'api',

    /**
     * Send GET request
     */
    async get(endpoint) {
        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });
            return await response.json();
        } catch (error) {
            console.error('API GET Error:', error);
            throw error;
        }
    },

    /**
     * Send POST request
     */
    async post(endpoint, data) {
        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            console.error('API POST Error:', error);
            throw error;
        }
    },

    /**
     * Check System Health
     */
    async checkHealth() {
        return await this.get('status.php');
    },

    /**
     * Fetch users list
     */
    async getUsers() {
        return await this.get('users.php');
    },

    /**
     * Create user
     */
    async createUser(userData) {
        return await this.post('users.php', userData);
    },

    /**
     * Fetch posts
     */
    async getPosts(limit = 10) {
        return await this.get(`posts.php?limit=${limit}`);
    },

    /**
     * Fetch all theorists synced from Wikipedia
     */
    async getTheorists(slug = null) {
        return await this.get(slug ? `theorists.php?slug=${encodeURIComponent(slug)}` : 'theorists.php');
    },

    /**
     * Fetch research papers & discoveries
     */
    async getResearches(slug = null) {
        return await this.get(slug ? `researches.php?slug=${encodeURIComponent(slug)}` : 'researches.php');
    },

    /**
     * Fetch popular science books with chapters & pricing
     */
    async getBooks(slug = null) {
        return await this.get(slug ? `books.php?slug=${encodeURIComponent(slug)}` : 'books.php');
    },

    /**
     * Live Wikipedia Query
     */
    async searchWikipedia(query) {
        return await this.get(`wiki.php?q=${encodeURIComponent(query)}`);
    }
};

window.Api = Api;
