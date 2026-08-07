// function bookTicket(movie, seats = 1,pricePerSeat = 300){
//     if(typeof movie !== 'string'){
//         return 'Invalid';
//     }
//     if(typeof seats !== 'number'){
//         return 'Invalid';
//     }
//     if(typeof pricePerSeat !== 'number'){
//         return 'Invalid';
//     }
    
//     return `${movie}: ${seats} seat(s), Total ৳ ${pricePerSeat*seats}`;
// }

const bookTicket = (movie, seats = 1 , pricePerSeat = 300) => {
    return `${movie} : ${seats} seat(s) , total ${seats * pricePerSeat}৳`;

}
console.log(bookTicket('dunki' , 5, 200 ))