const someArray = [1,2,3,4,5,6,6]
const itemNumber6 = someArray.find(function(item){
    let targetItem = undefined
    if(item === 6) targetItem = item
    return targetItem
})
console.log('itemNumber6', itemNumber6);

const itemNumber5 = someArray.find(item => item === 5)
console.log('itemNumber5', itemNumber5);