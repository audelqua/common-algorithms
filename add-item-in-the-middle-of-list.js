

let tempArray = [1,2,3,4,5,6,7,8,9,10]
let targetIndex = tempArray.findIndex(item => item == 5)
let leftItems = [...tempArray].splice(0, targetIndex + 1)
let rightItems = [...tempArray].splice(targetIndex + 1, tempArray.length)

leftItems.push(15)
tempArray = [...leftItems, ...rightItems]

console.log(tempArray);