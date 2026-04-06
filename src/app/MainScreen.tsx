//// MainScreen.tsx ////

// Components
import { BalanceCard } from "../features/main/components/BalanceCard";
import { BudgetProgress } from "../features/main/components/BudgetProgress";
import TransactionList from "../features/main/components/TransactionList";

// Widgets
import { IncomeExpenseWidget } from "../widgets/ui/IncomeExpenseWidget";

export const MainScreen = () => {
    return (
        <div className="space-y-6">
            {/* ==== CARDS ==== */}
            <BalanceCard balance={10000000} />

            {/* ==== CARDS ==== */}
            <BudgetProgress current={2245000} total={10000000} />

            {/* ==== WIDGET ==== */}
            <IncomeExpenseWidget income={2140000} expense={5000000} />

            {/* ==== TRANSACTION LIST ==== */}
            <TransactionList />
        </div>
    )
}