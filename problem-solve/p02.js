function reverseNumber(num){
    let str = num.toString();
    return str.split("").reverse().join("");
}
console.log(reverseNumber(7))