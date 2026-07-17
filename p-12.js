let isLoggedIn = false;
let isAdmin = false;
if(isLoggedIn && isAdmin){
    console.log("Admin Dashboard");
}
else if(isLoggedIn && !isAdmin){
    console.log("User Dashboard");
}
else if(!isLoggedIn){
    console.log("Please Login");
}