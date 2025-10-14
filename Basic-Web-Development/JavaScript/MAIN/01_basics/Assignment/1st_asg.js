// WAP TO PRINT "TRUE" IF A NUMBER IS ONLY DIVISIBLE BY 3 AND 5 BUT NOT 10.

let num = 50
if(num % 3 == 0 && num % 5 == 0 && num % 10 != 0){
    console.log("TRUE")
}

// SWAP THE VALUES OF TWO VARIABLES WITHOUT USING THIRDONE

// let num1 = 10
// let num2 = 20

// [num1,num2] = [num2,num1]
// console.log(num1,num2)

// PRINT ALL EVENT NUMBER FROM 1 TO 49 USING FOR LOOP

let i = 1
for(i; i<=49; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

// WRITE A FUNCTION isprime() WHICH WILL RETURN "TRUE" IF THE NUMBER IS PRIME.

const isprime = (n) => {
    if(num < 2) return false
    
}