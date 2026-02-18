const express = require('express');
const router = express.Router();

const {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    toggleTaskStatus,
    deleteTask
} = require('../controllers/taskController');

// Task routes
router.route('/')
    .get(getAllTasks)
    .post(createTask);

router.route('/:id')
    .get(getTaskById)
    .put(updateTask)
    .delete(deleteTask);

router.patch('/:id/status', toggleTaskStatus);

module.exports = router;
