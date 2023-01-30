const someArray = [1,2,3,4,5,6,7]

someArray.forEach(function(item) {
    console.log('item', item);
})


const someAnotherArray = [4,1,2,3,4,5,6,76,7,8,] 
Array.prototype.customForEach = function(someCustomCallbackFunction) {
    for(let i = 0; i < this.length; i ++) {
        someCustomCallbackFunction(this[i])
    }
}

someAnotherArray.customForEach(function(item) {
    console.log('item', item)
})