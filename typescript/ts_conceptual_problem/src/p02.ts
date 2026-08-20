interface User {
    name:string,
    movie:string,
    time:string
}
const  formatTicketConfirmation= (user:User) =>{
    return `${user.name}'s ticket for ${user.movie} is comfirmed at ${user.time}`;

}
console.log(formatTicketConfirmation({ name: "Nabila", movie: "Interstellar", time: "9:15 PM" }))