import { FiAlertTriangle } from 'react-icons/fi';

function ConfirmModal({ isOpen, title, message, onConfirm, onCancel, isLoading }) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-[fade-in_0.2s_ease]"
            onClick={onCancel}
        >
            <div
                className="bg-white rounded-xl p-6 max-w-md w-full text-center animate-[slide-in_0.2s_ease]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-12 h-12 mx-auto mb-4 bg-danger/10 rounded-full flex items-center justify-center text-danger text-2xl">
                    <FiAlertTriangle />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 mb-5">{message}</p>
                <div className="flex gap-3">
                    <button
                        className="flex-1 py-3 px-4 border border-slate-200 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 bg-slate-100 text-slate-500 hover:bg-slate-200 disabled:opacity-60 disabled:cursor-not-allowed"
                        onClick={onCancel}
                        disabled={isLoading}
                    >
                        Cancel
                    </button>
                    <button
                        className="flex-1 py-3 px-4 border-none rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 bg-danger text-white hover:bg-danger-hover disabled:opacity-60 disabled:cursor-not-allowed"
                        onClick={onConfirm}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Deleting...' : 'Delete'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmModal;
