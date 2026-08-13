function chackTemperature(temp){

    if(temp >= 30){
        return "Hot";
    }else if(temp <=15){
        return "Cold";
    }else{
        return "Normal";
    }
}
console.log(chackTemperature(-15))