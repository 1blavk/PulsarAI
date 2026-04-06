//// MainScreen.tsx ////
import { DateFilter } from "../features/date-filter/DateFilter";

// Components
import { BalanceCard } from "../widgets/BalanceCard";
import { BudgetProgress } from "../widgets/BudgetProgress";
import TransactionList from "../widgets/TransactionList";

// Widgets
import { IncomeExpenseWidget } from "../widgets/IncomeExpenseWidget";

export const MainScreen = () => {
    return (
        <div className="space-y-6 pb-16">
            {/* ==== CARDS ==== */}
            <BalanceCard balance={10000000} />

            {/* ==== CARDS ==== */}
            <BudgetProgress current={225000} total={10000000} />

            {/* ==== CALENDAR ==== */}
            <DateFilter />

            {/* ==== WIDGET ==== */}
            <IncomeExpenseWidget income={3000000} expense={5000000} />

            {/* ==== TRANSACTION LIST ==== */}
            <TransactionList />
        </div>
    )
}