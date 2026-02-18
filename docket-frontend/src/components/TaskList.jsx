import TaskCard from './TaskCard';
import EmptyState from './EmptyState';

function TaskList({ tasks, filter, onEdit, onDelete, onToggleStatus }) {
    const filteredTasks = tasks.filter(task => {
        if (filter === 'all') return true;
        return task.status === filter;
    });

    if (filteredTasks.length === 0) {
        return <EmptyState filter={filter} />;
    }

    return (
        <div className="flex flex-col gap-3">
            {filteredTasks.map(task => (
                <TaskCard
                    key={task._id}
                    task={task}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onToggleStatus={onToggleStatus}
                />
            ))}
        </div>
    );
}

export default TaskList;
