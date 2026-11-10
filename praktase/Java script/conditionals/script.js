/* 
  =================================================================================
  JS Comparison Operators Lesson
  =================================================================================
*/

// > more than
let x = 7;
console.log (
    x > 10, x > 6
);

// >= more than or equal to
console.log(
    x>=10, x >=7
);

// < less than

console.log (
    x < 10, x < 6
);




// <= less than or equal to

console.log(
    x<=10, x <=7
);

// == equal to
console.log(
    7 == 7 
);

// != not equal to
console.log(
    x != 7
);

let y = "7"
// === strict equality
console.log(
    x=== 7, x === y
);

// !== strict not equal to
console.log(
    x !== y
);


console.log(
    "a" < "z"
);

let a = "time";
let b = "timing"

console.log(
    a > b, "e" > "i"
);
/*
### TASKS ###

1. Create two variables, called a and b. Assign the value 10 to a and 15 to b.
Check to see if a is more than b, log the answer to the console. 
    
)

2. Use the relevant comparison operator to identify whether a is equal to "10".
Log your answer to the console.

3. Check once again to see if a is equal to "10", this time making sure to check
against the type as well. Log your answer to the console.

4. If x is equal to "5" and y is equal to 6, what would the result of the following
be? x !== y?
True, because 5 (sting) does not equal 6 (interger)
*/

let ab = 10
let ba = 15

console.log(
    ab > ba
);

console.log(
    ab == "10"
);


console.log(
    ab === "10"
);





/* 
  =================================================================================
  JS Logical Operators Lesson
  =================================================================================
*/

// truthy and falsey values
// falsy's, False, undefined, null, ""(empty space), NaN, 0


// && logical and operator
// ! = not, && = and, || = or, ?? = Nullish coalescing
let c = 1
c = !c;
console.log(typeof a, a);

let e = 1;
let f = 0;

if(!f) {
    console.log("hello");
}

if  (e && !f) {
    console.log("hello")
}






// || logical or operator
if (e || f) {
    console.log("hello");
}

e || alert("this is ignored");

f || alert("this is alerted");

/*
### TASKS ###

1. Will the result of the following be true or false? */

let az = "Dev Dreamer";
let bz = '';

if (az || bz) {
    console.log("hello");
}
// true
/* 2. Will the result of the following be true or false? */

a = "Dev Dreamer";
b = '';

if (az && true && !bz) {
    console.log("hello")
}
// true
/* 3. Create the following variables a = -1; b = 1; create an if statement using a 
logical && operator. Will the expression evaluate to true? */
ay = -1
by = 1
if (ay && by) {
    console.log("hi");
}
//true

/* 
  =================================================================================
  JS if else Statements Lesson
  =================================================================================
*/

// if statements
//if(condition) {
// code to be run if condition is true
//}
if (true) {
    console.log("hi 1");
}

// if else statements
let game = "mario"

if (game === "sonic") {
    console.log("true");
} else {
    console.log("false");
}
// if else if else statements
let roll = 2;



if (roll === 4) {
    console.log("got 4");
} else if (roll === 5) {
    console.log("got 5");
} else {
    console.log("you roled less than 4")
}


//### TASKS ###

//1. What will the following code display in the console?

let num = 10 + 2;

if (num > 2 && num < 20) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}
// true

//2. Create a variable called user and set its value to 'employee'. Create an else if
//statement to first check if user is equal to guest, if this is true, console.log 
//'Login Denied', then check if user is equal to employee and console.log 
//'Successfully Logged in'.
let user = "employee"
if (user === "guest") {
    console.log("Login denied")
} else if (user === "employee") {
    console.log("Successfully Logged in")
}
//3. Assign your first name to a variable called myName and create an if statement to
//see if the number of letters in your name is more than 5, if it is alert "More than 
//5", next check to see if it is exactly 5 letters, if it is alert "Exactly 5 letters",
//if neither of these is true then alert "Less than 5 letters".

let myName = "Griffin"
let nameLength = myName.length
if (nameLength > 5) {
    alert("more than 5 letters")
} else if (nameLength < 5) {
    alert("less than 5 letters")
} else {
    alert("exactly five letters")
}




