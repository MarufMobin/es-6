// Two parameter Using function
const sum = ( number1 , number2 ) => number1 + number2;
const result = sum( 20, 30 );


// console.log(result);

// Three parameter Using function
const amount = ( number1, number2, number3 ) => number1 + number2 + number3;
const amountOfResult = amount( 5, 7, 12 );


// console.log(amountOfResult)

// Multiply of three number 
const multiply = ( num1, num2, num3 ) => num1*num2*num3;
const multiNumber = multiply( 5 , 10, 2);


// console.log(multiNumber)


// given any number and output times of 5 & 10 times
const times = (number) => 5 * number;
const timesResult = times( 100 );

// console.log(timesResult)
const tenTimes = number => 10 * number;
const outputTenTimes = tenTimes(5);

// console.log(outputTenTimes);

// using arrow function with out parameter Value
const getName = () => 'Md Maruf Hussian Mobin';
const valueOfName = getName();

// console.log(valueOfName)

// multiLine arrow claculation 
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x * y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}

const total = doMath( 12, 5);
// console.log(total)


// Using Add event handler with in arrow function
document.getElementById('my-btn').addEventListener(event => {
    // Most inportant this
}) 


