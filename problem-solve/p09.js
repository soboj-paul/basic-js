function findSecondSmallest(numbers){
    let smallest = Infinity;
    let secondSmallest = Infinity;
    for (let num of numbers){
        if(num <smallest){
            secondSmallest = smallest;
            smallest = num;
        }else if(num < secondSmallest){
            secondSmallest  = num;
        }
    }
    // console.log(smallest, secondSmallest)
    // // return smallest
    return secondSmallest;
}
console.log(findSecondSmallest([10, 5, 8, 20, 15,2]))