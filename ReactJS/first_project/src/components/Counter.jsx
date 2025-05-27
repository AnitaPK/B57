import React, { useState } from 'react'

const Counter = () => {
    // const count = 0;

    const [count, setCount] = useState(0)
    const[str, setStr] = useState('Hello')

    const increament = ()=>{
        // console.log("****")
        setCount(count+1)
        // count++;
    }
    const decreament = ()=>{
        setCount(count-1)
    }
  return (
    <div className='container'>
        <h1>{str} <button onClick={()=>{setStr('Byeee')}}> Click me to change Value</button></h1>

      <h2>{count}</h2>
      <button onClick={increament} className='btn btn-danger'>Increament</button>
      <button onClick={decreament} className='btn btn-success'>Decreament</button>
    </div>
  )
}

export default Counter
