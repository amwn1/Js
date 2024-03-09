const accountId = 12223 
let accuntEmail = "aman@gmail.com"
var password = 1234
accountCity = "Jalandhar" // a variable can be declared this as well , just not the orthodox way and not  a good practice .

let state ; // the variable is just declared , so the value is just "UNDEFINED";

// we use let because , of the block scope as it used to be an issue in the primitive js , PREFER NOT TO USE VAR ;

// accountId = 23
accuntEmail = "some.gmail.com"
password = 2222
accountCity = "notJalandhar"
// console.log(accountId);
console.table([accountId,accuntEmail,accountCity,password,state])