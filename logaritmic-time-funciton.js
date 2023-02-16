

function logarithmicTimeFunction() {
    for(let i = 0; i < 10000000000000000000000000000000000000;  i = i + i + i + i + i + i +1){ // here we said that take look at i and add it to itself + 1.
        console.log('i', i);
    }
}
logarithmicTimeFunction()