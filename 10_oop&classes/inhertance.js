class User {
    constructor(username){
        this.username = username
    }

    logME(){
        console.log(`USERNAME IS ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username,email,password){
        super(username) // this will find the extends of the class and access it and even behind the scenes it will carry the "this" context as well .
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const person = new Teacher("chai","gmail","123")

person.addCourse() // this here works 

const  person2 = new User("EX1","yahoo","1234")

person2.logME()