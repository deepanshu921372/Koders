import { FiInbox } from 'react-icons/fi';

function EmptyState({ filter }) {
    const getMessage = () => {
        switch (filter) {
            case 'completed':
                return "No completed tasks yet. Keep going!";
            case 'pending':
                return "No pending tasks. You're all caught up!";
            default:
                return "No tasks yet. Add one to get started!";
        }
    };

    return (
        <div className="text-center py-12 px-6 bg-white rounded-xl border-2 border-dashed border-slate-200">
            <FiInbox className="text-5xl text-slate-400 mb-4 mx-auto" />
            <p className="text-slate-500">{getMessage()}</p>
        </div>
    );
}

export default EmptyState;
