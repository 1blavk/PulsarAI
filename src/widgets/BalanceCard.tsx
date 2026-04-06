import { formatCurrency } from "../shared/lib/formatCurrency";

type Props = {
    balance: number;
};

export const BalanceCard = ({ balance }: Props) => {
    return (
        /* Outer container: Added dark:bg-[#3d4a7a] to slightly deepen the brand blue in dark mode */
        <div className="bg-[#5565A1] dark:bg-[#3d4a7a] py-8 px-4 text-black">

            {/* Inner Card: 
                - dark:bg-zinc-900: Dark background for the card
                - dark:text-white: Ensure text flips to white
            */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 text-black dark:text-white">

                {/* dark:opacity-50: Softer label in dark mode */}
                <p className="font-semibold opacity-70 dark:opacity-50">Balans</p>

                <h1 className="text-2xl font-bold">
                    {formatCurrency(balance)}
                    <span className="text-lg opacity-80"> uzs</span>
                </h1>
            </div>
        </div>
    );
};