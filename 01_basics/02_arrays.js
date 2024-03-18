const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // this will take the array as one object and not concatenate them

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); // this is the right way to merge two arrays , this method returns a new array

const all_new_heros = [...marvel_heros, ...dc_heros] // this here is the spread operator , this is prominently used in the industry

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] // if in this condition somehow 

const real_another_array = another_array.flat(Infinity) // use flat , and give the parameter to infinity (which will go ot thte last depth in the array)
console.log(real_another_array);



console.log(Array.isArray("Aman")) // op:> false
console.log(Array.from("Aman")) // Will convert it to the arrays
console.log(Array.from({name: "Aman"})) // interesting , cause this will result in an empty object []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // op:> [ 100, 200, 300 ]