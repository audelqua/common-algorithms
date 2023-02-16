

function logarithmicTimeFunction() {
    for(let i = 0; i < 10000000000000000000000000000000000000;  i = i + i + 1){
        console.log('i', i);
    }
}
logarithmicTimeFunction()