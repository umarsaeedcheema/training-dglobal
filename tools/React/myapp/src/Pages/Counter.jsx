import React, { useEffect } from 'react'
import { useState } from 'react';

const Counter = () => {
    
    const [time,setTime] = useState(0)
    
    // decrement interval 
    const decrement = () =>{
        if (time > 0){
            setInterval(() => {
                setTime(time => time-1)
            }, 1000);
        }
    }
    useEffect(()=>{
        
         //empty setinterval 
        // clearInterval(myinterval);
    },[time])
    
  return (
    <div>Counter
        <input type='text' 
        onChange={(event)=>setTime(event.currentTarget.value)}
        />
        <button onClick = {decrement} >Start</button>         
        <div style ={{}}>
            {time}
        </div>
    </div>
  )
}

export default Counter