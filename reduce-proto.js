const customNumericElements = [10, 10, 10]
const initialValue = 20
const sumAllElements = customNumericElements.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
}, initialValue)

console.log('sumAllElements', sumAllElements); // sumAllElements 50

const customNumericElements2 = [10, 10, 10]
const initialValue2 = 20
const multiplyElements = customNumericElements2.reduce(function(accumulator, currentValue) {
    return accumulator * currentValue
}, initialValue2)

console.log('multiplyElements', multiplyElements); // multiplyElements 50

// **** reduce method gets an array of elements, it has one variable internally. which the value is come from the custom function you defined.
// it iterates on every elements and do this calculation. and finally return the last amount of its internal variable  
// in first calculation there is no internal variable so it start from index 1 but you can pass initial value to it. 


