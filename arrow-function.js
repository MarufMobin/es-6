// function declaration
function add(number1 , number2){
    // const result = number1 + number2;
    // return result;
    return number1 + number2;
}

const result = add( 20 , 10);
console.log(result)

// Using function with Name ==> function Expression
const addTwo = function addTwo(number1 , number2){
    return number1 + number2;
}

// Using function withOut Name 
// ==> function expression ( Name hin thatsWhy Called Anonymous function )
// that function call Anonymous Function mane Name Chara
const addThree = function(number1, number2){
    return number1 + number2;
}
console.log(addThree(20 , 15));
console.log(addTwo(12 , 15));
// document.getElementById('my-button').onclick = function handleEvent(){

// }



// Arrow Function 

const add4 = (number1 , number2 ) => number1 + number2;

const sum = add4(50, 80);

console.log(sum)