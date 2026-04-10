import { ChartPie, Cog, Plus } from 'lucide-react';
import React from 'react';

// Ikonkalar uchun umumiy interfeys
interface ActionItemProps {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
}

const ActionItem: React.FC<ActionItemProps> = ({ icon, label, onClick }) => (
    <button
        onClick={onClick}
        className="flex flex-col items-center gap-2 group"
    >
        {/* Squircle (yumshoq kvadrat) foni */}
        <div className="w-9 h-9 bg-[#5565A1] rounded-[16px] flex items-center justify-center">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-[#5D6BB2]">
                {icon}
            </div>
        </div>
        {/* Matn */}
        <span className="text-[14px] font-bold text-gray-500 dark:text-gray-300">
            {label}
        </span>
    </button>
);

export const MainActions = () => {
    return (
        <div className='px-6'>
            <div className="w-full flex gap-3">

                {/* Sozlamalar */}
                <div className='w-full rounded-3xl flex justify-around items-center py-3 bg-white dark:bg-zinc-900'>

                    <ActionItem
                        label="Sozlamalar"
                        icon={
                            <Cog size={16} color="#5565A1" strokeWidth={2.8} />
                        }
                    />
                </div>

                {/* Hisobotlar */}
                <div className='w-full rounded-3xl flex justify-around items-center py-3 bg-white dark:bg-zinc-900'>
                    <ActionItem
                        label="Hisobotlar"
                        icon={
                            <ChartPie size={16} color="#5565A1" strokeWidth={2.8} />
                        }
                    />
                </div>

                {/* Qo'shish */}
                <div className='w-full rounded-3xl flex justify-around items-center py-3 bg-white dark:bg-zinc-900'>
                    <ActionItem
                        label="Qo'shish"
                        icon={
                            <Plus size={16} color="#5565A1" strokeWidth={2.8} />
                        }
                    />
                </div>

            </div>
        </div>
    );
};