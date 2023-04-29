import React,{useState} from 'react'

export default function Register() {
  const [stu,setStu] =useState([{id:1,nm:'Suyash'},{id:2,nm:'Payal'}])
  return (
    <div>
    <h1>Register</h1>
    <h2>Case3 : collection of data(array of object),managing using useState</h2>
    <br/><hr/><br/>
    {stu.map((item)=>(
      <p>
        <p>id -- {item.id}</p>
        <p>nm -- {item.nm}</p> 
      </p>     
    ))}
   
    </div>
  )
}
