let applyDiscount = (prices,rate) =>{
    let priceAfterDiscount = prices.map((elem, ind, arr) =>{
            let discoutPrice = (elem - (elem * rate));
            return discoutPrice;

    })
    return priceAfterDiscount
}
let productPrices = [500, 1000, 250, 400, 700];
console.log(applyDiscount(productPrices, 10));
console.log(productPrices);