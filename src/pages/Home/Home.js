import React,{useState} from 'react'

export default function Home() {
  const [date,setDate]=useState(Date())

  setInterval(()=>{
    setDate(Date())
  },10)
  return (
    <div>
      <h1>Home</h1>
      <h2>Case1 : simple data management using useState</h2>
      <br/><hr/><br/>
      Current Date {date}
    </div>
  )
}
