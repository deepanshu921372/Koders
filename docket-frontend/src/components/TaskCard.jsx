import { FiEdit2, FiTrash2, FiCheck, FiCircle } from 'react-icons/fi';

function TaskCard({ task, onEdit, onDelete, onToggleStatus }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const isCompleted = task.status === 'completed';

    return (
        <div className={`bg-white rounded-lg p-4 flex items-start gap-3.5 shadow-sm border border-slate-200 transition-all duration-200 hover:shadow-md
            ${isCompleted ? 'bg-gradient-to-r from-success/5 to-transparent' : ''}`}>

            <div
                className="shrink-0 w-6 h-6 flex items-center justify-center cursor-pointer mt-0.5"
                onClick={() => onToggleStatus(task._id)}
            >
                {isCompleted ? (
                    <FiCheck className="text-xl text-success transition-all duration-200" />
                ) : (
                    <FiCircle className="text-xl text-slate-200 transition-all duration-200 hover:text-primary" />
                )}
            </div>

            <div className="flex-1 min-w-0">
                <h3 className={`text-base font-medium mb-1 break-words
                    ${isCompleted ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                    {task.title}
                </h3>
                {task.description && (
                    <p className="text-sm text-slate-500 mb-2 leading-relaxed break-words">
                        {task.description}
                    </p>
                )}
                <span className="text-xs text-slate-400">
                    Created {formatDate(task.createdAt)}
                </span>
            </div>

            <div className="flex gap-1 shrink-0">
                <button
                    className="w-8 h-8 flex items-center justify-center border-none bg-transparent rounded-md cursor-pointer text-slate-400 transition-all duration-200 hover:bg-slate-100 hover:text-primary"
                    onClick={() => onEdit(task)}
                    title="Edit task"
                >
                    <FiEdit2 />
                </button>
                <button
                    className="w-8 h-8 flex items-center justify-center border-none bg-transparent rounded-md cursor-pointer text-slate-400 transition-all duration-200 hover:bg-slate-100 hover:text-danger"
                    onClick={() => onDelete(task)}
                    title="Delete task"
                >
                    <FiTrash2 />
                </button>
            </div>
        </div>
    );
}

export default TaskCard;
