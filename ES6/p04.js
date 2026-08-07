const calculateBMI=(weight, height) =>{
    BMI = weight / (height * height);
    const converted = Number(BMI.toFixed(2));
    return converted;
}
console.log(calculateBMI(85, 1.75))