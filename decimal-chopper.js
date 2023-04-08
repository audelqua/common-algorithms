const financialValues = (number, fixed = 2) => {
    if (number === null) return '-'
    
    const decimalCalculationHelper =  Math.pow(10, fixed)
    number = +number
    let isNegative = number < 0

    if(isNegative) number *= -1

    let formattedNumber = (Math.floor((number) * decimalCalculationHelper) / decimalCalculationHelper).toFixed(fixed)

    return isNegative ? '-' + formattedNumber : formattedNumber
}