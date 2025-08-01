import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import noot from './assets/nootnoot_photo.png'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title />
    </>
  )
}

function Title(){
  return(
  <>
      <div className='flex flex-col justify-center items-center mb-10'>
        <img className='max-w-[5rem] aspect-square object-contain' src={noot}/>
        <h1 className='text-center'>noot & milk's</h1>
        <div className='bg-pink text-white rounded-lg w-full'>QPI Calculator</div>
      </div>
      
  </>)
}

export default Home
