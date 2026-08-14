function product(name:string, price:number, isAvailable:boolean) {
    return `${name} cost ${price} and is available: ${isAvailable}`;
}
console.log(product('laptop', 23000, true));