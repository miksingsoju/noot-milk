import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import noot from './assets/nootnoot_photo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title />
      <div className='justify-center items-center'>
        <Label text='Your QPI' color='pink' />

      </div>

      
    </>
  )
}
// this returns a label with rounded edges and background color
function Label({text, color}){
  return (
    <div className={`text-white bg-${color} rounded-lg px-4 py-2 inline-block`}>
      {text}
    </div>
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

function Courses(){
  return(
  <>
  </>
  )
}

function YourQPI(){
  return(
    <>
    </>
  )
}

function CumulativeQPI(){
  return(
  <>
  </>
  )
}

export default App
