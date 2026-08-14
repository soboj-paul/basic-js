// একটি function বানাও যা যেকোনো সংখ্যক number নিয়ে তাদের sum করবে।
// Input:
// sumAll(1, 2, 3, 4)
// Output:
// 10
function sumNumber(numbers:number[]):number{
    let sum:number = 0;
    for(let num of numbers){
        sum+=num;
    }
    return sum;
}
console.log(sumNumber([1, 2, 3, 4]))