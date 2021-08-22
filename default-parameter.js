function add(num1, num2 = 0 ){

    // option One 
    // num2 = num2 || 0; //==> jodi 1ta parameter pass kre tobe to undifine dekhabe tai hoi if diye condition use kre ai error handle krte hoi nai le ( num2 = num2 || 0 ) diye likte hoi

    /* 

    // Option two

    if( num2 == undefined ){
        num2 = 0;
    } */
    const total = num1 + num2;
    return total;
}
const result = add(16,100);
console.log(result)

/* 
function fullName (firstName , lastName = "Chowdhury"){
    const fullName = firstName + " " + lastName;
    return fullName;
}

console.log(fullName('Maruf',"Mubin"))
console.log(fullName('Maruf')) */