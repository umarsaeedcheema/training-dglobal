// Example 1 

// console.log('hi')

// setTimeout(()=>{
//     console.log('there')
// },0)

// console.log('ABCD')

// Example 2 

// function greet(name) {
//     console.log(`Hello, ${name}!`);
//   }
  
//   function greetAndGreetAgain(name) {
//     console.log("First greeting:");
//     greet(name);
//     console.log("Second greeting:");
//     greet(name);
//   }
  
//   function main() {
//     console.log("Starting the program...");
//     greetAndGreetAgain("Alice");
//     console.log("Program complete.");
//   }
  
//   main();

// Example 3
// console.log("Start");

// setTimeout(() => {
//   console.log("Callback 1");
// }, 2000);

// setTimeout(() => {
//   console.log("Callback 2");
// }, 1000);

// console.log("End");

// microtask and macro task 
// micro task has a higher priority than a macro task
//promises lie in micr-task queue

// console.log('Starting 1,2,3...')

// setTimeout(()=>{
//     console.log('Set timeout function ')
// },0)

// function returnPromise (){
//     return new Promise((res, rej)=>{
//         // rej('rejected')
//         try {
//             const text = 'resolved'
//             res(text)
//         } catch (error) {
//             const err = 'Error'
//             rej(err)
//         }
//     })
// }

// returnPromise().then(data => console.log(data))
// .catch(err => console.log(err))
// .finally(()=>console.log('All resolved'))

// console.log('Ending 3,2,1...')

// // Async / Await 
// Promise.resolve('Hello').then(data =>console.log(data))

// //using async 
// async function greet(){
//     return 'Hello 2'
// }


// // console.log(data)
// greet().then((data)=> console.log(data))




function delay(milliseconds) {
    return new Promise((resolve, reject) => {
        console.log('before')
      setTimeout(() => {
        resolve('Delay complete');
      }, milliseconds);
    });
  }
  
  // Usage
  console.log('Start');
  delay(2000)
    .then((result) => {
      console.log(result);
      console.log('Promise resolved');
    })
    .catch((error) => {
      console.error(error);
    });
  