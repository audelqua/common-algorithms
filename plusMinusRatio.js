// you have an array of numbers, you should find ratio of pluses, minuses and zeros with max of 4 decimal in fraction.
//arr = [1,1,0,-1,-1] => plus: 2/5 and minuses: 2/5 and zeros: 1/5

const ratioFinder = givenArray => {
    let pluses = 0
    let minuses = 0
    let zeros = 0

    let plusRatio = undefined
    let minusRatio = undefined
    let zeroRatio = undefined

    givenArray.forEach(givenNumber => { //***** iterate on each item and add one after matching the conditions 
        if (givenNumber > 0) pluses += 1
        else if (givenNumber === 0) zeros += 1
        else minuses += 1
    })

    //*****finding ratios 
    plusRatio = parseFloat((pluses / givenArray.length)).toFixed(4)
    minusRatio = parseFloat((minuses / givenArray.length)).toFixed(4)
    zeroRatio = parseFloat((zeros / givenArray.length)).toFixed(4)


    // log ratios
    console.log(plusRatio)
    console.log(minusRatio)
    console.log(zeroRatio)

}

ratioFinder([1, 1, 1, 3, 0, 0, , 34, 34, 56, 4, 3, 2, 4, -1, -1, -1, -6, -34, -67, -456, -45, 0, 0])