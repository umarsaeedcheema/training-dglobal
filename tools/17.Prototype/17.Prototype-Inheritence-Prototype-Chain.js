function Particle (){
    this.x = 100
    this.y = 99
    // this.show = function(){
    //     console.log(this.x, this.y)
    // }
}

// const train = new Particle()
// train.x++
// train.show()
// const bullet = new Particle()
// bullet.show()

// both train and bullet have their own function 

// we can have a single function for both of these objects by putting this function in the prototype

Particle.prototype.show = function(){
    console.log(this.x, this.y)
}

const train = new Particle()
train.x++
train.show()
const bullet = new Particle()
bullet.show()

// adding a function to this object 
Particle.prototype.speed = function(){
    console.log('The speed is')
}

train.speed()