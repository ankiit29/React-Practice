import React, { useState } from 'react'

function App() {
  const [color , setcolor] = useState("black")
  return (
    <div className='flex justify-center w-full h-screen duration-200' style={{backgroundColor:color}}>
        <div className=' flex absolute bottom-12 bg-white justify-center  px-2 py-2 gap-4 rounded-full'>
            <button className='bg-red-600 px-2 py-2 rounded-full outline-none text-white' onClick={()=>setcolor('red')}>Red</button>
            <button className='bg-blue-600 px-2 py-2 rounded-3xl outline-none text-white' onClick={()=>setcolor('blue')}>Blue</button>
            <button className='bg-green-600 px-2 py-2 rounded-3xl outline-none text-white' onClick={()=>setcolor('green')}>Green</button>
            <button className='bg-orange-600 px-2 py-2 rounded-3xl outline-none text-white' onClick={()=>setcolor('orange')}>orange</button>
        </div>
    </div>
  )
}

export default App