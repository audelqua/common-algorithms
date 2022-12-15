
const givenArray = [9,2,4,6,7,23,5,6, 34,4,687,78,4234,56,2,3,7,5,3,67,8,9,6,4,3,6,78,8,5,34,3,43,43,4,34,3,43,4]

//NOTE: 
// First step: first we have to meet every element in list.
// Second step: then we need to meet its left side element
// Third step: then we have to compare if right side is smaller than left side and if YES we have to changes swap those elements. 
// NOTE: we will save one side in another variable so after swap happened we still have one side previous amount
// ***** this algorithm has n^2 O notation **** BUBBLE SORT ******
function sortAlgorithm() {
    for(let i = 0; i < givenArray.length; i ++) {
        for(let j = 0; j < i; j ++){
            if(givenArray[i] < givenArray[j]) {
                let x = givenArray[i]
                givenArray[i] = givenArray[j]
                givenArray[j] = x
            }
        }
    }
}
sortAlgorithm()
console.log(givenArray);
