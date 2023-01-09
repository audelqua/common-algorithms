const arrayOfNumbers = [1,2,3,4,5,5,5,5,5,6,7,8,9]


function firstLastRepeatedFinder() {
    const targetItems = {} // this is for all same items and their indexes
    let found = false // this is for checking start and end point.

    for(let i = 0; i < arrayOfNumbers.length; i++) { // start iterating on all items in given array
        let item = arrayOfNumbers[i] // our item
        let nextItem = arrayOfNumbers[i + 1] // our next item for comparison 

        if(item === nextItem) { // first item found!
            found = true
            targetItems[i] = item
        }else {
            if(found) { // check if first item found before, means now we are at the end of the repeated items. so we will also save this item too. 
                targetItems[i] = item
                found = false
            }
        }
    }

    return { // return stuff 
        firstItem: Object.entries(targetItems)[0],
        lastItem: Object.entries(targetItems)[Object.entries(targetItems).length - 1]
    }
}

let myItems = firstLastRepeatedFinder() // showing stuff 
console.log(myItems);
