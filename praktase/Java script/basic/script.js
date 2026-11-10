// Constant, doesnt change (also these are variales)//
let myName = "Griffin";
//lets it change later//
let myAge = 15;

console.log(myName);
console.log(myAge);

console.log("my name is " + myName + " and my age is " + myAge + ".")
//Reads left to right, if it starts as an interger, it will be an interger but if it starts as a string it will
// remain a string, to counteract this add perenthases and becasue of order of operations, perenthases are first so it will still add them like intergers//
console.log("The sum of my age + my age is " + myAge + myAge);
console.log(myAge + myAge + " is the sum of my age + my age"); 
console.log("The sum of my age + my age is " + (myAge + myAge));

function reveal() {
    //alert("Hello World!");//
    const mySpan = document.getElementById("name");
    console.log(mySpan);
    mySpan.textContent = "Griffin";
}






