import { parse, isSameMonth, isSameDay } from 'date-fns';
import type { Transaction } from '../../data/transactions';

export interface MonthlyStats {
    income: number;
    expense: number;
    transfer: number;
}

/**
 * Calculates income, expense, and transfer totals for a given date filter
 * 
 * @param transactions - Array of transaction data to filter and analyze
 * @param selectedDate - The date to calculate stats for
 * @param mode - 'monthly' or 'daily' filter mode
 * @returns Object containing income, expense, and transfer totals
 */
export const getMonthlyStats = (
    transactions: Transaction[],
    selectedDate: Date = new Date(),
    mode: 'monthly' | 'daily' = 'monthly'
): MonthlyStats => {
    let income = 0;
    let expense = 0;
    let transfer = 0;

    transactions.forEach((transaction) => {
        const transactionDate = parse(transaction.date, 'dd-MM-yyyy', new Date());

        // Filter transactions by the selected date
        const matches = mode === 'monthly' ? isSameMonth(transactionDate, selectedDate) : isSameDay(transactionDate, selectedDate);
        if (!matches) {
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
