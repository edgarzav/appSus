
export default { getCurrencyIcon }

function getCurrencyIcon(currencyCode) {
    switch (currencyCode) {
        case 'EUR':
            return '€'
            break;
        case 'ILS':
            return '₪'
            break;
        case 'USD':
            return '$'
            break;
        default:
            break;
    }
}
