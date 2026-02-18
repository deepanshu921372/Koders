import { useState, useEffect } from 'react';
import { FiPlus, FiX } from 'react-icons/fi';

function TaskForm({ onSubmit, editingTask, onCancelEdit, isLoading }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title);
            setDescription(editingTask.description || '');
        } else {
            setTitle('');
            setDescription('');
        }
        setErrors({});
    }, [editingTask]);

    const validate = () => {
        const newErrors = {};

        if (!title.trim()) {
            newErrors.title = 'Title is required';
        } else if (title.length > 100) {
            newErrors.title = 'Title cannot exceed 100 characters';
        }

        if (description.length > 500) {
            newErrors.description = 'Description cannot exceed 500 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;

        onSubmit({
            title: title.trim(),
            description: description.trim()
        });

        if (!editingTask) {
            setTitle('');
            setDescription('');
        }
    };

    const handleCancel = () => {
        setTitle('');
        setDescription('');
        setErrors({});
        onCancelEdit();
    };

    return (
        <form className="bg-white rounded-xl p-6 shadow-sm border border-slate-200" onSubmit={handleSubmit}>
            <h2 className="text-lg font-semibold mb-5 text-slate-800">
                {editingTask ? 'Edit Task' : 'Add New Task'}
            </h2>

            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-slate-800 mb-1.5">
                    Title *
                </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="What needs to be done?"
                    className={`w-full p-3 border rounded-lg text-base font-[inherit] transition-all duration-200 bg-slate-50 outline-none
                        ${errors.title
                            ? 'border-danger'
                            : 'border-slate-200 focus:border-primary focus:shadow-[0_0_0_3px_rgba(79,70,229,0.1)] focus:bg-white'
                        }`}
                />
                <div className="flex justify-between items-center mt-1.5">
                    {errors.title && <span className="text-xs text-danger">{errors.title}</span>}
                    <span className="text-xs text-slate-400 ml-auto">{title.length}/100</span>
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-slate-800 mb-1.5">
                    Description
                </label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Add some details (optional)"
                    rows="3"
                    className={`w-full p-3 border rounded-lg text-base font-[inherit] transition-all duration-200 bg-slate-50 outline-none resize-y min-h-20
                        ${errors.description
                            ? 'border-danger'
                            : 'border-slate-200 focus:border-primary focus:shadow-[0_0_0_3px_rgba(79,70,229,0.1)] focus:bg-white'
                        }`}
                />
                <div className="flex justify-between items-center mt-1.5">
                    {errors.description && <span className="text-xs text-danger">{errors.description}</span>}
                    <span className="text-xs text-slate-400 ml-auto">{description.length}/500</span>
                </div>
            </div>

            <div className="flex gap-3 mt-5">
                <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-5 border-none rounded-lg text-base font-medium cursor-pointer transition-all duration-200 bg-primary text-white hover:bg-primary-hover disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={isLoading}
                >
                    <FiPlus />
                    {isLoading ? 'Saving...' : (editingTask ? 'Update Task' : 'Add Task')}
                </button>

                {editingTask && (
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 py-3 px-5 rounded-lg text-base font-medium cursor-pointer transition-all duration-200 bg-slate-100 text-slate-500 border border-slate-200 hover:bg-slate-200"
                        onClick={handleCancel}
                    >
                        <FiX />
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
}

export default TaskForm;
