const getAgeRatingAccess = (age:number) =>{
    if(age<7){
        return "E(Everyone)"
    }else if(age >7 && age <12){
        return "E+10 (Everyone 10+)"

    }else if(age >=13 && age <=16){
        return "T(Teen)"
    }
    return "M(Mature)"
}
console.log(getAgeRatingAccess(18))