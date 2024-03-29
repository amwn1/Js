//Here we are going to study about this keyword , this keyword takes the current context of the code and displays it for ex:

const user = {
    name:"AMan",
    age:19,
    message: function(){
        console.log(`${this.name},welcome !`) // this is used here it will display the default name 
    }
}

user.message() // AMan,welcome !
user.name = "Malik"
user.message() // Malik ,welcome ! // it took the current context and declared it 

// tho if i print it just standalone
console.log(this) // {} , this will give the empty object

// INTQ!_ Which global object is primary in browser ?
// ANS : Window , if you log "this" in browser you will get the WIndows object a lot

function test(){
    let name = Aman;
console.log(this.name) // this will give undefined as the OP , 
}
        // |  TO create to arrow function
        // V

const test = () => {
    let name = Aman;
console.log(this.name)
}

const sum = (num1,num2) => {
    return num1+num2;
}

// this can be written in implicit form , In this you can write a function in one line without writing the return keyword

const add =(num1,num2) => num1+num2  // or (num1 + num2) .

// NOTE : if writted in curly braces then return have to be written , if in parenthesis then it is not required

// now to return an object 

const name =(num1,num2) => ({name:"AMAN"}) 
