// sudoku rules: 
// 1. no repeat in rows
// 2. no repeat in columns
// 3. no repeat in region 3*3

const exampleOne = [
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
]

const exampleTwo = [
    [8,3,5,4,1,6,9,2,7],
    [2,9,6,8,5,7,4,3,1],
    [4,1,7,2,9,3,6,5,8],
    [5,6,9,1,3,4,7,8,2],
    [1,2,3,6,7,8,5,4,9],
    [7,4,8,5,2,9,1,6,3],
    [6,5,2,7,8,1,3,9,4],
    [9,8,1,3,4,5,2,7,6],
    [3,7,4,9,6,2,8,1,5]
]

const sudokuConditionChecker = (exampleTwo) => {
    let eachColumn = {}
    exampleTwo.forEach((col, index) => {
        console.log(col[0]);

        for(let x = 0; x < col.length; x ++) {
           
        }
        // eachColumn[index] = col[index]
        // console.log('index', index, 'col', col);
    })
    console.log('eachColumn', eachColumn);
}

sudokuConditionChecker(exampleTwo)
