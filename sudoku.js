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

const sudokuConditionChecker = (exampleOne) => {
    console.log('exampleOne', exampleOne);
}

sudokuConditionChecker(exampleOne)
