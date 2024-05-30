const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is complete ');
        resolve()
    },1000)
}) 
promiseOne.then(function(){ // then is related to resolve , the function in the promise will return here
console.log("promise done")
})

// it can also be done in this way as well 
new Promise (function(resolve,reject){
    setTimeout(function(){
        resolve()
        console.log("Async2");
    },1000)
}).then(function(){
    console.log("This is it")
})

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){

        resolve({username: "Chai", email:"chai@example"})
    },1000)
})

promise3.then(function(user){

    console.log(user);
})
