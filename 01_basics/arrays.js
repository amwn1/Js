// const myArr = [1,2,3,4,true,'AMan'] // this is possible
// //Note : Arrays in js is resizable
// // There are no associative arrays in js
// // Arrays creates the shallow copies : Refernce are same thus changes will  be reflected , vice verca for deep copy

// const arr = new Array(1,3,4,1) // can be declared like this as well
// console.log(arr[0]); // 1

// // arr.push(8) // adds to the last
// // arr.pop() // pops the last
// // arr.unshift(7) // adds to the first , though not optimal
// // arr.shift() // pops the first , though not optimal 

// // some methods can give you answer in boolean 
// arr.includes(1)
// console.log(arr.indexOf(1));

// const newArr = arr.join()
// console.log(newArr); // will convert this into string comma seperated // OP:> 1,3,4,1

// SLICE AND SPLICE *********** IMP ******** 

const S_array = new Array(1,2,3,4,5,6,7)
console.log("A" , S_array)
// using slice here
const slice = S_array.slice(1,3)
console.log("SLICE",slice)

// using splice here

const splice = S_array.splice(1,3)
console.log("SPLICE",splice)
console.log(S_array);

// OP:>
// A [
//     1, 2, 3, 4,
//     5, 6, 7
//   ]
//   SLICE [ 2, 3 ]
//   SPLICE [ 2, 3, 4 ]
//   [ 1, 5, 6, 7 ]

// from the op we can see that the Slice function is storing the elements from range 1 - 2 whereas the splice function is taking a solice altering the 
// original array thus we get [1,5,6,7]


