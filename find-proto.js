const someArray = [1,2,3,4,5,6,6]
const itemNumber6 = someArray.find(function(item){
    let targetItem = undefined
    if(item === 6) targetItem = item
    return targetItem
})
console.log('itemNumber6', itemNumber6);