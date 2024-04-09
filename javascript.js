// 1. Exercise add7//

let n = 7;
function add7(n){
    return n + 7;
}
console.log(add7(n));


// 2. Exercise multiply//

let x = 5;
let y = 8;

function multiply(x,y){
    return x * y;
}

console.log(multiply(x,y));


// 3. Exercise capitalize //

let firstLetter = "hoLa Mundo";

function capitalize(firstLetter){
    return firstLetter.charAt(0).toUpperCase() + firstLetter.slice(1).toLowerCase()
   
}
console.log(capitalize(firstLetter));


//4. Exrcise lasLetter //

let stringlastLetter = "abcd";

function lastLetter(string){
    return stringlastLetter.slice(string.length-1);
}
console.log(lastLetter("abcd"));