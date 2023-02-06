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
    this.forEach(function(item){
        let currentItem = customFunction(item)
        if(currentItem) targetItem = currentItem
    })
    return targetItem
}

const itemNumber4 = someArray.customFindMethod(function(item) {
    if(item === 4) return item
})
console.log('itemNumber4', itemNumber4);
