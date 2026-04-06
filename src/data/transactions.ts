// --- Types & Constants ---
export interface Transaction {
    id: number;
    category: string;
    amount: number;
    currency: string;
    type: 'expense' | 'income' | 'transfer';
    date: string;
    time: string;
}


export const TRANSACTION_DATA = [
    // --- APREL OYI (1-apreldan 8-aprelgacha) ---
    // { id: 1, category: "Oylik-maosh", amount: 8000000, currency: "uzs", type: 'income', date: "08-04-2026", time: "09:00" },
    // { id: 2, category: "Xaridlar", amount: 120000, currency: "uzs", type: 'expense', date: "08-04-2026", time: "18:30" },
    // { id: 3, category: "Transport", amount: 15000, currency: "uzs", type: 'expense', date: "07-04-2026", time: "08:15" },
    // { id: 4, category: "Kafe", amount: 85000, currency: "uzs", type: 'expense', date: "07-04-2026", time: "13:00" },
    // { id: 5, category: "Бюджет", amount: 500000, currency: "uzs", type: 'transfer', date: "07-04-2026", time: "20:00" },
    { id: 6, category: "Transport", amount: 56000, currency: "uzs", type: 'expense', date: "06-04-2026", time: "14:30" },
    { id: 7, category: "Xaridlar", amount: 56000, currency: "uzs", type: 'expense', date: "06-04-2026", time: "16:45" },
    { id: 8, category: "Бюджет", amount: 1500000, currency: "uzs", type: 'transfer', date: "05-04-2026", time: "11:00" },
    { id: 9, category: "Transport", amount: 12000, currency: "uzs", type: 'expense', date: "05-04-2026", time: "09:20" },
    { id: 10, category: "Xizmatlar", amount: 45000, currency: "uzs", type: 'expense', date: "04-04-2026", time: "10:00" },
    { id: 11, category: "Kafe", amount: 120000, currency: "uzs", type: 'expense', date: "04-04-2026", time: "19:30" },
    { id: 12, category: "Transport", amount: 8000, currency: "uzs", type: 'expense', date: "03-04-2026", time: "08:45" },
    { id: 13, category: "Xaridlar", amount: 230000, currency: "uzs", type: 'expense', date: "03-04-2026", time: "17:10" },
    { id: 14, category: "Sovg'alar", amount: 150000, currency: "uzs", type: 'expense', date: "02-04-2026", time: "15:00" },
    { id: 15, category: "Transport", amount: 10000, currency: "uzs", type: 'expense', date: "02-04-2026", time: "09:00" },
    { id: 16, category: "O'tkazma", amount: 200000, currency: "uzs", type: 'income', date: "01-04-2026", time: "12:00" },
    { id: 17, category: "Xaridlar", amount: 65000, currency: "uzs", type: 'expense', date: "01-04-2026", time: "18:45" },

    // // --- MART OYI (To'liq) ---
    { id: 18, category: "Xizmatlar", amount: 50000, currency: "uzs", type: 'expense', date: "31-03-2026", time: "11:30" },
    { id: 19, category: "Transport", amount: 12000, currency: "uzs", type: 'expense', date: "31-03-2026", time: "08:20" },
    { id: 20, category: "Kafe", amount: 90000, currency: "uzs", type: 'expense', date: "30-03-2026", time: "13:40" },
    { id: 21, category: "Transport", amount: 150000, currency: "uzs", type: 'expense', date: "29-03-2026", time: "11:00" },

    { id: 23, category: "Бюджет", amount: 1000000, currency: "uzs", type: 'transfer', date: "29-03-2026", time: "10:00" },
    { id: 24, category: "Transport", amount: 12000, currency: "uzs", type: 'expense', date: "28-03-2026", time: "08:50" },
    { id: 25, category: "Kredit", amount: 1200000, currency: "uzs", type: 'expense', date: "27-03-2026", time: "14:00" },
    { id: 26, category: "Transport", amount: 10000, currency: "uzs", type: 'expense', date: "27-03-2026", time: "09:30" },
    { id: 27, category: "O'tkazma", amount: 350000, currency: "uzs", type: 'income', date: "26-03-2026", time: "11:15" },
    { id: 28, category: "Xaridlar", amount: 88000, currency: "uzs", type: 'expense', date: "25-03-2026", time: "19:00" },
    { id: 29, category: "Transport", amount: 15000, currency: "uzs", type: 'expense', date: "24-03-2026", time: "08:10" },
    { id: 30, category: "Kommunal", amount: 245000, currency: "uzs", type: 'expense', date: "23-03-2026", time: "10:30" },
    { id: 31, category: "Xaridlar", amount: 120000, currency: "uzs", type: 'expense', date: "22-03-2026", time: "15:40" },
    { id: 32, category: "Transport", amount: 12000, currency: "uzs", type: 'expense', date: "21-03-2026", time: "09:00" },
    { id: 33, category: "O'tkazma", amount: 150000, currency: "uzs", type: 'income', date: "20-03-2026", time: "14:20" },
    { id: 34, category: "Transport", amount: 15000, currency: "uzs", type: 'expense', date: "19-03-2026", time: "08:30" },
    { id: 35, category: "Xizmatlar", amount: 60000, currency: "uzs", type: 'expense', date: "18-03-2026", time: "12:00" },
    { id: 36, category: "Transport", amount: 12000, currency: "uzs", type: 'expense', date: "17-03-2026", time: "08:45" },
    { id: 37, category: "Xaridlar", amount: 320000, currency: "uzs", type: 'expense', date: "16-03-2026", time: "17:30" },
    { id: 38, category: "Transport", amount: 15000, currency: "uzs", type: 'expense', date: "15-03-2026", time: "09:15" },
    { id: 39, category: "Oylik-maosh", amount: 7500000, currency: "uzs", type: 'income', date: "14-03-2026", time: "09:00" },
    { id: 40, category: "Xaridlar", amount: 56000, currency: "uzs", type: 'expense', date: "14-03-2026", time: "18:20" },
    { id: 41, category: "Transport", amount: 12000, currency: "uzs", type: 'expense', date: "13-03-2026", time: "08:10" },
    { id: 42, category: "Xizmatlar", amount: 25000, currency: "uzs", type: 'expense', date: "12-03-2026", time: "11:45" },
    { id: 43, category: "Kafe", amount: 150000, currency: "uzs", type: 'expense', date: "11-03-2026", time: "19:00" },
    { id: 44, category: "Transport", amount: 15000, currency: "uzs", type: 'expense', date: "10-03-2026", time: "08:30" },
    { id: 45, category: "Xaridlar", amount: 95000, currency: "uzs", type: 'expense', date: "09-03-2026", time: "17:40" },
    { id: 46, category: "Transport", amount: 12000, currency: "uzs", type: 'expense', date: "08-03-2026", time: "09:00" },
    { id: 47, category: "Sovg'alar", amount: 400000, currency: "uzs", type: 'expense', date: "08-03-2026", time: "12:00" },
    { id: 48, category: "Transport", amount: 15000, currency: "uzs", type: 'expense', date: "07-03-2026", time: "08:15" },
    { id: 49, category: "O'tkazma", amount: 500000, currency: "uzs", type: 'income', date: "06-03-2026", time: "14:50" },
    { id: 50, category: "Xaridlar", amount: 110000, currency: "uzs", type: 'expense', date: "05-03-2026", time: "18:10" },
    { id: 51, category: "Transport", amount: 12000, currency: "uzs", type: 'expense', date: "04-03-2026", time: "08:45" },
    { id: 52, category: "Xizmatlar", amount: 35000, currency: "uzs", type: 'expense', date: "03-03-2026", time: "10:20" },
    { id: 53, category: "Transport", amount: 15000, currency: "uzs", type: 'expense', date: "02-03-2026", time: "09:00" },
    { id: 54, category: "O'tkazma", amount: 100000, currency: "uzs", type: 'income', date: "01-03-2026", time: "11:30" },
    { id: 55, category: "Xaridlar", amount: 75000, currency: "uzs", type: 'expense', date: "01-03-2026", time: "16:00" }
];