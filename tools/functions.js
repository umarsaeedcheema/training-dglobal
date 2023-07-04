// function hoisting

// function second (){
//     console.log(hello())
// }

// function hello(){
//     return 'hello'
// }

// second()

//scope 
//block scope 

// function checkWeight(weight){
//     if (weight > 500){
//         var text = 'Body Builder'
//         console.log(text)
//     }
//     if (text){
//         console.log('here',text)
//     }
// }

// checkWeight(600)


// block scope and let

// let x = 100

// function change_100(){
//     if (true){
//        let x = 350
//         console.log(x)
//     }
//     console.log(x)
// }

// change_100()

// block scope and var
var x = 100

function change_100(){
    if (true){
       var x = 350
        console.log(x)
    }
    console.log(x)
}
// console.log(x)

change_100()
// Lexical Scope
// By definition lexical means independent meaning

let my_var = 'global var'

function change_var(){
    let my_var = 'inside func'
    console.log(my_var)
}

console.log(my_var)
change_var()


// Pure Functions:

let hundred = 100
let two = 2
function multiply (x,y){
    return x*y
}

let twoHundred = multiply(hundred,two)
// console.log(twoHundred)
// console.log(hundred)
// console.log(two)

// Higher Order Functions

// function multiplyBy(factor) {
//     return function(number) {
//       return number * factor;
//     };
//   }
  
//   const multiplyByTwo = multiplyBy(2);
//   console.log(multiplyByTwo(5)); // Output: 10
//   multiplyByTen = multiplyByTwo(10)
//   console.log(multiplyByFive)
  


// Closure
// function outerFunction() {
//     const outerVariable = 'Hello';
  
//     function innerFunction() {
//       console.log(outerVariable);
//     }
  
//     return innerFunction;
//   }
  
//   const closure = outerFunction();
//   closure(); // Output: Hello
  
  