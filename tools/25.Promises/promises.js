// version of setTimeout that returns a promise

function PrintHello(data){
    console.log(data)
}

// PrintHello('Hello World')

function delay (time){
    // setTimeout(PrintHello(data),time)
    return new Promise((res,rej)=>{
        setTimeout(res,time)

    })
}

delay(1000).then(()=>{
    PrintHello('Hi')
    
}).catch((err)=>{
    console.log(err)
})


// ES8 async await 

async function dealyES8 (time){
    // this function returns a promise
    await delay(time) 
    return ;

}
