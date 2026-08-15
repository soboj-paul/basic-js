// একটি TypeScript program বানাও যেখানে একজন user-এর নাম, বয়স, email, skills, আর active status থাকবে। এরপর সব তথ্য print করবে।
// Input:
// {
//   name: "Amina",
//   age: 22,
//   email: "amina@email.com",
//   skills: ["HTML", "CSS", "TypeScript"],
//   active: true
// }
// Output:
// Name: Amina
// Age: 22
// Email: amina@email.com
// Skills: HTML, CSS, TypeScript
// Active: true
function userInfo(user:{
    name:string,
    age:number,
    email:string,
    skills:string[],
    active:boolean,
}):void{
    user.name
    let skill:string = user.skills.join(", ")

    for(const key in user){
        if(key === "skills"){
            user.skills.join(", ")
        }
        console.log(`${key.toUpperCase()} : ${user[key]}`)
    }

    // console.log(`Name: ${user.name}`)
    // console.log(`Age: ${user.age}`)
    // console.log(`Email: ${user.email}`)
    // console.log(`Skills: ${skill}`)
    // console.log(`Active: ${user.active}`)
    
}
 userInfo({
    name:'soboj',
    age:21,
    email:"sobojpaul.me@gmal.com",
    skills:['HTML','CSS','JS'],
    active:true,
})