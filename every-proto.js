const someArray = [2,3,4,5,1,2,3,4]

const res = someArray.every(function(item) {
    return item === 1 
})
console.log('res', res) // false
// **** every method iterate on every element and check condition
// if any if items pass the condition every will return true and if not it will return false **** 

const someOtherArray = ['audrey', 'reza', 'ahmad', 'ali']

// prototype is constructor javaScript objects 
Array.prototype.customEvery = function(customCallbackFunction) {
    let boolean = false
    this.forEach(function(item) {
        if(customCallbackFunction(item)) boolean = true
    })
    
    return boolean
}

const response = someOtherArray.customEvery(function(item) {
    return item === 'reza'
})
console.log('response', response);