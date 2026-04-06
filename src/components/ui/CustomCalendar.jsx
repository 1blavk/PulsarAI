export const CustomCalendar = ({ transactions }: { transactions: any[] }) => {
    // Mocking April 2026
    const days = Array.from({ length: 30 }, (_, i) => i + 1);

    // Get days that have transactions to show "dots"
    const activeDays = [2, 14, 15];

    return (
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-xl mx-4">
            <div className="grid grid-cols-7 gap-2 text-center">
                {['D', 'S', 'C', 'P', 'J', 'S', 'Y'].map(d => (
                    <span key={d} className="text-[10px] font-bold opacity-40 uppercase">{d}</span>
                ))}

                {days.map(day => {
                    const isSelected = day === 6; // Mock selected day
                    const hasData = activeDays.includes(day);

                    return (
                        <div key={day} className="relative flex flex-col items-center py-2">
                            <button className={`
                w-8 h-8 rounded-xl text-sm font-bold transition-all
                ${isSelected ? 'bg-[#5565A1] text-white' : 'text-gray-900 dark:text-white'}
              `}>
                                {day}
                            </button>
                            {hasData && !isSelected && (
                                <div className="w-1 h-1 bg-[#5565A1] rounded-full mt-1" />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};