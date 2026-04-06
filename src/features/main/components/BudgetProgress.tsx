import { formatCurrency } from "../../../shared/lib/formatCurrency";

type Props = {
    current: number;
    total: number;
};

export const BudgetProgress = ({ current, total }: Props) => {
    const percent = calculatePercent(current, total);
    const formattedAmount = formatBudgetRange(current, total);

    return (
        <div className="px-4">
            <div className="bg-white rounded-4xl p-6">
                <p className="font-semibold opacity-70">Jamg'arma</p>

                {/* Progress Bar Container */}
                <div className="h-5 bg-gray-100 rounded-lg mt-5 overflow-hidden">
                    <div
                        className="h-full bg-[#5565A1] rounded-lg transition-all duration-700 ease-out"
                        style={{ width: `${percent}%` }}
                    />
                </div>

                {/* Stats Footer */}
                <div className="flex justify-between items-center mt-6 font-extrabold">
                    <span className="text-[16px] text-gray-800">
                        {formattedAmount}
                    </span>

                    <div className="text-[12px] bg-gray-100 opacity-70 py-1 px-2.5 rounded-lg">
                        {percent}%
                    </div>
                </div>
            </div>
        </div>
    );
};


/**
 * Progress foizini hisoblash (0-100 oralig'ida)
 */
function calculatePercent(current: number, total: number): number {
    if (total <= 0) return 0;
    return Math.min(100, Math.round((current / total) * 100));
}

/**
 * Miqdorlarni birlashtirib formatlash
 */
function formatBudgetRange(current: number, total: number): string {
    return `${formatCurrency(current)} / ${formatCurrency(total)}`;
}