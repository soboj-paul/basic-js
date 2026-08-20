interface Items{
    name:string,
    price:number
}
function calculateOrderTotal(items:Items[]){
    if(items.length === 0){
        return 0;
    }
      const total:number = items.reduce((sum:number,item:Items) => sum + item.price , 0)
      return total;

}
console.log(calculateOrderTotal(
[{name:"Burger",price:250},{name:"Fries",price:90},{name:"Soda",price:60}]

))