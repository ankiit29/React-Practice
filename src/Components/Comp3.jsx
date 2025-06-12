import React from 'react'
import { useContext } from 'react'
import MyContext from './MyContext';
const Comp3 = () => {
  const {value , setValue} = useContext(MyContext);

  return (
    <div>
      <h1 style={{color:"white"}}>Comp3</h1>
      <p style={{color:"white"}}>{value}</p>
      <button onClick={() => setValue("Updated from Comp3")}>Update Value</button>
    </div>
  )
}

export default Comp3
