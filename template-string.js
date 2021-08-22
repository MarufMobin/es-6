/* 
const priya = 'Asif Akbar';
const meye = "Meye tumi ki dukkho chino";
const kobita = `Kobita tumi sopno charini`;

const multiLine = ' this is old multiline'+
'this is Another line comment'+
'this is Anoter One line comment';

// console.log(multiLine)

const multiLineNew = `this is New line also use multi
lien comment type cod 
using backTick and 
some Number of People called carrot`;
console.log(multiLineNew); */


//  using old way to concatination
/* 
const firstName = "Maruf";
const lastName = "Mubin";
const fullName = firstName + " " + lastName;
console.log(fullName); */

// Using update way to concatination
/* 
const firstName = "Maruf";
const lastName = "Mubin";
const fullName = `${firstName} ${lastName}`;
console.log(fullName);
 */
const friends = ['abul', 'babul', 'kabul', 'sabul'];
const count = 5;
const old =  `<h3 class="friend-name"> Friend-5<h3>`;
const old2 = '<h3 class="friend-name"> Friend-' + count + '<h3>';
const new1 = `<h3 class="friend-name"> Friend-${friends.length}<h3>`;

const fistName = 'Mamun';
const lastName = 'Chowdhury';
const fullOld = fistName + " " + lastName;
const fullNew  =`This person Name is : ${fistName} ${lastName}. Has Money ${friends.length * 500 }.He lives in Dhaka`;
console.log(fullNew);