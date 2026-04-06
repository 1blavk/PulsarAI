import React, { useMemo } from 'react';
import { ArrowUp, ArrowDown, ArrowRight } from 'lucide-react';
import { format, isToday, isYesterday, parse } from 'date-fns';
import type { Transaction } from "../data/transactions";
import { TRANSACTION_DATA } from "../data/transactions";
import { uz } from 'date-fns/locale';

const TRANSACTION_COLORS = {
    expense: { bg: 'bg-[#C44A3A]', text: 'text-[#C44A3A]' },
    income: { bg: 'bg-[#6FAF4F]', text: 'text-[#6FAF4F]' },
    transfer: { bg: 'bg-[#5565A1]', text: 'text-[#5565A1]' },
};

// --- Main Component ---
const TransactionList: React.FC = () => {

    // Dinamik guruhlash logikasi
    const groupedData = useMemo(() => {
        const groups: Record<string, Transaction[]> = {};

        TRANSACTION_DATA.forEach((item) => {
            const dateObj = parse(item.date, 'dd-MM-yyyy', new Date());
            let label = "";

            if (isToday(dateObj)) {
                label = "Bugungi o'tkazmalar";
            } else if (isYesterday(dateObj)) {
                label = "Kecha";
            } else {
                label = format(dateObj, 'd-MMMM', { locale: uz }); // Formatingizga mos ravishda
            }

            if (!groups[label]) groups[label] = [];
            groups[label].push(item as Transaction);
        });

        return Object.entries(groups).map(([date, items]) => ({
            date,
            items
        }));
    }, []);

    return (
        <div className="px-4 mt-2">
            {groupedData.map((group, idx) => (
                <div key={idx} className="mb-3">
                    <h2 className="text-black/40 dark:text-white/40 text-[16px] font-bold ml-4 mb-3">
                        {group.date}
                    </h2>

                    <div className="bg-white dark:bg-zinc-900 rounded-[20px] overflow-hidden">
                        {group.items.map((item, itemIdx) => (
                            <TransactionItem
                                key={item.id}
                                item={item}
                                isLast={itemIdx === group.items.length - 1}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

// --- Helper Components ---
function TransactionItem({ item, isLast }: { item: Transaction; isLast: boolean }) {
    const theme = TRANSACTION_COLORS[item.type];

    return (
        <div className={`flex items-center justify-between px-4 py-3 pr-4 active:bg-gray-50 dark:active:bg-white/5 transition-colors ${!isLast ? 'border-b border-gray-100 dark:border-white/5' : ''}`}>
            <div className="flex items-center gap-5">
                <div className={`w-7 h-7 rounded-[10px] flex items-center justify-center text-white ${theme.bg}`}>
                    {renderIcon(item.type)}
                </div>

                <span className="font-semibold text-gray-900 dark:text-white text-[16px]">
                    {item.category}
                </span>
            </div>

            <div className={`font-bold text-[16px] ${theme.text}`}>
                {formatAmount(item.amount)}
                <span className="ml-1 uppercase text-[12px] opacity-70">
                    {item.currency}
                </span>
            </div>
        </div>
    );
}

function renderIcon(type: Transaction['type']) {
    const iconProps = { size: 16, strokeWidth: 4 };
    switch (type) {
        case 'expense': return <ArrowUp {...iconProps} />;
        case 'income': return <ArrowDown {...iconProps} />;
        case 'transfer': return <ArrowRight {...iconProps} />;
    }
}

function formatAmount(amount: number): string {
    const formatted = Math.abs(amount).toLocaleString();
    return amount > 0 ? `+${formatted}` : (amount < 0 ? `-${formatted}` : '0');
}

export default TransactionList;