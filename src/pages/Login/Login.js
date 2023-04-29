import React, { useState } from 'react'
import LoginChild from './LoginChild'

export default function Login() {
 const [marks,setMarks]=useState(10)
console.log("login marks: ",marks);
  return (
    <div>
      <h1>Props Managment</h1>
      <LoginChild marks={marks}/>
    </div>
  )
}
