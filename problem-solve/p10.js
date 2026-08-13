function countMultipllesOfThree(number){
    let count =0;
    for(let num of number){
        if(num % 3 == 0){
             count ++;
        }
    }
    return count;
}
console.log(countMultipllesOfThree([3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]))