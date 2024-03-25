function hello(){
    console.log("HEY")

}

function stuff (number1, number2){ // while defining the function it is called parameters
console.log(number1+number2);
}

// stuff(2,3) // arguments (inside the bracket)

// const a = stuff(3,4) // console.log will give you the value 7 
// console.log(a); whereas this will give undefined


// The right way to do it is 

function stuff (number1, number2){ 
    return (number1+number2);
//    console.log(a) // NOTE:this will never work as the function already returned in the previous line 
    }
    let a = stuff(3,4)
    // console.log(a) // works 

    // if you dont pass an argument , then it return undefined

    function check (username){
        if(username === undefined){
            console.log("User is undefined")
            return ;
        }
        return 'Is the username ${username}'
    }
    // check("Aman")



function priceCalculate(num1){
     return console.log(num1)
}

function priceCalculate(...num1){ // this is called the rest operator (also spread operator , depends on the use case )
    return console.log(num1)
}
priceCalculate(200,233,211) // this will return an array


function priceCalculate(a  , b ,...num1){
    return console.log(num1)
}

priceCalculate(12,12,123,44353);
// this will return the array [123,44353]

// you can pass arrays and objects as well in the function .



