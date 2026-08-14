function keepOnlyEvenNumber(numbers){
    let evenNumber = [];
    for(let num of numbers){
        if(num % 2 == 0){
            evenNumber.push(num);
        }
    }
    return evenNumber;
}
console.log(keepOnlyEvenNumber([3, -5, 8, -1, 0]))