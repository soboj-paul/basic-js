const numbers = [23, 45, 67, 89, 12, 34];
let sum = numbers[0];
for(let num of numbers){
    sum = sum + num;
}
console.log('Sum of all numbers is:', sum);