// to make an object 
// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true, 

//     getUserDetails : function(){
//         console.log(`username : ${username}`)
//     }
// }

// console.log(user.getUserDetails())// this will throw the error and the "this" keyword is used to define context in the scope
// this changing the username to this.username in the function details will throw the error

// now 

const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true, 

    getUserDetails : function(){
        // console.log(this); // here the current context will be printed which is the object above
    }
}

// console.log(user.getUserDetails())

// if printing the context globally it will give the context empty as none is provided
// console.log(this) // OP : {} 

// though if you do the same in browser console's you will get by default a plethora of things

// now to make user2 we dont need to make another class but the use of "constructor" is used
// what does constructor does or the "new" , you can make multiple instance from a single object literal 

function User(username, loginCount, isLoggedIn){
    this.username = username;  // left side is variable if .this is used
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this // this will make all the values accesible

} 

const userOne = User("aman",12,true)
console.log(userOne) // this will print the values
const user2 = User("malik",123,false)
console.log(userOne) // this wil print the user2 values which is a big problem as it overwrites the values 

// to solve this just add the the "new" constructor keyword

const user1 = new User("aman",12,true)
console.log(userOne) // this will print the values
const user4 = new User("malik",123,false)
console.log(user1) // this wont override the values 

// Note : steps of an constructor calling 
// 1. Empty object is created 
// 2. Constructor function is called by new keyword
// 3. this keyword is injected with values 
// 4. gives the value