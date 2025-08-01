import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import noot from './assets/nootnoot_photo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body className="flex flex-col items-center">
        <NavBar />
        <Title />
        
      </body>
      
      
    </>
  )
}
// this returns a label with rounded edges and background color
function Label({text, bg}){
  return (
    <div className={`text-white bg-${bg} rounded-lg px-4 py-2 inline-block`}>
      {text}
    </div>
  )
}

function NavBar(){
  return(
    <nav className="w-full sticky top-0 z-50 bg-white shadow-sm shadow-fuchsia-300 flex justify-center items-center p-4">
      <h1 className="text-lg sm:text-xl; md:text-2xl font-bold text-center">
        NOOT & MILK'S
      </h1>
    </nav>
  )
}

function Title(){
  return(
  <>
      <div className='flex flex-col justify-center items-center mb-10'>
        <img className='max-w-[5rem] aspect-square object-contain' src={noot}/>
        <h1 className='text-center'>noot & milk's</h1>
        <div className='bg-pink text-white rounded-lg w-full'>one-stop calculator</div>
      </div>
      
  </>)
}

export default App
