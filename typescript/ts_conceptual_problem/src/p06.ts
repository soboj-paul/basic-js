interface Employees {
    name:string,
    onDuty:boolean
}
function findOnDutyEmployees(employees:Employees[]):Employees[]{
    const onDuty:Employees[] = employees.filter((employe:Employees) => employe.onDuty === true);

    return onDuty;
}
const employe = [{name:"Lima",onDuty:false},{name:"Karim",onDuty:false}]
console.log(findOnDutyEmployees(employe))