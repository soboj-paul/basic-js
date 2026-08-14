function averageOfArray(numbers){
    let total = 0;
    let sum = 0;
    for (let num of numbers){
        sum += num ;
    }
    total = sum / numbers.length;
    return total;
}
console.log(averageOfArray([2, 4, 6,11,12]))