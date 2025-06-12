import React from 'react'
import { useParams } from 'react-router-dom'
const Person1 = () => {
    const { id } = useParams();
  return (
    <div>
     <h1> hello i am person {id} and i am a software engineer</h1>
    </div>
  )
}

export default Person1
