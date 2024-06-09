class User {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return this.password.toUpperCase()    // if you define a getter then you should define a setter as well.
    }

    set password(value){
            this.password = value
    }
}

const Aman = new User("yahoo","qwe")
console.log(Aman)