import React from 'react';
import { ArrowUp, ArrowDown, ArrowRight } from 'lucide-react';

// --- Types & Constants ---
interface Transaction {
    id: number;
    category: string;
    amount: number;
    currency: string;
    type: 'expense' | 'income' | 'transfer';
}

interface TransactionGroup {
    date: string;
    items: Transaction[];
}

const TRANSACTION_COLORS = {
    expense: { bg: 'bg-[#C44A3A]', text: 'text-[#C44A3A]' },
    income: { bg: 'bg-[#6FAF4F]', text: 'text-[#6FAF4F]' },
    transfer: { bg: 'bg-[#5565A1]', text: 'text-[#5565A1]' },
};

// --- Main Component ---
const TransactionList: React.FC = () => {
    return (
        <div className="px-4 mt-2">
            {data.map((group, idx) => (
                <div key={idx} className="mb-2">
                    <h2 className="opacity-40 text-[16px] font-bold ml-4 mb-2">
                        {group.date}
                    </h2>

                    <div className="bg-white rounded-[20px] overflow-hidden">
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

// --- Helper Components & Functions ---

function TransactionItem({ item, isLast }: { item: Transaction; isLast: boolean }) {
    const theme = TRANSACTION_COLORS[item.type];

    return (
        <div className={`flex items-center justify-between px-3 py-3 pr-4 active:bg-gray-50 ${!isLast ? 'border-b border-gray-100' : ''}`}>
            <div className="flex items-center gap-3">
                {/* Icon Box */}
                <div className={`w-8 h-8 rounded-[13px] flex items-center justify-center text-white ${theme.bg}`}>
                    {renderIcon(item.type)}
                </div>

                <span className="font-semibold text-gray-900 text-[16px]">
                    {item.category}
                </span>
            </div>

            {/* Amount */}
            <div className={`font-bold text-[16px] ${theme.text}`}>
                {formatAmount(item.amount)}
                <span className="ml-1 uppercase text-[12px]">
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

// --- Mock Data ---
const data: TransactionGroup[] = [
    {
        date: "Bugungi o'tkazmalar",
        items: [
            { id: 1, category: "Transport", amount: -56000, currency: "uzs", type: 'expense' },
            { id: 2, category: "Oylik-maosh", amount: 5000000, currency: "uzs", type: 'income' },
            { id: 3, category: "Xaridlar", amount: -56000, currency: "uzs", type: 'expense' },
        ]
    },
    {
        date: "Kecha",
        items: [
            { id: 4, category: "Бюджет", amount: 1500000, currency: "uzs", type: 'transfer' },
            { id: 5, category: "Xaridlar", amount: -56000, currency: "uzs", type: 'expense' },
        ]
    },
    {
        date: "14-Mart",
        items: [
            { id: 6, category: "Jamg'armaga", amount: 1500000, currency: "uzs", type: 'transfer' },
            { id: 7, category: "Oylik-maosh", amount: 5000000, currency: "uzs", type: 'income' },
            { id: 8, category: "Xaridlar", amount: -56000, currency: "uzs", type: 'expense' },
            { id: 10, category: "Xaridlar", amount: -588000, currency: "uzs", type: 'expense' },
        ]
    }
];

export default TransactionList;