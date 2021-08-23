// variable define
/* 
let priyoPerson = 'koolsum Begum';
priyoPerson = 'Momotaj Begum';

const hubby = 'Akber the Great'; */

// Default Parameter
/* 
function calculate( x, y, z = 0 ){
    return x + y + z;
} */

/* 
function calculate( x, y, z = 0 ){
    return x + y + z;
} */

// console.log(calculate(2,5))

// TEMPLATE STRING 
const hubby = 'Akber the Great';
const prioPerson = 'kulsum Begom';
function getName( fistName, lastName = 'Hussian'){
    return `${fistName} ${lastName}`;
}
const myPepole = `My Lovely person is ${hubby} and his full Name is ${getName('Akber')}.My Name is ${prioPerson}`;

// console.log(myPepole)

// Usign Arrow Function to concate two number also using tamplate string

const getName2 = ( firstName , lastName ) => `${firstName} ${lastName}`;
const result = getName2('Maruf', 'Mobin');
// console.log(result)

const fiveTimes = num => num * 5;
const fiveTimesResult = fiveTimes(5);
// console.log(fiveTimesResult)


// MultiLine Arrow Function Define 

const bigArrow = (number1, number2, number3) =>{
    const firstPart = number1 + number2;
    const secondPart = number2 * number3;
    const thirdPart = number1 / number3;
    const result = (firstPart + secondPart) * thirdPart;
    return result;
}


const multilineResult = bigArrow( 10, 5, 15 );
// console.log(multilineResult);

// spread Oparator 

const numOfArr = [ 25, 45, 64, 56, 49, 64, 56, 1 ];
const max = Math.max(...numOfArr);
const min = Math.min(...numOfArr);

console.log(max, min);




