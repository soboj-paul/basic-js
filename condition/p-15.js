let cartAmount = 10000;
let userMember = true;
if(cartAmount>1000 && userMember){
    const discount = 20 ;
    const discountAmount = cartAmount / 100 *discount;
    const totalAmount = cartAmount - discountAmount;
    console.log('You have 20% discount ', totalAmount);
}
else if(cartAmount>1000 && !userMember){
    const discount = 10;
    const discountAmount = cartAmount / 100*discount;
    const totalAmount = cartAmount - discountAmount;
    console.log('You have 10% discount ', totalAmount);
}
else{
    console.log('no discount');
}