const arrayOfNumbers = [1,2,3,4,5,5,5,5,5,6,7,8,9]


function firstLastRepeatedFinder() {
    const targetItems = {}
    let found = false

    for(let i = 0; i < arrayOfNumbers.length; i++) {
        let item = arrayOfNumbers[i]
        let nextItem = arrayOfNumbers[i + 1]

        if(item === nextItem) { // last item here
            found = true
            targetItems[i] = item
        }else {
            if(found) {
                targetItems[i] = item
                found = false
            }
        }
    }

    return {
        firstItem: Object.entries(targetItems)[0],
        lastItem: Object.entries(targetItems)[Object.entries(targetItems).length - 1]
    }
}

let myItems = firstLastRepeatedFinder()
console.log(myItems);
