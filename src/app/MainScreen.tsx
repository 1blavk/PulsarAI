//// MainScreen.tsx ////
import { useState, useMemo } from "react";
import { parse } from 'date-fns';
import { DateFilter } from "../features/date-filter/DateFilter";

// Components
import { BalanceCard } from "../widgets/BalanceCard";
import { BudgetProgress } from "../widgets/BudgetProgress";
import TransactionList from "../widgets/TransactionList";

// Widgets
import { IncomeExpenseWidget } from "../widgets/DonutChart";

// DATA
import { TRANSACTION_DATA } from "../data/transactions";

// Utils
import { getMonthlyStats } from "../shared/lib/getMonthlyStats";
import { MainActions } from "../components/MainActions";

export const MainScreen = () => {
    const [filter, setFilter] = useState<{ date: Date; mode: 'monthly' | 'daily' }>({ date: new Date(), mode: 'monthly' });

    // Compute available dates
    const availableDates = useMemo(() => {
        const dates = TRANSACTION_DATA.map(t => parse(t.date, 'dd-MM-yyyy', new Date()));
        return [...new Set(dates.map(d => d.getTime()))].map(time => new Date(time)).sort((a, b) => b.getTime() - a.getTime());
    }, []);

    // Calculate stats dynamically based on selected filter
    const stats = useMemo(() => {
        return getMonthlyStats(TRANSACTION_DATA, filter.date, filter.mode);
    }, [filter]);

    return (
        <div className="space-y-6 pb-28">
            {/* ==== CARDS ==== */}
            <BalanceCard balance={10000000} />

            {/* ==== CARDS ==== */}
            <BudgetProgress current={225000} total={10000000} />

            <MainActions></MainActions>

            {/* ==== CALENDAR ==== */}
            <DateFilter onFilterChange={setFilter} availableDates={availableDates} />

            {/* ==== WIDGET ==== */}
            <IncomeExpenseWidget
                income={stats.income}
                expense={stats.expense}
            />

            {/* ==== TRANSACTION LIST ==== */}
            <TransactionList data={TRANSACTION_DATA} filter={filter} />
        </div>
    )
}