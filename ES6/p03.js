const generateReceipt=(customerName, items, total) =>{
    // eceipt for <customerName>Items: <item1, item2, ...>Total: ৳<total></total>
    
    if(Array.isArray(items)){
        return 'Invalid'

    }
    if(items.length ===0){
        return 'Invalid'
    }
    return
        `       Recipt for ${customerName}
        item : ${items}
        Total: ${total}৳`;
            
}
console.log(generateReceipt("Tanvir", [], 0))