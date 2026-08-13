// let str = 'Hello';
// let arr = ['H','e','l','l','o'];
// console.log(str[0]);
// console.log(arr[0])

let strToArr = 'Javascript';
let arrToStr = ['C', 'a', 't'];
let convert = '';
let convertStr = strToArr.split("")
console.log(convertStr)
// console.log(arrToStr.join(" "))
for( let i=0; i<arrToStr.length; i++){
     // convert.push(arrToStr[i]); // not working because push methort only use for array not string 
     convert += arrToStr[i]
}
console.log(convert);