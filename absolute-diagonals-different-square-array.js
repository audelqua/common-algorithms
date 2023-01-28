//Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// 1 2 3 
// 4 5 6
// 7 8 9

const absoluteDifferenceFinder = (givenArray) => {
    let ltr = 0
    let rtl = 0
    
    for(let x = 0; x < givenArray.length; x++) {
        ltr += givenArray[x][x]
        rtl += givenArray[x][(givenArray.length - 1) - x]
    }

    let response = ltr - rtl
    if(response < 0) response = (response * -1)
    return response
}

const x = absoluteDifferenceFinder([[1,4,9], [2,5,8],[3,6,9]])
console.log(x);
