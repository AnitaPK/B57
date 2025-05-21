import React from 'react'

const Button = (props) => {
    console.log("******",props)
  return (
    <button className='btn btn-primary' 
    onClick={()=>{console.log(props.event)}}
    >
      {props.eventName}
    </button>
  )
}

export default Button
