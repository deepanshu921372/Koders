import { useState, useEffect } from 'react';
import {
    TaskStats,
    FilterBar,
    TaskForm,
    TaskList,
    ConfirmModal,
    Loader
} from './components';
import { taskService } from './services/api';

function App() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');
    const [editingTask, setEditingTask] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [deleteModal, setDeleteModal] = useState({
        isOpen: false,
        task: null
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            setIsLoading(true);
            const response = await taskService.getAll();
            setTasks(response.data);
            setError(null);
        } catch (err) {
            setError('Failed to load tasks. Please try again.');
            console.error('Error fetching tasks:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCreateOrUpdate = async (taskData) => {
        try {
            setIsSubmitting(true);

            if (editingTask) {
                const response = await taskService.update(editingTask._id, taskData);
                setTasks(tasks.map(t =>
                    t._id === editingTask._id ? response.data : t
                ));
                setEditingTask(null);
            } else {
                const response = await taskService.create(taskData);
                setTasks([response.data, ...tasks]);
            }

            setError(null);
        } catch (err) {
            setError('Failed to save task. Please try again.');
            console.error('Error saving task:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleEdit = (task) => {
        setEditingTask(task);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCancelEdit = () => {
        setEditingTask(null);
    };

    const handleDeleteClick = (task) => {
        setDeleteModal({ isOpen: true, task });
    };

    const handleDeleteConfirm = async () => {
        if (!deleteModal.task) return;

        try {
            setIsSubmitting(true);
            await taskService.delete(deleteModal.task._id);
            setTasks(tasks.filter(t => t._id !== deleteModal.task._id));
            setDeleteModal({ isOpen: false, task: null });
            setError(null);
        } catch (err) {
            setError('Failed to delete task. Please try again.');
            console.error('Error deleting task:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDeleteCancel = () => {
        setDeleteModal({ isOpen: false, task: null });
    };

    const handleToggleStatus = async (taskId) => {
        try {
            const response = await taskService.toggleStatus(taskId);
            setTasks(tasks.map(t =>
                t._id === taskId ? response.data : t
            ));
            setError(null);
        } catch (err) {
            setError('Failed to update task status. Please try again.');
            console.error('Error toggling status:', err);
        }
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-6 min-h-screen">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold text-primary mb-1">Docket</h1>
                <p className="text-slate-500 text-sm">Keep track of your daily tasks</p>
            </header>

            <main className="flex flex-col gap-6">
                <TaskStats tasks={tasks} />

                <TaskForm
                    onSubmit={handleCreateOrUpdate}
                    editingTask={editingTask}
                    onCancelEdit={handleCancelEdit}
                    isLoading={isSubmitting}
                />

                {error && (
                    <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
                        {error}
                    </div>
                )}

                <FilterBar filter={filter} setFilter={setFilter} />

                {isLoading ? (
                    <Loader />
                ) : (
                    <TaskList
                        tasks={tasks}
                        filter={filter}
                        onEdit={handleEdit}
                        onDelete={handleDeleteClick}
                        onToggleStatus={handleToggleStatus}
                    />
                )}
            </main>

            <ConfirmModal
                isOpen={deleteModal.isOpen}
                title="Delete Task"
                message="Are you sure you want to delete this task? This action cannot be undone."
                onConfirm={handleDeleteConfirm}
                onCancel={handleDeleteCancel}
                isLoading={isSubmitting}
            />
        </div>
    );
}

export default App;
