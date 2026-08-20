function calculateWeeklySteps(steeps:number[]):number{
    if(steeps.length === 0){
        return 0;
    }
    return steeps.reduce((acc:number, steep:number) => acc + steep , 0)
}
console.log(calculateWeeklySteps([]))