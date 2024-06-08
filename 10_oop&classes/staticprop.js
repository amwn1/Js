class User {
    constructor(username){
        this.username = username
    }

    logME() {
        console.log(`Username: ${this.username}`)
    }

     static createID(){    // this will stop this function and don't give this ID 
        return `123`
    }
}

const aman = new User ("Aman")
console.log(aman.createID())


class Teacher extends User {
    constructor(email, username){
        super(username)
        this.email = email

    }
}

const mouse = new Teacher("aman","hotmail")
mouse.logME() // will throw the errior as the static will restrict the access .