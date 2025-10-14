//* ============================
//* Data Types Section my work
//* ============================

const { jsx } = require("react/jsx-runtime")

// var - Global Declaration/ it's a host in a file, mens every one can use that.

var value1 = 1
{
    console.log(value1)
}

{
    var declar1 = 10
}
console.log(declar1)

// let
let value2 = 2
{
    console.log(value2)
}

{
    let declar2 = 20
    console.log(declar2)
}
// console.log(declar2)

// it shows the error because let it a block level veriable, only we can call it in block it it defined in a block.

// const
const value3 = 3
{
    console.log(value3)
}

{
    const declar3 = 30
    console.log(declar3)
}
// console.log(declar3)

// it also showes the same error just because it is alos a block level declaration.

// number
let myNum = 24
console.log(myNum)
console.log(typeof myNum)

// string
let myName = "RAJ"
console.log(myName)
console.log(typeof myName)

// boolean
let isSunset = true
console.log(isSunset)
console.log(typeof isSunset)

// undefined
let undef
console.log(undef);
console.log(typeof undef)

// object
let memories = null
console.log(memories)
console.log(typeof memories)

// bigint
let bigNum = 4546654323245655321133454543243543n
console.log(bigNum)
console.log(typeof bigNum)

let mySymbol = Symbol("sad")
console.log(mySymbol)
console.log(typeof mySymbol)

let str = 10
console.log(str)
console.log(typeof str)
console.log(typeof String(str))

