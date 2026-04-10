import { useMemo, useState } from "react";
import Picker from "react-mobile-picker";
import {
    format,
    getDaysInMonth,
    startOfMonth
} from "date-fns";
import { uz } from "date-fns/locale";
import { Calendar } from "lucide-react";

interface DateFilterProps {
    onFilterChange: (filter: { date: Date; mode: "monthly" | "daily" }) => void;
    availableDates: Date[];
}

export const DateFilter = ({ onFilterChange, availableDates }: DateFilterProps) => {

    const base = availableDates[0] || new Date();

    // 🔥 actual state (apply qilingan)
    const [selected, setSelected] = useState({
        year: base.getFullYear(),
        month: base.getMonth(),
        day: base.getDate()
    });

    const [mode, setMode] = useState<"monthly" | "daily">("monthly");

    // 🔥 temp state (modal ichida)
    const [temp, setTemp] = useState(selected);
    const [tempMode, setTempMode] = useState(mode);

    const [open, setOpen] = useState(false);

    // 🔥 data
    const years = useMemo(() => {
        const unique = Array.from(
            new Set(availableDates.map(d => d.getFullYear()))
        ).sort((a, b) => b - a);

        if (unique.length) return unique;

        const now = new Date().getFullYear();
        return Array.from({ length: 5 }, (_, i) => now - i);
    }, [availableDates]);

    const months = useMemo(() =>
        Array.from({ length: 12 }, (_, i) =>
            format(new Date(2000, i), "MMMM", { locale: uz })
        ),
        []);

    const days = useMemo(() => {
        const total = getDaysInMonth(
            new Date(temp.year, temp.month)
        );
        return Array.from({ length: total }, (_, i) => i + 1);
    }, [temp.year, temp.month]);

    const pickerData: any = {
        year: years,
        month: months.map((_, i) => i),
    };

    if (tempMode === "daily") {
        pickerData.day = days;
    }

    const handleChange = (next: any) => {
        const maxDay = getDaysInMonth(new Date(next.year, next.month));

        setTemp({
            year: next.year,
            month: next.month,
            day: Math.min(next.day || 1, maxDay)
        });
    };

    // 🔥 faqat shu yerda APPLY bo‘ladi
    const handleSave = () => {
        setSelected(temp);
        setMode(tempMode);

        const date = new Date(
            temp.year,
            temp.month,
            tempMode === "daily" ? temp.day : 1
        );

        onFilterChange({
            date: tempMode === "daily" ? date : startOfMonth(date),
            mode: tempMode
        });

        setOpen(false);
    };

    const label = mode === "daily"
        ? format(new Date(selected.year, selected.month, selected.day), "d MMMM yyyy", { locale: uz })
        : format(new Date(selected.year, selected.month), "MMMM yyyy", { locale: uz });

    return (
        <div className="p-4">

            <div className="">
                {/* trigger */}
                <button
                    onClick={() => {
                        setTemp(selected);
                        setTempMode(mode);
                        setOpen(true);
                    }}
                    className="flex items-center gap-2 bg-[#4F67CC] text-white px-4 py-2 rounded-full"
                >
                    <Calendar size={18} />
                    {label}
                </button>
            </div>

            {/* modal */}
            {open && (
                <div
                    className="fixed inset-0 z-50 bg-white/10 dark:bg-black/10 backdrop-blur backdrop-blur-[2px] flex items-center justify-center px-4"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl p-6 text-black dark:text-white shadow-2xl"
                        onClick={e => e.stopPropagation()}
                    >

                        {/* 🔥 TOGGLE (iOS STYLE) */}
                        <div className="flex items-center justify-between mb-5">
                            <div>
                                <p className="font-semibold">Kalendar</p>
                                <p className="text-xs text-gray-500">Kun / oylik sozlash</p>
                            </div>

                            <button
                                onClick={() => setTempMode(p => p === "daily" ? "monthly" : "daily")}
                                className={`w-7 h-5 flex items-center rounded-full p-1 transition 
                                    ${tempMode === "daily" ? "bg-[#4F67CC]" : "bg-gray-200 dark:bg-gray-700"}
                                    }`}
                            >
                                <div
                                    className={`bg-white dark:bg-gray-300 w-3 h-3 rounded-full shadow-md transform transition ${tempMode === "daily" ? "translate-x-2" : ""}`}
                                />
                            </button>
                        </div>

                        {/* picker */}
                        <Picker
                            value={temp}
                            onChange={handleChange}
                            height={220}
                            itemHeight={60}
                        >
                            <Picker.Column name="year">
                                {years.map(y => (
                                    <Picker.Item key={y} value={y}>
                                        {({ selected }) => (
                                            <div className={selected ? "font-bold text-black dark:text-white " : "text-gray-300 dark:text-gray-100"}>
                                                {y}
                                            </div>
                                        )}
                                    </Picker.Item>
                                ))}
                            </Picker.Column>

                            {tempMode === "daily" && (
                                <Picker.Column name="day">
                                    {days.map(d => (
                                        <Picker.Item key={d} value={d}>
                                            {({ selected }) => (
                                                <div className={selected ? "font-bold text-black dark:text-white" : "text-gray-400"}>
                                                    {d}
                                                </div>
                                            )}
                                        </Picker.Item>
                                    ))}
                                </Picker.Column>
                            )}


                            <Picker.Column name="month">
                                {months.map((m, i) => (
                                    <Picker.Item key={i} value={i}>
                                        {({ selected }) => (
                                            <div className={selected ? "font-bold text-black dark:text-white" : "text-gray-400"}>
                                                {m}
                                            </div>
                                        )}
                                    </Picker.Item>
                                ))}
                            </Picker.Column>


                        </Picker>

                        {/* action */}
                        <button
                            onClick={handleSave}
                            className="mt-5 w-full bg-[#5565A1] text-white py-3 rounded-full font-semibold"
                        >
                            Tanlash
                        </button>

                    </div>
                </div>
            )}
        </div>
    );
};