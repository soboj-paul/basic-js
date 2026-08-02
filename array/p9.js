
const numbers =[200, 100, 300, 400, 500, 900];
let greaterNumbers = numbers[0];
for(let num of numbers){

    console.log(num);
    if(num >greaterNumbers){
        greaterNumbers = num;
    }
}
console.log('Greater number is:', greaterNumbers);