const simpleArray = [1,2,3,4,5] // **** any given array

const doubledArray = simpleArray.map(function(item) { // **** ## this is what we have, but how it works? $$
    return item * 2
})

// **** Array.prototype is a way which we determine new methods
Array.prototype.customMap = function(customFunction) { // **** its function that gives a function (the call back one on the top with ## ##) and run it for each item
    let tempArray = []

    this.forEach(function(item){ // **** using an iteration on given array which is in function execution context or "this
        const manItem = customFunction(item) // **** each manipulated item
        tempArray.push(manItem) // **** push items into tempArray
    })
    
    return tempArray // **** return temp array 
}

const someMap = simpleArray.customMap((item => { //**** this is our customFunction and when we use ___ givenArray.customMethod ___. this of method is the given array  */
    return item + 2
}))

console.log('someMap', someMap) // someMap [ 3, 4, 5, 6, 7 ]