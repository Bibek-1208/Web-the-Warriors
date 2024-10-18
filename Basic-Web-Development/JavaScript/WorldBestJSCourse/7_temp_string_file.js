const str = "Hello World!";
console.log(str);
console.log(str.length);
console.log(str.indexOf("World"));

//* Converting string to array
let strArr = Array.from(str);
console.log(strArr);

//* Find Index Number
let strMap = strArr.map((curElem, index) =>
    `${curElem} - ${index}`
);
console.log(strMap);

// let intro = "My name is 'Raj' and i am a "CSE" student"; X
let intro = "My name is \'Raj\' \n & i am a \"CSE\" student.";
console.log(intro);

let text = "Hello Javascript, welcome to our world best Javascript course";

let index = text.indexOf("Javascript");
console.log(index);

let index1 = text.lastIndexOf("Javascript");
console.log(index1);

let index2 = text.lastIndexOf("Javascript", 40);
console.log(index2);

//* search()
let index3 = text.search(/javascript/i);
console.log(index3);

//* match()
let index4 = text.match("Javascript");
console.log(index4);

let index5 = text.match(/javascript/gi);
console.log(index5);

//* matchAll()
let index6 = text.matchAll("Javascript");
console.log(index6);

//* spread operator
console.log(...index6);

