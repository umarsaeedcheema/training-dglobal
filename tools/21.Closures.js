// a function inside a function 
// it returns a function 


let val = 8

function multiply(){
    function multipleByTwo(x){
        return x*2
    }
    return multipleByTwo
}

let mult = multiply()
let val_16 = mult(val)
let val_32 = mult(val)
console.log(val_16,val_32)

// this is an example of function inside a function 

// this is not an example of closure, it creates a local execution context which is temporary

// closure
// closure is when a function can access variables outside of it.

function createCounter(){
    let counter = 0
    const myFunction = function (){
        counter = counter + 1
        return counter
    }
    return myFunction
}

const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()

console.log('counters', c1,c2,c3)
