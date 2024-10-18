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

