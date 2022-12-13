
const tempArray = [1,2,4,54,56,3,1,21,4,12,4,5,7,23,5,6,21,3,4,5,6,8,3,2,1,21,3,4,6,6]
let duplicates = []

function duplicatedFinder() {
    for(let i = 0; i < tempArray.length; i++) {
        for(let j = 0; j < i;j ++){
            if(tempArray[i] == tempArray[j]) {
                if(!duplicates.includes(tempArray[i])) duplicates.push(tempArray[i])
            } 
        }
    }
    console.log('duplicated items with n*2 algorithm', duplicates);
}

duplicatedFinder()