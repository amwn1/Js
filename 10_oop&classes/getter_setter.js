class User {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()   // this will exceed the flow stack to solve this change email -> _email, this is a private property now. Kind of 
    }

    set email(value){
        this._email = value
    }

    // get password(){
    //     return this.password.toUpperCase()    // if you define a getter then you should define a setter as well.
    // }

    // set password(value){
    //         this._password = value.toUpperCase()
    // }

    // set password(value){
    //     this._password = value.toUpperCase()

    // }
}

const Aman = new User("yahoo","qwe")
console.log(Aman._password)