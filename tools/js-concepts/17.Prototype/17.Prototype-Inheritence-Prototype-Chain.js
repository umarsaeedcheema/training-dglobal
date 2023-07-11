function Particle (){
    this.x = 100
    this.y = 99
    this.show = function(){
       console.log(this.x, this.y)
    }
}

const train = new Particle()
train.x++
train.show()
const bullet = new Particle()
bullet.show()


// both train and bullet have their own function 

// we can have a single function for both of these objects by putting this function in the prototype

// Particle.prototype.show = function(){
//     console.log(this.x, this.y)
// }

// function car(){
//     Particle.call(this)
// }

// one way to make both prototypes same is to do this 
// car.prototype = Particle.prototype

// but.....
// this overrides the Particle class

// to base Car on Particle we do this 

// car.prototype = Object.create(Particle.prototype)

// but....
// this doesnt have its own constructor 
// car.prototype.constructor = car

// let Car = new car()
// const train = new Particle()
// train.x++
// train.show()
// const bullet = new Particle()
// bullet.show()


// car.prototype.show = function(){
//     console.log('This is car')
// }

// Car.show()
// bullet.show()

// console.log(train)
// console.log(Car)


// adding a function to this object 
// Particle.prototype.speed = function(){
//     console.log('The speed is')
// }

// train.speed()