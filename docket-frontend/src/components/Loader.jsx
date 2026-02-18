function Loader() {
    return (
        <div className="flex flex-col items-center justify-center py-12">
            <div className="w-10 h-10 border-3 border-slate-200 border-t-primary rounded-full animate-[spin_0.8s_linear_infinite] mb-4"></div>
            <p className="text-slate-500 text-sm">Loading tasks...</p>
        </div>
    );
}

export default Loader;
