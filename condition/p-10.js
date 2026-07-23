let weight = 85;
let height = 71;
height = height * 0.0254;
let bmi = weight / (height**2);
if(bmi<=18.5){
    console.log('BMI: ',bmi);
    console.log('underweight');
}
else if(bmi >= 18.6 && bmi <=24.9){
    console.log('BMI: ', bmi);
    console.log('Healthy Weight');
}
else if(bmi>=25 && bmi<=29.9){
    console.log('BMI: ',bmi);
    console.log('Overweight');
}
else if(bmi>=30){
    console.log('BMI: ',bmi);
    console.log('overweight');
}