
// This is the basic syntax of the switch statement
// switch (key) {     
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march" // you can also give it any value say an integer as well and write case 1 : ,case 2: ,

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
} // default is used when , none of the case conditions are met and default value is passed