// singleton : when a object is made from a constructor a singleton in created // way to create object using constructor: Object.create
// if declared from a literal singleton is not made 

// object leterals :
// const User = {} or  // that is how create an object 
const sym = Symbol("k36")
const User = {
    name:"Aman", "full Name" : "Aman Malik",
    age:21,
    mySum :"mykey1", // we need to use this as a symbol , here it is used in string
    [sym]:"key", // this is the way to define a symbol
    location:"India",
    email:"aman@gmail.com:",
    isLoggedin : false,
    arr :["Monday","Saturday"]
} 
// objects have keys and values in them

// console.log(User.email) // this is one way but not a good practice
// console.log(User["email"]) // this is the good practice because ...
// console.log(User["full Name"]); // This will give an output
// console.log(User.fullName) // This wont be given an output

// console.log(User["mySum"]) // typeOf (String)
// console.log(User[sym]) // op key , look at line 6 as well

// User.email = "malik.com" // to change the value of an object
// Object.freeze(User) // to not propagate any changes further
// User.location = "Madrid"
// console.log(User["email"])
// console.log(User["location"])

User.greeting = function(){
    console.log("Hello Peeps , dont give up !")
}

User.greet = function(){
    console.log(`Hello Js User , ${this.name}`) //this will be explored more in the notes later
}

// console.log(User.greeting) // Function (anonymous) 
// console.log(User.greeting()); // this will give logged value and will give "undefined"

// console.log(User.greeting());
// console.log(User.greet());
// OP : >
// Hello Peeps , dont give up !
// undefined
// Hello Js User , Aman
// undefined


