import { parse, isSameMonth } from 'date-fns';
import type { Transaction } from '../../data/transactions';

export interface MonthlyStats {
    income: number;
    expense: number;
    transfer: number;
}

/**
 * Calculates monthly income, expense, and transfer totals for a given month
 * 
 * @param transactions - Array of transaction data to filter and analyze
 * @param selectedMonth - The month and year to calculate stats for
 * @returns Object containing income, expense, and transfer totals
 * 
 * @example
 * const stats = getMonthlyStats(TRANSACTION_DATA, new Date(2026, 2, 15)); // March 2026
 * console.log(stats); // { income: 1050000, expense: 4285000, transfer: 3500000 }
 */
export const getMonthlyStats = (
    transactions: Transaction[],
    selectedMonth: Date = new Date()
): MonthlyStats => {
    let income = 0;
    let expense = 0;
    let transfer = 0;

    transactions.forEach((transaction) => {
        const transactionDate = parse(transaction.date, 'dd-MM-yyyy', new Date());

        // Filter transactions by the selected month
        if (!isSameMonth(transactionDate, selectedMonth)) {
            return;
        }

        // Aggregate by transaction type
        switch (transaction.type) {
            case 'income':
                income += transaction.amount;
                break;
            case 'expense':
                expense += transaction.amount;
                break;
            case 'transfer':
                transfer += transaction.amount;
                break;
            default:
                break;
        }
    });

    return {
        income,
        expense,
        transfer,
    };
};

/**
 * Alternative function to get filtered transactions for a specific month
 * Useful when you need the actual transaction records, not just stats
 * 
 * @param transactions - Array of transaction data to filter
 * @param selectedMonth - The month and year to filter by
 * @returns Filtered array of transactions for the selected month
 * 
 * @example
 * const monthTransactions = filterTransactionsByMonth(TRANSACTION_DATA, new Date(2026, 2));
 */
export const filterTransactionsByMonth = (
    transactions: Transaction[],
    selectedMonth: Date = new Date()
): Transaction[] => {
    return transactions.filter((transaction) => {
        const transactionDate = parse(transaction.date, 'dd-MM-yyyy', new Date());
        return isSameMonth(transactionDate, selectedMonth);
    });
};
