//* ====================================
//* Values and Variable in JavaScript
//* ====================================

//* In JavaScript, values and variables are fundamental concepts that form the basis of programming.

//* Values:  A value is a piece of information that a program can work with. It can be a number, text, true/false, or more complex data.

//* Variables: A variable is a container that holds a value. It has a name and can be used to store and manipulate data in a program.

console.log("welcome to best js course ");

var myAge = 30;
console.log(myAge);

//! Let's test
var my_firstName = "John";
//? Explanation: This is a valid variable name. It starts with a letter, and the subsequent characters include letters, numbers, and an underscore. Follows JavaScript naming rules.

var _myLastName$ = "Doe";
//? Explanation: This is a valid variable name. It starts with an underscore, and the subsequent characters include letters, numbers, and a dollar sign. Follows JavaScript naming rules.

// var 123myAge = 25;
//? Explanation: This is not a valid variable name. It starts with a number, which is not allowed as per JavaScript naming rules. Variable names cannot begin with a digit.

var $cityName = "New York";
//? Explanation: This is a valid variable name. It starts with a dollar sign, and the subsequent characters include letters. Follows JavaScript naming rules.

// var my@Email = "john@example.com";
//? Explanation: This is not a valid variable name. It includes the special character '@', which is not allowed in JavaScript variable names. Only letters, numbers, underscores, and dollar signs are allowed.

var name = "Rajkishore Behera";
var age = 19;
var isStudent = true;
var height = 5.9; // in feet
var subjects = ["Math", "Science", "English"]; // array of subjects
var address = {
  street: "123 Main St",
  city: "Bhubaneswar",
  state: "Odisha"
}; // object representing an address
console.log(name, age, isStudent, height, subjects, address);

//? Explanation: This code declares several variables with different data types. It includes a string, a number, a boolean, a float, an array, and an object. Each variable is assigned a value that can be used later in the program.