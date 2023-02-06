const someArray = [1,2,3,4,5,6,6]
const itemNumber6 = someArray.find(function(item){
    let targetItem = undefined
    if(item === 6) targetItem = item
    return targetItem
})
console.log('itemNumber6', itemNumber6);

const itemNumber5 = someArray.find(item => item === 5)
console.log('itemNumber5', itemNumber5);

Array.prototype.customFindMethod = function(customFunction) {
    let targetItem = undefined
    this.forEach(function(item){ // ***** generating loop in proto to iterate on all items in array.
        let currentItem = customFunction(item) // ***** put each item in local variable
        if(currentItem) targetItem = currentItem // ***** check if out condition matched set out outer variable as it.
    }) 
    return targetItem // ***** return the found item
}

const itemNumber4 = someArray.customFindMethod(function(item) { // ***** this is a callback function we pass to our proto do return calculated item in loop inside proto.
    if(item === 4) return item // ***** implement out condition to find out item
})
console.log('itemNumber4', itemNumber4);
