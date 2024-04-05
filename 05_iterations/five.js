const coding = ['Aman','Nishu','Neelam','Rajesh']

// for each loop : it is an higher order loop
// It takes a function in the loop and give a name in the parameter 
coding.forEach( (name) => {
    console.log(name);
} )

// OP :
// Aman
// Nishu
// Neelam
// Rajesh

function printme(item){
    console.log(item)
}

// coding.forEach(printme); //This will still work

coding.forEach((item , index , arr) => {
    console.log(item,index,arr) 
} )

// multiple parameters provided here helps as well the first parameter is for items , followed by index and then array

//we will see about array of object
const mycoding = [
    {
        name:"Aman",
        age:21
    },
    {
        name:"Rishab",
        age:21
    },
    {
        name:"Divu",
        age:21
    }
]

mycoding.forEach((item) => {
    console.log(item.name);
})

// You can easily access them by using the above for loop 
