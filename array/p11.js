const mixed = [10, 'soboj', 20,42, 'paul', 30, 50, 'hello', 60, 'world'];
let number =[]
let string =[]
for (let value of mixed) {
    if(typeof value === 'number'){
        number.push(value);
}
if(typeof value === 'string'){
    string.push(value);
}
}
console.log('Numbers:', number);
console.log('Strings:', string);

// advanced problem 01, 04 & 05 not complete