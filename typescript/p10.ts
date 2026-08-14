// একটি unknown type variable declare করো এবং পরে type check করে string হলে print করো।
// Input:
// "Hello"
// Output:
// Hello
function chackString(unknownVariable:unknown){
    if(typeof unknownVariable === 'string'){
        return unknownVariable;
    }
}
console.log(chackString('Hello'))