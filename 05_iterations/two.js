// WHILE AND DO WHILE LOOP 

// while(true){
//     // condition 
// }

// use a condition which terminates a loop , or else the loop willl run infinetly 
let index = 0;
while (index < 10) {
    console.log(index);
    index++;
}

let myArr = ['Aman','Arnav','Hemant']
let arr = 0 
while(arr< 2){
    console.log(myArr[arr])
    arr++;
}

// do while loop

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);

// do while will run atleast one time , and then the condition is checked