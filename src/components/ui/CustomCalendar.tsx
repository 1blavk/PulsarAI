import { useMemo, useState } from 'react';
import {
    format,
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    startOfWeek,
    endOfWeek,
    isSameMonth,
    isSameDay,
    addMonths,
    subMonths
} from 'date-fns';
import { uz } from 'date-fns/locale';

interface CustomCalendarProps {
    selectedDate: Date;
    onDateSelect: (date: Date) => void;
    availableDates?: Date[];
}

export const CustomCalendar = ({
    selectedDate,
    onDateSelect,
    availableDates = []
}: CustomCalendarProps) => {

    const [currentMonth, setCurrentMonth] = useState(() => startOfMonth(selectedDate));

    const calendarDays = useMemo(() => {
        const start = startOfWeek(startOfMonth(currentMonth), { weekStartsOn: 1 });
        const end = endOfWeek(endOfMonth(currentMonth), { weekStartsOn: 1 });

        return eachDayOfInterval({ start, end });
    }, [currentMonth]);

    const isAvailable = (date: Date) =>
        availableDates.length === 0 || availableDates.some(d => isSameDay(d, date));

    return (
        <div className="bg-white dark:bg-zinc-900 rounded-[28px] p-5 w-full max-w-xl shadow-xl">

            {/* Header */}
            <div className="flex items-center justify-between mb-5">
                <button onClick={() => setCurrentMonth(m => subMonths(m, 1))}>‹</button>

                <h2 className="font-semibold">
                    {format(currentMonth, 'MMMM yyyy', { locale: uz })}
                </h2>

                <button onClick={() => setCurrentMonth(m => addMonths(m, 1))}>›</button>
            </div>

            {/* Days */}
            <div className="grid grid-cols-7 gap-2 mb-3 text-center text-xs">
                {['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya'].map(d => <div key={d}>{d}</div>)}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-7 gap-2">
                {calendarDays.map(day => {
                    const selected = isSameDay(day, selectedDate);
                    const available = isAvailable(day);
                    const current = isSameMonth(day, currentMonth);

                    return (
                        <button
                            key={day.toISOString()}
                            disabled={!available}
                            onClick={() => available && onDateSelect(day)}
                            className={`
                                h-12 rounded-xl text-sm
                                ${selected ? 'bg-[#5565A1] text-white' : ''}
                                ${available ? 'hover:bg-slate-200' : 'text-gray-400'}
                                ${!current ? 'opacity-50' : ''}
                            `}
                        >
                            {format(day, 'd')}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};