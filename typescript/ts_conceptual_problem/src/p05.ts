type Weather= "sunny" | "rainy" | "cloudy"
function  getWeatherAdvice(weather:Weather){
    if(weather === "sunny"){
        return "Wear sunscreen"
    }else if(weather === "rainy"){
        return "Carry an umbrella"
    }
    return "Bring a light jacket"
}
console.log(getWeatherAdvice("sunny"))