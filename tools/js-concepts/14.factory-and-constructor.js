// factory functions are used to reduce code and resue code.
// factory and constructor are both ways to declare objects
function createCircle(radius){
    return {
        radius: radius,
        draw(){
            console.log('draw', radius)
        }
    }

}

// console.log(createCircle(2))
// const circle1 =  createCircle(2)
// circle1.draw()

// dynamic factory functions

function Address (param){
    var self = {};

    if (param === 'dev'){
        self = { 
            state: 'Colorado',
            saveToLog: function(){

            }
        }
    }else {
        self = {
            state : 'Colorado'
        }
    }
    return self
}

var devAddress = Address('dev')
var productionAddress = Address()

// console.log(devAddress)
// console.log(productionAddress)

// constructor function

function Circle(radius){
    this.radius = radius
    this.draw = function(){
        console.log('draw', radius)
    }
}

const circleObj = new Circle(2)
circleObj.draw()


const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// Expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// Expected output: 2
