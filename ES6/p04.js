const calculateBMI=(weight, height) =>{
   return weight < 0 || height < 0? 'Invalid' :
    `BMI = ${Number((weight/ (height * height)).toFixed(2))}`
    // BMI = weight / (height * height);
    // const converted = Number(BMI.toFixed(2));
    // return converted;
}
console.log(calculateBMI(60, -1.7))

// aro 5 problem baki ase