import React from 'react'
import Comp2 from './Comp2.jsx'
import { useState} from 'react'
import MyContext from './MyContext.jsx'

const Comp1 = () => {
    const [value, setValue] = useState("Hello from Comp1");
  return (
    <MyContext.Provider value={{value,setValue}}>
      <Comp2/>
    </MyContext.Provider>
  )
}

export default Comp1
