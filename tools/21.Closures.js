// Functions dont have memory, they get deleted after they run, their local context is removed.
// Is there a way that we can give memory to functions ? 


// a function inside a function 
// it returns a function 


function outerFunction(outerParam) {
    function innerFunction(innerParam) {
      console.log(`Outer parameter: ${outerParam}`);
      console.log(`Inner parameter: ${innerParam}`);
    }
    return innerFunction;
  }
  
  const closureExample = outerFunction('Hello');
  closureExample('World');
//   when outerfunc is called it returns innerfunc without executing it.

// closure
// closure is when a function can access variables outside of it.

// function createCounter(){
//     let counter = 0
//     const myFunction = function (){
//         counter = counter + 1
//         return counter
//     }
//     return myFunction
// }

// const increment = createCounter()
// const c1 = increment()
// const c2 = increment()
// const c3 = increment()

// console.log('counters', c1,c2,c3)


// closures

function wrapValue(n){
    let local = n
    return () => local
}

let wrap1 = wrapValue(1)
let wrap2 = wrapValue(2)
console.log(wrap1())
console.log(wrap2())

