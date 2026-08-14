// দুইটি array merge করো spread operator ব্যবহার করে।
// Input:
// [1, 2, 3]
// [4, 5, 6]
// Output:
// [1, 2, 3, 4, 5, 6]
function mergeArr(arr1:number[] | string[],arr2:number[] | string[] ){
    let result = [...arr1,...arr2];
    return result;
}
console.log(mergeArr(['soboj','paul'],[5,6,7,8]))