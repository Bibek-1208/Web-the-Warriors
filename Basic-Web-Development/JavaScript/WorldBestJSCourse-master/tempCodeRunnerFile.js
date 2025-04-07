//* ====================================
//* Values and Variable in JavaScript
//* ====================================

console.log("welcome to my paradise");

var rollNo = 7023;
console.log(rollNo);

var name = "RAJ";
console.log(name);

//* ============================
//* Data Types Section
//* ============================

var num = 5;
console.log(num);
console.log(typeof num);

var myName = "RAJ";
console.log(myName);
console.log(typeof myName);

var available = false;
console.log(available);
console.log(typeof available);

var undefinedVariable;
console.log(undefinedVariable);
console.log(typeof undefinedVariable);

var nullValue = null;
console.log(nullValue);
console.log(typeof nullValue);

const bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);
console.log(typeof bigNumber);

const mySymbol = Symbol("description");
console.log(mySymbol);
console.log(typeof mySymbol);

//* ========== parseInt & parseFloat Section ==========

const myString = "42.5";
const myNumber = parseInt(myString);
console.log(myNumber);
console.log(typeof myNumber);

const myStrings = "42.5";
const myNumbers = parseFloat(myStrings);
console.log(myNumbers);
console.log(typeof myNumbers);


//* ============================
//* Data Types Section - part 2
//* ============================

//* ===================================
//*  EXPRESSIONS AND OPERATORS Section
//* ====================================

//* ===============================
//* Conditional statement Section
//* ===============================

//* ===============================
//* Function in JavaScript
//* ==============================

function hello() {
    console.log("Hello guys, how are you doing");
}
hello();

function sum(a, b){
    return a + b;
}
console.log("free space for IT - " + sum(5, 5));
console.log("free space for CL - " + sum(15, 50));

//* ========== Function expressions ==========

//? Named
var result  = function addition(a, b){
    console.log(a + b);
};
result(10, 10);

//? anonymous
var results = function (a, b){
    console.log(a + b);
}
results(10, 10);

// ! Question & answer
const calculator = (num1, num2, operator) => {
    let result;
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                return "Error: Division by zero";
            }
            return num1 / num2;
        default:
            return "Error: Invalid operator";
    }
}

// ? reverse a string
const isReverse = (str) => {
    let reverse = "";
    for (let char = str.length -1; char>= 0; char--){
        reverse = reverse + str[char];
    }
    return reverse;
}

// ? Palindrome Check
const isPalindrome = (str) => {
    let reverse = "";
    for (let char = str.length - 1; char >= 0; char--) {
        reverse += str[char];
    }
    return str === reverse ? true : false;
}
console.log(isPalindrome("mama"));