import { formatCurrency } from "../shared/lib/formatCurrency";

type Props = {
    current: number;
    total: number;
};

export const BudgetProgress = ({ current, total }: Props) => {
    const percent = calculatePercent(current, total);
    const formattedAmount = formatBudgetRange(current, total);

    return (
        <div className="px-4">
            {/* Card Background: Added dark:bg-zinc-900 and text color reset */}
            <div className="bg-white dark:bg-zinc-900 rounded-4xl p-6 text-black dark:text-white">
                <p className="font-semibold opacity-70 dark:opacity-50">Jamg'arma</p>

                {/* Progress Bar Track: Changed bg-gray-100 to dark:bg-white/10 for a subtle dark track */}
                <div className="h-5 bg-gray-100 dark:bg-white/10 rounded-lg mt-5 overflow-hidden">
                    <div
                        className="h-full bg-[#5565A1] dark:bg-[#6c7cb8] rounded-lg transition-all duration-700 ease-out"
                        style={{ width: `${percent}%` }}
                    />
                </div>

                {/* Stats Footer */}
                <div className="flex justify-between items-center mt-6 font-extrabold">
                    {/* Text color: Adjusted text-gray-800 to dark:text-gray-200 */}
                    <span className="text-[16px] text-gray-800 dark:text-gray-200">
                        {formattedAmount}
                    </span>

                    {/* Percentage Badge: Changed bg to dark:bg-white/10 */}
                    <div className="text-[12px] bg-gray-100 dark:bg-white/10 opacity-70 py-1 px-2.5 rounded-lg">
                        {percent}%
                    </div>
                </div>
            </div>
        </div>
    );
};

function calculatePercent(current: number, total: number): number {
    if (total <= 0) return 0;
    return Math.min(100, Math.round((current / total) * 100));
}

function formatBudgetRange(current: number, total: number): string {
    return `${formatCurrency(current)} / ${formatCurrency(total)}`;
}