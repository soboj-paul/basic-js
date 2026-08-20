const getDistanceSummary =(distance:number[]) =>{
    if(distance.length === 0){
        return `{total: 0, average:0}`
    }
    const total:number = distance.reduce((sum:number, item:number) => sum + item ,0)
    const average:number = total / distance.length;
    return `{ total: ${total}, average: ${average} }`
}
console.log(getDistanceSummary([]))