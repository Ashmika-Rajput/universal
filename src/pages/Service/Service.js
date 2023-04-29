import React,{useState} from 'react'

export default function Service() {
  const [stu,setStu] =useState({id:1,nm:'Suyash'})

  return (
    <div>
    <h1>Service</h1>
    <h2>Case2 : collection of data(Object),managing using useState</h2>
    <br/><hr/><br/>
    <h2>Manual access </h2>
    <p>student id : {stu.id} </p>
    <p>student name: {stu.nm}</p>
   
    <br/><hr/><br/>
    <h2>Loop access</h2>
   {Object.keys(stu).map((k)=>(
      <p>{stu[k]}</p>
   ))}

    </div>
  )
}
