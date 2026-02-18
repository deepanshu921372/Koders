import { FiCheckCircle, FiClock, FiList } from 'react-icons/fi';

function TaskStats({ tasks }) {
    const total = tasks.length;
    const completed = tasks.filter(task => task.status === 'completed').length;
    const pending = tasks.filter(task => task.status === 'pending').length;

    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-slate-200">
                <div className="text-2xl p-2.5 rounded-lg text-primary bg-primary/10">
                    <FiList />
                </div>
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-slate-800 leading-none">{total}</span>
                    <span className="text-sm text-slate-500 mt-0.5">Total</span>
                </div>
            </div>

            <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-slate-200">
                <div className="text-2xl p-2.5 rounded-lg text-warning bg-warning/10">
                    <FiClock />
                </div>
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-slate-800 leading-none">{pending}</span>
                    <span className="text-sm text-slate-500 mt-0.5">Pending</span>
                </div>
            </div>

            <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-slate-200">
                <div className="text-2xl p-2.5 rounded-lg text-success bg-success/10">
                    <FiCheckCircle />
                </div>
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-slate-800 leading-none">{completed}</span>
                    <span className="text-sm text-slate-500 mt-0.5">Completed</span>
                </div>
            </div>
        </div>
    );
}

export default TaskStats;
