
// *** comparison two array of scores  look at here for details: alice and bob [2,3,6] and [6,5,2] => [0,0] https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
const alice = [13,53,23]
const jason = [12,5,82]
let pointScore = [0,0]

function comparisonScores(a,b) {
    for(let i = 0; i < 3; i ++) {
        if(a[i] > b[i]) pointScore[0] += 1
        else if(a[i] < b[i]) pointScore[1] += 1
    }
    console.log('pointScore', pointScore);
}

comparisonScores(alice, jason)
// *** comparison two array of scores  look at here for details: alice and bob [2,3,6] and [6,5,2] => [0,0] https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

