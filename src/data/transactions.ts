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


export const TRANSACTION_DATA: Transaction[] = [
    // --- 2026-YIL ---
    // APREL (Bugungacha)
    { id: 0, category: "Transport", amount: 15000, currency: "uzs", type: 'expense', date: "11-04-2026", time: "08:15" },
    { id: 1, category: "Kafe", amount: 45000, currency: "uzs", type: 'expense', date: "10-04-2026", time: "13:00" },
    { id: 2, category: "Xaridlar", amount: 235000, currency: "uzs", type: 'expense', date: "09-04-2026", time: "18:30" },
    { id: 3, category: "Oylik-maosh", amount: 8500000, currency: "uzs", type: 'income', date: "08-04-2026", time: "09:00" },
    { id: 4, category: "Transport", amount: 12000, currency: "uzs", type: 'expense', date: "08-04-2026", time: "18:45" },
    { id: 5, category: "Kafe", amount: 85000, currency: "uzs", type: 'expense', date: "07-04-2026", time: "13:00" },
    { id: 6, category: "Бюджет", amount: 500000, currency: "uzs", type: 'transfer', date: "07-04-2026", time: "20:00" },
    { id: 7, category: "Xaridlar", amount: 56000, currency: "uzs", type: 'expense', date: "06-04-2026", time: "16:45" },
    { id: 8, category: "O'tkazma", amount: 150000, currency: "uzs", type: 'income', date: "05-04-2026", time: "11:00" },
    { id: 9, category: "Transport", amount: 8000, currency: "uzs", type: 'expense', date: "05-04-2026", time: "09:20" },
    { id: 10, category: "Xizmatlar", amount: 45000, currency: "uzs", type: 'expense', date: "04-04-2026", time: "10:00" },
    { id: 11, category: "Kafe", amount: 120000, currency: "uzs", type: 'expense', date: "04-04-2026", time: "19:30" },
    { id: 12, category: "Transport", amount: 15000, currency: "uzs", type: 'expense', date: "03-04-2026", time: "08:45" },
    { id: 13, category: "Xaridlar", amount: 230000, currency: "uzs", type: 'expense', date: "03-04-2026", time: "17:10" },
    { id: 14, category: "Sovg'alar", amount: 150000, currency: "uzs", type: 'expense', date: "02-04-2026", time: "15:00" },
    { id: 15, category: "Transport", amount: 10000, currency: "uzs", type: 'expense', date: "02-04-2026", time: "09:00" },
    { id: 16, category: "O'tkazma", amount: 200000, currency: "uzs", type: 'income', date: "01-04-2026", time: "12:00" },
    { id: 17, category: "Xaridlar", amount: 65000, currency: "uzs", type: 'expense', date: "01-04-2026", time: "18:45" },

    // MART 2026
    { id: 18, category: "Kommunal", amount: 450000, currency: "uzs", type: 'expense', date: "31-03-2026", time: "10:00" },
    { id: 19, category: "Transport", amount: 12000, currency: "uzs", type: 'expense', date: "31-03-2026", time: "08:20" },
    { id: 20, category: "Kafe", amount: 90000, currency: "uzs", type: 'expense', date: "30-03-2026", time: "13:40" },
    { id: 21, category: "Transport", amount: 15000, currency: "uzs", type: 'expense', date: "29-03-2026", time: "11:00" },
    { id: 22, category: "Xaridlar", amount: 125000, currency: "uzs", type: 'expense', date: "29-03-2026", time: "18:00" },
    { id: 23, category: "O'tkazma", amount: 500000, currency: "uzs", type: 'income', date: "28-03-2026", time: "15:30" },
    { id: 24, category: "Transport", amount: 10000, currency: "uzs", type: 'expense', date: "28-03-2026", time: "08:50" },
    { id: 25, category: "Kredit", amount: 1200000, currency: "uzs", type: 'expense', date: "27-03-2026", time: "14:00" },
    { id: 26, category: "Transport", amount: 12000, currency: "uzs", type: 'expense', date: "26-03-2026", time: "09:30" },
    { id: 27, category: "Xizmatlar", amount: 35000, currency: "uzs", type: 'expense', date: "25-03-2026", time: "11:15" },
    { id: 28, category: "Kafe", amount: 110000, currency: "uzs", type: 'expense', date: "24-03-2026", time: "19:00" },
    { id: 29, category: "Transport", amount: 15000, currency: "uzs", type: 'expense', date: "24-03-2026", time: "08:10" },
    { id: 30, category: "Xaridlar", amount: 85000, currency: "uzs", type: 'expense', date: "23-03-2026", time: "17:30" },
    { id: 31, category: "Transport", amount: 12000, currency: "uzs", type: 'expense', date: "22-03-2026", time: "10:00" },
    { id: 32, category: "Kafe", amount: 250000, currency: "uzs", type: 'expense', date: "21-03-2026", time: "20:00" },
    { id: 33, category: "Transport", amount: 15000, currency: "uzs", type: 'expense', date: "21-03-2026", time: "09:00" },
    { id: 34, category: "O'tkazma", amount: 1000000, currency: "uzs", type: 'income', date: "20-03-2026", time: "14:20" },
    { id: 35, category: "Xizmatlar", amount: 60000, currency: "uzs", type: 'expense', date: "18-03-2026", time: "12:00" },
    { id: 36, category: "Transport", amount: 12000, currency: "uzs", type: 'expense', date: "17-03-2026", time: "08:45" },
    { id: 37, category: "Xaridlar", amount: 320000, currency: "uzs", type: 'expense', date: "16-03-2026", time: "17:30" },
    { id: 38, category: "Oylik-maosh", amount: 8000000, currency: "uzs", type: 'income', date: "10-03-2026", time: "09:00" },
    { id: 39, category: "Sovg'alar", amount: 600000, currency: "uzs", type: 'expense', date: "08-03-2026", time: "11:00" },
    { id: 40, category: "Kafe", amount: 350000, currency: "uzs", type: 'expense', date: "08-03-2026", time: "19:00" },
    { id: 41, category: "Transport", amount: 25000, currency: "uzs", type: 'expense', date: "07-03-2026", time: "08:30" },
    { id: 42, category: "Xaridlar", amount: 450000, currency: "uzs", type: 'expense', date: "05-03-2026", time: "18:00" },

    // FEVRAL 2026
    { id: 43, category: "Kommunal", amount: 380000, currency: "uzs", type: 'expense', date: "28-02-2026", time: "10:00" },
    { id: 44, category: "Kafe", amount: 120000, currency: "uzs", type: 'expense', date: "27-02-2026", time: "13:00" },
    { id: 45, category: "Transport", amount: 15000, currency: "uzs", type: 'expense', date: "26-02-2026", time: "08:30" },
    { id: 46, category: "Xaridlar", amount: 95000, currency: "uzs", type: 'expense', date: "25-02-2026", time: "17:40" },
    { id: 47, category: "Kredit", amount: 1200000, currency: "uzs", type: 'expense', date: "24-02-2026", time: "14:00" },
    { id: 48, category: "O'tkazma", amount: 300000, currency: "uzs", type: 'income', date: "22-02-2026", time: "11:00" },
    { id: 49, category: "Transport", amount: 12000, currency: "uzs", type: 'expense', date: "21-02-2026", time: "08:45" },
    { id: 50, category: "Kafe", amount: 75000, currency: "uzs", type: 'expense', date: "20-02-2026", time: "13:00" },
    { id: 51, category: "Transport", amount: 15000, currency: "uzs", type: 'expense', date: "19-02-2026", time: "08:15" },
    { id: 52, category: "Oylik-maosh", amount: 8000000, currency: "uzs", type: 'income', date: "10-02-2026", time: "09:00" },
    { id: 53, category: "Xaridlar", amount: 550000, currency: "uzs", type: 'expense', date: "05-02-2026", time: "18:00" },
    { id: 54, category: "Transport", amount: 12000, currency: "uzs", type: 'expense', date: "01-02-2026", time: "09:00" },

    // YANVAR 2026
    { id: 55, category: "Kommunal", amount: 420000, currency: "uzs", type: 'expense', date: "31-01-2026", time: "10:00" },
    { id: 56, category: "Xizmatlar", amount: 150000, currency: "uzs", type: 'expense', date: "28-01-2026", time: "12:00" },
    { id: 57, category: "Transport", amount: 15000, currency: "uzs", type: 'expense', date: "26-01-2026", time: "08:20" },
    { id: 58, category: "Xaridlar", amount: 210000, currency: "uzs", type: 'expense', date: "24-01-2026", time: "17:00" },
    { id: 59, category: "O'tkazma", amount: 450000, currency: "uzs", type: 'income', date: "20-01-2026", time: "15:00" },
    { id: 60, category: "Kredit", amount: 1200000, currency: "uzs", type: 'expense', date: "15-01-2026", time: "14:00" },
    { id: 61, category: "Oylik-maosh", amount: 8000000, currency: "uzs", type: 'income', date: "10-01-2026", time: "09:00" },
    { id: 62, category: "Kafe", amount: 300000, currency: "uzs", type: 'expense', date: "02-01-2026", time: "20:00" },
    { id: 63, category: "Xaridlar", amount: 800000, currency: "uzs", type: 'expense', date: "01-01-2026", time: "14:00" },

    // --- 2025-YIL ---
    // DEKABR 2025
    { id: 64, category: "Xaridlar", amount: 1200000, currency: "uzs", type: 'expense', date: "31-12-2025", time: "21:00" },
    { id: 65, category: "Sovg'alar", amount: 850000, currency: "uzs", type: 'expense', date: "30-12-2025", time: "16:00" },
    { id: 66, category: "Biznes", amount: 2500000, currency: "uzs", type: 'income', date: "28-12-2025", time: "12:00" },
    { id: 67, category: "Transport", amount: 20000, currency: "uzs", type: 'expense', date: "25-12-2025", time: "08:30" },
    { id: 68, category: "Kommunal", amount: 350000, currency: "uzs", type: 'expense', date: "20-12-2025", time: "10:00" },
    { id: 69, category: "Oylik-maosh", amount: 7500000, currency: "uzs", type: 'income', date: "10-12-2025", time: "09:00" },
    { id: 70, category: "Transport", amount: 15000, currency: "uzs", type: 'expense', date: "05-12-2025", time: "08:45" },

    // NOYABR 2025
    { id: 71, category: "Xaridlar", amount: 450000, currency: "uzs", type: 'expense', date: "30-11-2025", time: "18:00" },
    { id: 72, category: "Kredit", amount: 1200000, currency: "uzs", type: 'expense', date: "25-11-2025", time: "14:00" },
    { id: 73, category: "Oylik-maosh", amount: 7500000, currency: "uzs", type: 'income', date: "10-11-2025", time: "09:00" },
    { id: 74, category: "Kafe", amount: 120000, currency: "uzs", type: 'expense', date: "05-11-2025", time: "13:00" },

    // OKTYABR 2025
    { id: 75, category: "Xizmatlar", amount: 200000, currency: "uzs", type: 'expense', date: "31-10-2025", time: "10:00" },
    { id: 76, category: "Xaridlar", amount: 350000, currency: "uzs", type: 'expense', date: "25-10-2025", time: "17:00" },
    { id: 77, category: "O'tkazma", amount: 1500000, currency: "uzs", type: 'income', date: "15-10-2025", time: "11:00" },
    { id: 78, category: "Oylik-maosh", amount: 7500000, currency: "uzs", type: 'income', date: "10-10-2025", time: "09:00" },

    // SENTYABR 2025
    { id: 79, category: "Xaridlar", amount: 950000, currency: "uzs", type: 'expense', date: "05-09-2025", time: "15:00" },
    { id: 80, category: "Transport", amount: 12000, currency: "uzs", type: 'expense', date: "10-09-2025", time: "08:20" },
    { id: 81, category: "Oylik-maosh", amount: 7500000, currency: "uzs", type: 'income', date: "11-09-2025", time: "09:00" },
    { id: 82, category: "Kredit", amount: 1200000, currency: "uzs", type: 'expense', date: "25-09-2025", time: "14:00" },

    // AVGUST 2025
    { id: 83, category: "Sayohat", amount: 4500000, currency: "uzs", type: 'expense', date: "15-08-2025", time: "10:00" },
    { id: 84, category: "Kafe", amount: 250000, currency: "uzs", type: 'expense', date: "20-08-2025", time: "19:00" },
    { id: 85, category: "Oylik-maosh", amount: 7500000, currency: "uzs", type: 'income', date: "10-08-2025", time: "09:00" },

    // IYUL 2025
    { id: 86, category: "Xizmatlar", amount: 300000, currency: "uzs", type: 'expense', date: "05-07-2025", time: "11:00" },
    { id: 87, category: "Oylik-maosh", amount: 7500000, currency: "uzs", type: 'income', date: "10-07-2025", time: "09:00" },
    { id: 88, category: "Kredit", amount: 1200000, currency: "uzs", type: 'expense', date: "25-07-2025", time: "14:00" },

    // IYUN 2025
    { id: 89, category: "Oylik-maosh", amount: 7500000, currency: "uzs", type: 'income', date: "10-06-2025", time: "09:00" },
    { id: 90, category: "Xaridlar", amount: 400000, currency: "uzs", type: 'expense', date: "15-06-2025", time: "18:00" },

    // MAY 2025
    { id: 91, category: "Oylik-maosh", amount: 7500000, currency: "uzs", type: 'income', date: "10-05-2025", time: "09:00" },
    { id: 92, category: "Xizmatlar", amount: 120000, currency: "uzs", type: 'expense', date: "01-05-2025", time: "10:00" },

    // APREL 2025
    { id: 93, category: "Oylik-maosh", amount: 7500000, currency: "uzs", type: 'income', date: "10-04-2025", time: "09:00" },
    { id: 94, category: "Kafe", amount: 85000, currency: "uzs", type: 'expense', date: "15-04-2025", time: "13:00" },

    // MART 2025
    { id: 95, category: "Oylik-maosh", amount: 7500000, currency: "uzs", type: 'income', date: "10-03-2025", time: "09:00" },
    { id: 96, category: "Sovg'alar", amount: 500000, currency: "uzs", type: 'expense', date: "08-03-2025", time: "10:00" },

    // FEVRAL 2025
    { id: 97, category: "Oylik-maosh", amount: 7000000, currency: "uzs", type: 'income', date: "10-02-2025", time: "09:00" },
    { id: 98, category: "Xizmatlar", amount: 50000, currency: "uzs", type: 'expense', date: "15-02-2025", time: "11:00" },

    // YANVAR 2025
    { id: 99, category: "Oylik-maosh", amount: 7000000, currency: "uzs", type: 'income', date: "10-01-2025", time: "09:00" },
    { id: 100, category: "Xaridlar", amount: 650000, currency: "uzs", type: 'expense', date: "01-01-2025", time: "15:00" },

    // --- DEKABR 2024 ---
    { id: 100, category: "Xaridlar", amount: 1500000, currency: "uzs", type: 'expense', date: "31-12-2024", time: "20:00" },
    { id: 101, category: "Sovg'alar", amount: 600000, currency: "uzs", type: 'expense', date: "30-12-2024", time: "15:30" },
    { id: 102, category: "Kafe", amount: 250000, currency: "uzs", type: 'expense', date: "28-12-2024", time: "19:00" },
    { id: 103, category: "Transport", amount: 15000, currency: "uzs", type: 'expense', date: "27-12-2024", time: "08:30" },
    { id: 104, category: "Xaridlar", amount: 320000, currency: "uzs", type: 'expense', date: "25-12-2024", time: "18:20" },
    { id: 105, category: "Transport", amount: 12000, currency: "uzs", type: 'expense', date: "24-12-2024", time: "09:00" },
    { id: 106, category: "Oylik-maosh", amount: 6500000, currency: "uzs", type: 'income', date: "10-12-2024", time: "09:00" },
    { id: 107, category: "Kommunal", amount: 380000, currency: "uzs", type: 'expense', date: "05-12-2024", time: "10:00" },
    { id: 108, category: "Transport", amount: 15000, currency: "uzs", type: 'expense', date: "02-12-2024", time: "08:15" },
    { id: 109, category: "O'tkazma", amount: 200000, currency: "uzs", type: 'income', date: "01-12-2024", time: "14:00" },

    // --- NOYABR 2024 ---
    { id: 110, category: "Kredit", amount: 1200000, currency: "uzs", type: 'expense', date: "25-11-2024", time: "11:00" },
    { id: 111, category: "Transport", amount: 15000, currency: "uzs", type: 'expense', date: "24-11-2024", time: "08:30" },
    { id: 112, category: "Kafe", amount: 120000, currency: "uzs", type: 'expense', date: "20-11-2024", time: "13:00" },
    { id: 113, category: "Xaridlar", amount: 450000, currency: "uzs", type: 'expense', date: "18-11-2024", time: "17:40" },
    { id: 114, category: "Transport", amount: 12000, currency: "uzs", type: 'expense', date: "15-11-2024", time: "09:10" },
    { id: 115, category: "Oylik-maosh", amount: 6500000, currency: "uzs", type: 'income', date: "10-11-2024", time: "09:00" },
    { id: 116, category: "Transport", amount: 8000, currency: "uzs", type: 'expense', date: "08-11-2024", time: "08:45" },
    { id: 117, category: "Xizmatlar", amount: 65000, currency: "uzs", type: 'expense', date: "05-11-2024", time: "14:20" },
    { id: 118, category: "Kafe", amount: 95000, currency: "uzs", type: 'expense', date: "03-11-2024", time: "19:30" },

    // --- OKTYABR 2024 ---
    { id: 119, category: "Xaridlar", amount: 850000, currency: "uzs", type: 'expense', date: "30-10-2024", time: "18:00" },
    { id: 120, category: "Transport", amount: 15000, currency: "uzs", type: 'expense', date: "28-10-2024", time: "08:20" },
    { id: 121, category: "Kafe", amount: 180000, currency: "uzs", type: 'expense', date: "25-10-2024", time: "20:00" },
    { id: 122, category: "Kredit", amount: 1200000, currency: "uzs", type: 'expense', date: "24-10-2024", time: "10:00" },
    { id: 123, category: "O'tkazma", amount: 500000, currency: "uzs", type: 'income', date: "20-10-2024", time: "15:00" },
    { id: 124, category: "Transport", amount: 12000, currency: "uzs", type: 'expense', date: "15-10-2024", time: "09:00" },
    { id: 125, category: "Oylik-maosh", amount: 6500000, currency: "uzs", type: 'income', date: "10-10-2024", time: "09:00" },
    { id: 126, category: "Transport", amount: 15000, currency: "uzs", type: 'expense', date: "05-10-2024", time: "08:30" },
    { id: 127, category: "Xizmatlar", amount: 45000, currency: "uzs", type: 'expense', date: "01-10-2024", time: "11:00" },

    // --- SENTYABR 2024 ---
    { id: 128, category: "Kommunal", amount: 320000, currency: "uzs", type: 'expense', date: "30-09-2024", time: "10:00" },
    { id: 129, category: "Xaridlar", amount: 120000, currency: "uzs", type: 'expense', date: "25-09-2024", time: "18:30" },
    { id: 130, category: "Transport", amount: 15000, currency: "uzs", type: 'expense', date: "22-09-2024", time: "08:45" },
    { id: 131, category: "Kafe", amount: 65000, currency: "uzs", type: 'expense', date: "20-09-2024", time: "13:00" },
    { id: 132, category: "Oylik-maosh", amount: 6000000, currency: "uzs", type: 'income', date: "10-09-2024", time: "09:00" },
    { id: 133, category: "Transport", amount: 12000, currency: "uzs", type: 'expense', date: "05-09-2024", time: "09:15" },
    { id: 134, category: "O'tkazma", amount: 1000000, currency: "uzs", type: 'income', date: "01-09-2024", time: "12:00" },

    // --- AVGUST 2024 ---
    { id: 135, category: "Sayohat", amount: 3500000, currency: "uzs", type: 'expense', date: "20-08-2024", time: "10:00" },
    { id: 136, category: "Kafe", amount: 450000, currency: "uzs", type: 'expense', date: "15-08-2024", time: "21:00" },
    { id: 137, category: "Transport", amount: 25000, currency: "uzs", type: 'expense', date: "12-08-2024", time: "09:00" },
    { id: 138, category: "Oylik-maosh", amount: 6000000, currency: "uzs", type: 'income', date: "10-08-2024", time: "09:00" },
    { id: 139, category: "Xaridlar", amount: 280000, currency: "uzs", type: 'expense', date: "05-08-2024", time: "17:00" },

    // --- IYUL 2024 ---
    { id: 140, category: "Kredit", amount: 1200000, currency: "uzs", type: 'expense', date: "25-07-2024", time: "14:00" },
    { id: 141, category: "Transport", amount: 15000, currency: "uzs", type: 'expense', date: "20-07-2024", time: "08:30" },
    { id: 142, category: "Xizmatlar", amount: 85000, currency: "uzs", type: 'expense', date: "15-07-2024", time: "11:00" },
    { id: 143, category: "Oylik-maosh", amount: 6000000, currency: "uzs", type: 'income', date: "10-07-2024", time: "09:00" },
    { id: 144, category: "Kafe", amount: 110000, currency: "uzs", type: 'expense', date: "05-07-2024", time: "13:00" },
    { id: 145, category: "Xaridlar", amount: 340000, currency: "uzs", type: 'expense', date: "01-07-2024", time: "18:00" },

    // --- IYUN 2024 ---
    { id: 146, category: "Xizmatlar", amount: 250000, currency: "uzs", type: 'expense', date: "28-06-2024", time: "10:00" },
    { id: 147, category: "Transport", amount: 12000, currency: "uzs", type: 'expense', date: "25-06-2024", time: "08:45" },
    { id: 148, category: "O'tkazma", amount: 400000, currency: "uzs", type: 'income', date: "20-06-2024", time: "16:00" },
    { id: 149, category: "Kafe", amount: 95000, currency: "uzs", type: 'expense', date: "15-06-2024", time: "13:00" },
    { id: 150, category: "Oylik-maosh", amount: 6000000, currency: "uzs", type: 'income', date: "10-06-2024", time: "09:00" },
    { id: 151, category: "Xaridlar", amount: 180000, currency: "uzs", type: 'expense', date: "05-06-2024", time: "17:30" },

    // --- MAY 2024 ---
    { id: 152, category: "Kommunal", amount: 280000, currency: "uzs", type: 'expense', date: "31-05-2024", time: "10:00" },
    { id: 153, category: "Transport", amount: 15000, currency: "uzs", type: 'expense', date: "25-05-2024", time: "08:30" },
    { id: 154, category: "Xaridlar", amount: 420000, currency: "uzs", type: 'expense', date: "20-05-2024", time: "18:00" },
    { id: 155, category: "Kafe", amount: 150000, currency: "uzs", type: 'expense', date: "15-05-2024", time: "19:00" },
    { id: 156, category: "Oylik-maosh", amount: 6000000, currency: "uzs", type: 'income', date: "10-05-2024", time: "09:00" },
    { id: 157, category: "Transport", amount: 12000, currency: "uzs", type: 'expense', date: "05-05-2024", time: "09:00" },
    { id: 158, category: "Xizmatlar", amount: 35000, currency: "uzs", type: 'expense', date: "01-05-2024", time: "11:00" },

    // --- APREL 2024 ---
    { id: 159, category: "Kafe", amount: 85000, currency: "uzs", type: 'expense', date: "30-04-2024", time: "13:00" },
    { id: 160, category: "Transport", amount: 15000, currency: "uzs", type: 'expense', date: "25-04-2024", time: "08:15" },
    { id: 161, category: "Xaridlar", amount: 230000, currency: "uzs", type: 'expense', date: "20-04-2024", time: "18:00" },
    { id: 162, category: "Kredit", amount: 1200000, currency: "uzs", type: 'expense', date: "15-04-2024", time: "14:00" },
    { id: 163, category: "Oylik-maosh", amount: 5500000, currency: "uzs", type: 'income', date: "10-04-2024", time: "09:00" },
    { id: 164, category: "Transport", amount: 12000, currency: "uzs", type: 'expense', date: "05-04-2024", time: "09:20" },

    // --- MART 2024 ---
    { id: 165, category: "Xizmatlar", amount: 120000, currency: "uzs", type: 'expense', date: "31-03-2024", time: "10:00" },
    { id: 166, category: "Kafe", amount: 300000, currency: "uzs", type: 'expense', date: "21-03-2024", time: "20:00" },
    { id: 167, category: "Sovg'alar", amount: 500000, currency: "uzs", type: 'expense', date: "08-03-2024", time: "11:00" },
    { id: 168, category: "Oylik-maosh", amount: 5500000, currency: "uzs", type: 'income', date: "10-03-2024", time: "09:00" },
    { id: 169, category: "Transport", amount: 15000, currency: "uzs", type: 'expense', date: "05-03-2024", time: "08:30" },

    // --- FEVRAL 2024 ---
    { id: 170, category: "Xaridlar", amount: 450000, currency: "uzs", type: 'expense', date: "28-02-2024", time: "18:00" },
    { id: 171, category: "Transport", amount: 12000, currency: "uzs", type: 'expense', date: "20-02-2024", time: "09:00" },
    { id: 172, category: "Oylik-maosh", amount: 5500000, currency: "uzs", type: 'income', date: "10-02-2024", time: "09:00" },
    { id: 173, category: "Kafe", amount: 75000, currency: "uzs", type: 'expense', date: "05-02-2024", time: "13:00" },

    // --- YANVAR 2024 ---
    { id: 174, category: "Kommunal", amount: 450000, currency: "uzs", type: 'expense', date: "31-01-2024", time: "10:00" },
    { id: 175, category: "Xaridlar", amount: 800000, currency: "uzs", type: 'expense', date: "05-01-2024", time: "15:00" },
    { id: 176, category: "Oylik-maosh", amount: 5500000, currency: "uzs", type: 'income', date: "10-01-2024", time: "09:00" },
    { id: 177, category: "Kafe", amount: 120000, currency: "uzs", type: 'expense', date: "02-01-2024", time: "19:00" },

    // Kunlik mayda xarajatlar (Stress test uchun bir kunda ko'p malumot)
    { id: 178, category: "Transport", amount: 5000, currency: "uzs", type: 'expense', date: "15-05-2024", time: "08:00" },
    { id: 179, category: "Nonushta", amount: 25000, currency: "uzs", type: 'expense', date: "15-05-2024", time: "09:00" },
    { id: 180, category: "Transport", amount: 5000, currency: "uzs", type: 'expense', date: "15-05-2024", time: "18:00" },
    { id: 181, category: "Xizmatlar", amount: 10000, currency: "uzs", type: 'expense', date: "15-05-2024", time: "18:30" },
    { id: 182, category: "Xaridlar", amount: 150000, currency: "uzs", type: 'expense', date: "15-05-2024", time: "19:00" },
];