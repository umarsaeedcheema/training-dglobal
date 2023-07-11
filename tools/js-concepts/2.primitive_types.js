// primitive types in JS are value types

let name = 'umar'
let secondName = name

console.log(name)
console.log(secondName)
name = 'hamad'
console.log(name)
console.log(secondName)

// Non primitive types like arrays and objects are reference types

person1 = { name: 'umar', age: 22, movies: ['fast-X', 'inception']}
person1.movies.push('hello')
person2 = person1

console.log(person1)
person2.name = 'abcd'
console.log(person2)

// deep copy to create a new object on heap, creates a one level deep copy. 
// for all levels copy uses :  JSON.parse(JSON.stringify(obj));


let copyObj = JSON.parse(JSON.stringify(person1));
copyObj.name = 'aaaa'
copyObj.movies.push('interstellar')
console.log(copyObj)
console.log(person1)

// to check if properties of bith ref types are same, convert to string
let var1 = ['hi']
let var2 = ['hi']
console.log(var1 === var2)
console.log(JSON.stringify(var1) === JSON.stringify(var2))
