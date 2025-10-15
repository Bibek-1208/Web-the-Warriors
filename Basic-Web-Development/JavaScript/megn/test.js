
/*              //number is divisible by 3 and 5 but not 10
let num = 15;

if (num % 3 === 0 && num % 5 === 0 && num % 10 !== 0) {
  console.log(true);
} else {
  console.log(false);
} */








/*                    //swapping the number using 2 method
let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log("After swapping: a =", a, ", b =", b);  */

/*
let a = 5;
let b = 10;
[a,b]=[b,a];
console.log(a,b); */











/*     //printing even nuber to 50
for (let i = 1; i <= 49; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
} */








  /*      //printing table of 10
for(let i =1; i<=12; i++){
    console.log(`10 * ${i} = ${10 * i} `);
}


*/






/*                  //    checkin prime number
function isPrime(num) {
  if (num <2 ) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}


console.log(isPrime(2));
console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(1));    */







/*            // checking number of times function calling
function createCounter() {
  let count = 0;

  return function() {
    count++;
    console.log(`Function called ${count} time(s)`);
    return count;
  };
}

const counter = createCounter();


counter();
counter();
counter();  */









/*                     //push and pop array using loop
let oddNumbers = []; 

for (let i = 99; i >= 1; i--) {
  if (i % 2 !== 0) {
    console.log(i);
    oddNumbers.push(i);
   
  }
}

console.log("All odd numbers stored in array:");
console.log(oddNumbers)

// Pop last 5 numbers
for (let j = 1; j <= 5; j++) {
  oddNumbers.pop(j);
}

console.log("Array after popping last 5 numbers:");
console.log(oddNumbers);  */







/*               //vowelchecker
function count(str){
  const vowel = "aeiouAEIOU";
  let c = 0;
  for(let i = 0; i< str.length; i++){
  if(vowel.includes(str[i])){
    c++;
  }
  }
  return count;
}

function countvowel(str) {
    return str.match(/[aeiou]/gi)?.length || 0;
}

console.log(countvowel("BIBEK"));*/





