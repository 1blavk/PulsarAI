const formatter = new Intl.NumberFormat("uz-Latn-UZ");

export const formatCurrency = (value: number) => {
    return formatter.format(value);
};