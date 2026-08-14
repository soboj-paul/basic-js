// একটি array বানাও যেখানে student-এর নাম থাকবে এবং কতজন আছে সেটা কনসোল করবে।
// Input:
// ["Amina", "Rahim", "Karim", "Salma", "Rafi"]
// Output:
// Total student: 5
function countStudents(arr:string[]){
    let count:number = 0;
    for(let item of arr){
         count++
    }
    return count;
}
console.log(countStudents( ["Amina", "Rahim", "Karim", "Salma", "Rafi"]))