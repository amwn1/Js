 // Fun fact : Usually the date start with 1970 , Jan 1st . They say its arbitrary

//  let myDate = new Date()
//  console.log(myDate.toString()); // op:> Sun Mar 17 2024 15:15:15 GMT+0000 (Coordinated Universal Time)
// //  console.log(myDate.toDateString()); Sun Mar 17 2024 
//   console.log(myDate.toLocaleString());
//  3/17/2024, 3:17:53 PM

// NOTE : console.log(typeof myDate); // this is an object

let myCreatedDate = new Date(2023,0,23) // month starts from 0 in JS
// console.log(myCreatedDate.toDateString()); 

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // will give you output in millisecods
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000)) // to convert to seconds , divide and floor

let newDate = new Date()
console.log(newDate.getMonth());

