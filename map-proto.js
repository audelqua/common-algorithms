const simpleArray = [1,2,3,4,5]

const doubledArray = simpleArray.map(function(item) {
    return item * 2
})

Array.prototype.customMap = function(customFunction) {
    let tempArray = []

    this.forEach(function(item){
        const manItem = customFunction(item)
        tempArray.push(manItem)
    })
    
    return tempArray
}

const someMap = simpleArray.customMap((item => {
    return item + 2
}))

console.log('someMap', someMap);