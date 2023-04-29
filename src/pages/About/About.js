import React,{useState} from 'react'

export default function About() {
  const [mks,setMks]=useState([10,20,30])
 
  return (
    <div>
    <h1>About</h1>
    <h2>Case2 : collection of data(Array),managing using useState</h2>
    <br/><hr/><br/>
    <h2>Manual access of array</h2>
    <p>{mks[0]} </p>
    <p>{mks[1]}</p>
    <p>{mks[2]}</p>
    <br/><hr/><br/>
    <h2>Loop access</h2>
     {mks.map((item)=>(<p>{item}</p>))}

    </div>
  )
}
