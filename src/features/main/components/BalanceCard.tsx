import { formatCurrency } from "../../../shared/lib/formatCurrency";

type Props = {
    balance: number;
};

export const BalanceCard = ({ balance }: Props) => {
    return (
        <div className="bg-gradient-to-r bg-[#5565A1] py-8 px-4 text-black">
            <div className="bg-white rounded-3xl p-6">
                <p className="font-semibold opacity-70">Balans</p>
                <h1 className="text-2xl font-bold">
                    {formatCurrency(balance)}
                    <span className="text-lg"> uzs</span>
                </h1>
            </div>
        </div>
    );
};