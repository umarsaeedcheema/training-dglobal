// // Currying
// Lazy compilation , Functional Programming 

// function add(x,y){
//     return x+y
//   }


// function add(x) {
//     return (y)=> {
//       return x + y;
//     };
//   }
  
//   const addTwo = add(2);
//   console.log(addTwo(3)); // Output: 5

// compose and pipe do similar thing but are reversed in order

// result = fn (input)


// functions.reduce((a,b)=> (arg)=> (b,a(arg)))

const pipe = (...functions) => (input) =>
  functions.reduce((result, fn) => fn(result), input);

const addTwo = (x) => x + 2;
const multiplyByThree = (x) => x * 3;
const subtractTen = (x) => x - 10;

const transform = pipe(addTwo, multiplyByThree, subtractTen);
console.log(transform(5)); // Output: 11


// import R from 'ramda';
const R = require('ramda') 

f1 = R.compose (addTwo,multiplyByThree,subtractTen)
console.log('f1(5): compose ', f1(5))

f2 = R.pipe (addTwo,multiplyByThree,subtractTen)
console.log('f2(5): pipe ', f2(5))




  
  