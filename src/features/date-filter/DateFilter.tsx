import { useState, useCallback } from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import { Calendar } from 'lucide-react';
import { uz } from 'date-fns/locale';

interface DateFilterProps {
    onDateChange?: (date: Date) => void;
}

export const DateFilter = ({ onDateChange }: DateFilterProps) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const handlePrevMonth = useCallback(() => {
        const newDate = subMonths(currentDate, 1);
        setCurrentDate(newDate);
        onDateChange?.(newDate);
    }, [currentDate, onDateChange]);

    const handleNextMonth = useCallback(() => {
        const newDate = addMonths(currentDate, 1);
        setCurrentDate(newDate);
        onDateChange?.(newDate);
    }, [currentDate, onDateChange]);

    const previousMonthLabel = format(subMonths(currentDate, 1), 'MMM', { locale: uz });
    const currentMonthLabel = format(currentDate, 'MMMM', { locale: uz });

    return (
        <div className="px-4 py-4">
            <div className="flex items-center justify-between gap-3">
                <button
                    onClick={handlePrevMonth}
                    className="rounded-full bg-[#F4F5F7] dark:bg-zinc-800 text-gray-700 dark:text-gray-200 px-5 py-2 text-sm font-medium transition-colors"
                    type="button"
                >
                    {previousMonthLabel}
                </button>

                <div className='flex gap-4'>
                    <button
                        className="rounded-full bg-[#4F67CC] text-white px-6 py-2 text-sm font-semibold"
                        type="button"
                        onClick={handleNextMonth}
                    >
                        {currentMonthLabel}
                    </button>

                    <button
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F4F5F7] dark:bg-zinc-800 text-gray-700 dark:text-gray-200 transition-colors"
                        type="button"
                        aria-label="Open calendar"
                    >
                        <Calendar size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};