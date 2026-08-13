let reverseStr = "Hollo SOBOJ PAUL";
// let strSplit = reverseStr.split("");
// let reverse = strSplit.reverse()
// let joinStr = reverse.join("")
let shortHand = reverseStr.split("").reverse().join("")
console.log(shortHand)
 
//using for loop 
let reverse = ""
for (let i = reverseStr.length; i<0 ; i--){
     reverse = reverseStr[i];
} 
console.log(reverse)