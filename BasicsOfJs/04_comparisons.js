console.log("2" > 1);
console.log("02" > 1); // will give true for both

console.log(null>0); // false
console.log(null==0); // false
console.log(null >= 0); // true because (==) equality check will check whereas the comparison opertor ( <= or >=) will convert the null to 0
console.log(undefined == 0) // will give false

console.log("2" == 2 ) // true 
console.log("2" === 2 ) // false , also checks for the data type