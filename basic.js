// define Variable 
/* 
var deposit = 500;
let deposit = 500;
const deposit = 500; */

// using Variable 
var deposit = 400;

// condition

if( deposit > 500){
    // Boro kina 
}
else if(deposit < 200 ){
    // choto Kina
}
else if(deposit == 500 ){
    // soman ki na
}
else if(deposit != 200 ){
    // soman na ki na
}
else if(deposit <= 200 ){
    // boro ba soman ki na
}
else if(deposit >= 200 ){
    // choto kimba soman kina
}
else{
    // Default Kno kaj  
}

//  Switch ta sikte hbe 

// array
// =>koita upadan ache array te  (array name. length);
// => array te index ache jeta dhore take pawa jai
// => array te kno kichu dhukaite hole (.push)krte hoi
//  => array te kno kichu delete krte pari (.pop)
//  => array's ar kno spacific index change o krte pari tar index dhore
// => shift unshift array 1st value delete ar push kranow jai
//  => array te knonow kichu na thakle tar index -1 hobe
const numbers = [45, 6587, 124, 45, 1, 365 ];
const numberCount = numbers.length;
numbers.pop();
numbers.push(111);
numbers[2];
// check array index
if(numbers.index(222) != -1){
    console.log("yessss find it")
}

if(numbers.includes(222)){
    console.log("Yeeeeeh I am find it")
}

// loop 
// while loop , for loop , for of => ache Abon jeta diye hoche kno array ar elements thakle ta ber krar jonnow lage

for(const number of numbers){
    // console.log(number)
}

// function 
function fullName(first,second){
    const name = first + ' ' +second;
}
fullName('Rahim', 'Ali');

// object

const bottle = {
    color: 'yellow',
    contain: 'water',
    price: 500
}