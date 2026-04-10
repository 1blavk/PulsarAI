import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { TrendingDown, TrendingUp } from "lucide-react";
import { formatCurrency } from "../shared/lib/formatCurrency";

const COLORS = {
    expense: "#C44A3A",
    income: "#6FAF4F",
    empty: "#333",
};

type Props = {
    income: number;
    expense: number;
};

export const IncomeExpenseWidget = ({ income, expense }: Props) => {
    const chartData = getChartData(income, expense);
    const { isIncomeSignificant, isExpenseSignificant } = getTrendStatus(income, expense);
    const infoItems = getInfoItems(income, expense);

    return (
        <div className="px-4">
            {/* Added dark:bg-zinc-900 (Static switch, no transition) */}
            <div className="bg-white dark:bg-zinc-900 py-10 px-6 rounded-4xl flex gap-7 items-center">

                {/* Chart Section */}
                <div className="w-30 h-30 relative">
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={chartData}
                                dataKey="value"
                                cornerRadius={6}
                                innerRadius={50}
                                outerRadius={60}
                                paddingAngle={income > 0 && expense > 0 ? 1 : 0}
                                startAngle={180}
                                endAngle={-180}
                                stroke="none"
                            >
                                <Cell fill={income === 0 ? COLORS.empty : COLORS.income} />
                                <Cell fill={expense === 0 ? COLORS.empty : COLORS.expense} />
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>

                    {/* Center Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {isIncomeSignificant && (
                            <div className="animate-in zoom-in duration-300">
                                <TrendingUp color={COLORS.income} size={22} strokeWidth={3} />
                            </div>
                        )}
                        {isExpenseSignificant && (
                            <div className="animate-in zoom-in duration-300">
                                <TrendingDown color={COLORS.expense} size={22} strokeWidth={3} />
                            </div>
                        )}
                    </div>
                </div>

                {/* Info Section */}
                <div className="space-y-2 flex-1">
                    {infoItems.map((item, idx) => (
                        <div key={idx} className="flex flex-col">
                            {/* Set subtle text for both light and dark modes */}
                            <span className="text-black/40 dark:text-white/40 text-[16px] font-bold">
                                {item.label}
                            </span>
                            <span
                                className="font-extrabold text-[18px]"
                                style={{ color: item.color }}
                            >
                                {formatCurrency(item.value)}
                                <small className="text-[10px] uppercase ml-0.5 opacity-70">uzs</small>
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

const getChartData = (income: number, expense: number) => [
    { name: "Daromad", value: income === 0 && expense === 0 ? 1 : income },
    { name: "Harajat", value: expense },
];

const getTrendStatus = (income: number, expense: number) => {
    const threshold = 0.2;
    const total = income + expense;
    if (total === 0) return { isIncomeSignificant: false, isExpenseSignificant: false };
    const incomeRatio = income / total;
    const expenseRatio = expense / total;
    return {
        isIncomeSignificant: incomeRatio > (0.5 + threshold),
        isExpenseSignificant: expenseRatio > (0.5 + threshold),
    };
};

const getInfoItems = (income: number, expense: number) => {
    return [
        { label: "Umumiy daromad", value: income, color: COLORS.income },
        { label: "Umumiy harajat", value: expense, color: COLORS.expense },
    ]
};