// একটি number positive না negative তা ternary operator দিয়ে বের করো।
// Input:
// num = 5
// Output:
// Positive
function chackNumber(number:number):string{
    return number > 0 ? 'Positive':'Negative';
}
console.log(chackNumber(-5))