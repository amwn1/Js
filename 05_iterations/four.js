const myObject = {
    js:"javascript",
    py:"python",
    cpp:"c plus plus"
}

// to interate the objects we use the FORIN loop 

for (const key in myObject) {
    console.log(key);  // will give all the keys 
}

for (const key in myObject) {
    console.log(myObject[key]); // this will print all the values 
}

// this works on arrays as well 
// The difference between forof and forin is that forof taked defaule value in key value pair , whereas the for in prints keys
// NOTE : This doesnt works in maps 