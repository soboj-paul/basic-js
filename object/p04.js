let scores = { math: 90, science: 85, art: 95 };
let avg =0;
for(let score in scores){
    console.log(score, scores[score])
    avg += scores[score] / score.length
    // console.log(score)
    // console.log(scores[score])
}
console.log(avg)
