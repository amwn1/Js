// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task is complete ');
//         resolve()
//     },1000)
// }) 
// promiseOne.then(function(){ // then is related to resolve , the function in the promise will return here
// console.log("promise done")
// })

// // it can also be done in this way as well 
// new Promise (function(resolve,reject){
//     setTimeout(function(){
//         resolve()
//         console.log("Async2");
//     },1000)
// }).then(function(){
//     console.log("This is it")
// })

// const promise3 = new Promise(function(resolve, reject){
//     setTimeout(function(){

//         resolve({username: "Chai", email:"chai@example"})
//     },1000)
// })

// promise3.then(function(user){

//     console.log(user);
// })

// const promise4 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({user : "Hitesh", pass:"asd"})

//         }
//         else {
//             reject('Error : something went wron')
//         }
//     },1000)
// })

// promise4.then((users) => {
//     console.log(users);
// }).then((user) => {
//     console.log(user)
// }).catch(function(error){
//     console.log(error);
// }).finally(() => {console.log("The promise is either resolved or rejected")})


// const promise5 = new Promise(function(resolve,reject) {
//     setTimeout(function(){
//                 let error = true;
//                 if(!error){
//                     resolve({username : "Aman", pass:"asd"})
        
//                 }
//                 else {
//                     reject('Js went wrong')
//                 }
//             },1000)
// })

// async await . Remeber that promise is an object

// async function consumePromise5() {
//     try {const response = await promise5
//     console.log(response);}
//     catch(error){
//         console.log(error)
//     }

// }

// consumePromise5()

// async function getAllusers() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//     const data = await response.json()  //remember to put await in here
//     console.log(data);
//     }
//     catch (error){
//         console.log(error)
//     }
// }

// getAllusers()

// now writing this in .then and .catch

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))
