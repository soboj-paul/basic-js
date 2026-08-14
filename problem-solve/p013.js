function listKeys(obj){
    let keys = [];
    for(let key in obj){
        keys.push(key)
    }
    return keys;
}
console.log(listKeys({ name: "Sam", age: 25, city: "Dhaka" }));