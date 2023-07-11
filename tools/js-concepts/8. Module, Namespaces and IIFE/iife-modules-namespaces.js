// Modules are a way to code. It is a reusbale piece of code
// IIFE
!function (){
    console.log('Hello')
}();

// function is executed without calling it.

// another way of doing this. 

(function() {
    console.log("I am an IIFE!");
}());

// IIFE is a module in ES5
// function expression

// (function(){
//     //do smth 
// })

// We can immediately invoke it by adding () after the function
(function(){
    //do smth 
})();


// Revealing Module

var singleton = function(){
    function printHello(){
        console.log('Hello')
    }
    // expose API
    return {
        func: printHello
    }
}()
singleton.func()

// constructor module 

var singleton = function(){
    function printHello(){
        console.log('Hello constructor')
    }
    // expose API
    return {
        func: printHello
    }
}
var module = new singleton()
module.func()

// AMD Async Module Def
// Used in browsers

// Common JS format
// Used in Node JS

// ES6 Module
// Export the function


// import {sayHello} from "./es6-module.mjs";
// sayHello()