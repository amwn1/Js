//All the loops discussed here are array centered loops
// for of loop

// const arr = [1,2,3,4,5];

// for (const val of arr ) {
//      console.log(val);
// }
// // this will print all the values in the arr 

// const greeting = "Hello"
// for( const i of greeting){
//     console.log(i);
// }
// OP: 
// H
// e
// l
// l
// o

// Maps : has unique values 

const map = new Map() 
map.set('IN' , "India")
map.set('MD', "Spain")
map.set("EMEA","Europe")

// console.log(map)
// OP : Map(3) { 'IN' => 'India', 'MD' => 'Spain', 'EMEA' => 'Europe' }

// NOTE IF I ADD ONE MORE KEY SUCH AS "IN" then it wont be displayed 

// for (const i of map) {
//     console.log(i);
// }

// OP : [ 'IN', 'India' ]
// [ 'MD', 'Spain' ]
// [ 'EMEA', 'Europe' ]

// for (const [k,v] of map) {
//     console.log(k)
// }
// only the keys are printed

// for (const [k,v] of map) {
//     console.log(v)
// }
// only the values are printed and this is known as the destructring of the array 

// Now trying to iterate in an object

const myObject = {
    'game':'GOS',
    'game0':'DRG'
}

for (const i of myObject) {
    console.log(i);
    
}

// will throw an error stating :myObject is not iterable 
// Maps are iteratable for maps and not for objects (only for this method)

