
// ***** with n*2 O notation
const tempArray = [1,2,4,54,56,3,1,21,4,12,4,5,7,23,5,6,21,3,4,5,6,8,3,2,1,21,3,4,6,6]
let duplicates = []

function duplicatedFinderQuadratic() {
    for(let i = 0; i < tempArray.length; i++) { //this is for visiting all items in the list
        for(let j = 0; j < i;j ++){ // this for is for visiting all left side items in the list beside visiting each item and do comparison
            if(tempArray[i] == tempArray[j]) { // this will do my comparison 
                if(!duplicates.includes(tempArray[i])) duplicates.push(tempArray[i]) // includes will check if this item added in the target list or not, then do add it
            } 
        }
    }
    console.log('duplicated items with n*2 algorithm', duplicates);
}

duplicatedFinderQuadratic()

// ***** with n notation 
let myItems = [] // this is for items not duplicated in the given array
let myDuplicatedItems = [] // this is for items been duplicated in the given array
function duplicatedFinderLinear() {
    for(let i = 0; i < tempArray.length; i++) { //this is for visiting all items in the list
        if(!myItems.includes(tempArray[i])) myItems.push(tempArray[i]) // this for pushing items in the myItems array and check if same item is there or not. if YES, it means that this item is duplicated in the given array
        else if(!myDuplicatedItems.includes(tempArray[i])) myDuplicatedItems.push(tempArray[i]) // this for adding duplicated items in the given array and push them into myDuplicatedItems, includes check if duplicated items are exist in the duplicated list or not. if YES means that it has been duplicated more than once and will ignore to add it into the list
    }
    console.log('duplicated items with n*1 algorithm', myDuplicatedItems);
}

duplicatedFinderLinear()

