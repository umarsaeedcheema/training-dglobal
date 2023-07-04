async function todo () {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        console.log(response.status);
    }
    catch (err) {
        console.log(err);
    }

}
todo()





// x=3 + "3"
// console.log(x)

// z = Number('\t3')
// console.log( typeof(z))


