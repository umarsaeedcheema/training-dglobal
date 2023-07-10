async function todo () {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        console.log(response.status)
    //     const response = fetch('https://jsonplaceholder.typicode.com/todos/1');
    //     response.then((data)=>{
    //         console.log(data.status);

    //    })

    }
    catch (err) {
        console.log(err);
    }

}
// todo().then((data)=>{
//     console.log(data)
// })
// 

todo()
// todo().then((res)=> console.log(res))





// x=3 + "3"
// console.log(x)

// z = Number('\t3')
// console.log( typeof(z))


