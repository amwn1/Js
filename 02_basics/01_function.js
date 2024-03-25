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
    check("Aman")