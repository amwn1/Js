class User {
    constructor(username, email,password){
        this.username = username,
        this.email = email,
        this.password = password
    }

    encrypt() {
        return`${this.password}abc`
    }

    change(){
        return `${this.username.toUpperCase()}`
    }
}

const aman = new User("Aman","gmail","awerf"
)


// behind the scene 

User.prototype.encrypt = function(){
    return `${this.password}reded`           // above functions can also be described lie this .
    }
console.log(aman.encrypt()) // works 