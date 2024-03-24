// const tinderUser = new Object() // songleton object
const tinder = {} //non singleton object

tinder.id = "123abc"
tinder.namme = "Aman"
tinder.isLog = false

// console.log(tinder) // { id: '123abc', namme: 'Aman', isLog: false }

const user = {
    email : "ir@gmail.com",
    fullname:{
        first : "Aman",
        last :"Malik"
    }
}

// console.log(user); // OUTPUT : { email: 'ir@gmail.com', fullname: { first: 'Aman', last: 'Malik' } }

// console.log(user.fullname); // OUTPUT { first: 'Aman', last: 'Malik' }

// console.log(user.middle?.first); // ? checks the value 

const obj1 = {1:"a" ,2:"b"}
const obj2 = {3:"a" ,4:"b"}

// const obj3 = {obj1,obj2}
//   const obj3 = Object.assign(obj1, obj2)
// console.log(obj3); // OP { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);  OP { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// we take an empty array because , to target and source ; the first parameter is the target and rest is source 

// you can also seen in the array as well the below topic 
// const ob3 = {...obj1,...obj2}

const  info = [{id:1,
                email:"x@gmail.com"}]
 // this above is array of object and is widely used in the current scenarios to get the data 

console.log(Object.keys(user));
// You can tke out values and keys , the op of these will be in string

//Ex : To check a value if it exists or not we can use  console.log(user.hasoenProperty('isLoggedin')) // will give and in Boolean