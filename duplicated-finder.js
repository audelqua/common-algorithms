
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

