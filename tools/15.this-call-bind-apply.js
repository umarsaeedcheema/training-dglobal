// this- it refers to the iobject, by default it refers to the global object

// to attach some properties to the object these 3 methods are used

// call method 
// const address = { city: 'Lahore', area : 'Gulberg'}
// function print(name){
//     console.log('Name: '+ name, this.city, this.area)
// }

// print.call(address,'Umar' )
//give the object that you want to add things as first argument

// apply method 
// its lets you pass the arguments as an array 

// const address = { city: 'Lahore', area : 'Gulberg'}
// function print(name, age){
//     console.log(name + ', Age: ' + age + ', Address: ' + this.city + ', ' + this.area);
// }

// print.apply(address,['Umar', 24] )

// difference is that apply can take an array

// bind() method
// this returns a new function with the value bound to it


const address = { city: 'Lahore', area : 'Gulberg'}
function print(name, age){
    console.log(name + ', Age: ' + age + ',Address: ' + this.city + ', ' + this.area)
}
const bindAdress = print.bind(address)
bindAdress('Umar',22)
