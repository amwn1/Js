function SetUserName(username){
    this.username = username;
}

function user(username,email,password){
    SetUserName(username) // this here won't work because , as it calls the function "SetUserName", it is not calling it but just referencing it to know the difference between them 
    // read this stackoverflow article : https://stackoverflow.com/questions/15886272/what-is-the-difference-between-a-function-call-and-function-reference
    // to actually use this then use 
    SetUserName.call(username) // to hold the reference of the object we use this , Note now !! , this still wont give the desired output to actually use it use :
    SetUserName.call(this, username) //This here will give the desired OP // due to call stack after a function is called it is removed from the stack along with it's context thus not providing the "this" value 
    // in the parameters of above SetUserName.call() , the first parameter is "this" to save the reference of the function declared and which is removed from the techStack
    this.email = email,
    this.password = password
}

const aman = new user("Aman","@yahoo","Password")
console.log(aman)