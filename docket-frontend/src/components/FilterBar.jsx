function FilterBar({ filter, setFilter }) {
    const filters = [
        { value: 'all', label: 'All' },
        { value: 'pending', label: 'Pending' },
        { value: 'completed', label: 'Completed' }
    ];

    return (
        <div className="flex gap-2 bg-white p-1.5 rounded-lg border border-slate-200">
            {filters.map(({ value, label }) => (
                <button
                    key={value}
                    className={`flex-1 py-2.5 px-4 border-none text-sm font-medium cursor-pointer rounded-md transition-all duration-200
                        ${filter === value
                            ? 'bg-primary text-white'
                            : 'bg-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                        }`}
                    onClick={() => setFilter(value)}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}

export default FilterBar;
