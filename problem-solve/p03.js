function productOfDigits(num){
    let str = num.toString();
    let total = 1;
    for(let i = 0; i<str.length ; i++){
        total *= str[i];
    }
    return Number(total);
}
console.log(productOfDigits(4040))