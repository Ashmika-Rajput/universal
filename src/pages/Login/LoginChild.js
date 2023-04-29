import React from 'react'

export default function LoginChild(props) {
   console.log("login child marks :",props.marks);
  return (
    <h1>
       {props.marks}
    </h1>
  )
}
