//// MainScreen.tsx ////
import { useState, useMemo } from "react";
import { DateFilter } from "../features/date-filter/DateFilter";

// Components
import { BalanceCard } from "../widgets/BalanceCard";
import { BudgetProgress } from "../widgets/BudgetProgress";
import TransactionList from "../widgets/TransactionList";

// Widgets
import { IncomeExpenseWidget } from "../widgets/IncomeExpenseWidget";

// DATA
import { TRANSACTION_DATA } from "../data/transactions";

// Utils
import { getMonthlyStats } from "../shared/lib/getMonthlyStats";

export const MainScreen = () => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    // Calculate monthly stats dynamically based on selected month
    const monthlyStats = useMemo(() => {
        return getMonthlyStats(TRANSACTION_DATA, selectedDate);
    }, [selectedDate]);

    return (
        <div className="space-y-6 pb-16">
            {/* ==== CARDS ==== */}
            <BalanceCard balance={10000000} />

            {/* ==== CARDS ==== */}
            <BudgetProgress current={225000} total={10000000} />

            {/* ==== CALENDAR ==== */}
            <DateFilter onDateChange={setSelectedDate} />

            {/* ==== WIDGET ==== */}
            <IncomeExpenseWidget 
                income={monthlyStats.income} 
                expense={monthlyStats.expense} 
            />

            {/* ==== TRANSACTION LIST ==== */}
            <TransactionList data={TRANSACTION_DATA} selectedMonth={selectedDate} />
        </div>
    )
}