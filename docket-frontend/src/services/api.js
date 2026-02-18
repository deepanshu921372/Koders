import axios from 'axios';

const API_BASE_URL = 'http://localhost:3008/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Task API functions
export const taskService = {
    // Get all tasks
    getAll: async () => {
        const response = await api.get('/tasks');
        return response.data;
    },

    // Get single task
    getById: async (id) => {
        const response = await api.get(`/tasks/${id}`);
        return response.data;
    },

    // Create new task
    create: async (taskData) => {
        const response = await api.post('/tasks', taskData);
        return response.data;
    },

    // Update task
    update: async (id, taskData) => {
        const response = await api.put(`/tasks/${id}`, taskData);
        return response.data;
    },

    // Toggle task status
    toggleStatus: async (id) => {
        const response = await api.patch(`/tasks/${id}/status`);
        return response.data;
    },

    // Delete task
    delete: async (id) => {
        const response = await api.delete(`/tasks/${id}`);
        return response.data;
    }
};

export default api;
