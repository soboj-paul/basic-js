let contact = {
  name: "Alex Johnson",
  email: "ALEX@GMAIL.com",
  phone: "555-1234"
};
//email change to lower case
contact["email"] = contact.email.toLowerCase()
// using for in loop for keys and values print
for(let keys in contact){
    console.log(keys, contact[keys])
}
// add new propertys
contact.favoriteWords = ["i", "love", "you"]
// name reverse use three methort
contact.name = contact.name.split("").reverse().join("")
//chack @gmail.com
if(contact.email.toLowerCase().includes("@gmail.com")){
    console.log("Email contains @email.com")
}

console.log(contact)