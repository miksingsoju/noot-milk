import { useState } from 'react'

import Title from '../components/Title'
import Label from '../components/Label'

import Add from '../assets/add_circle.svg'

function Calculator() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title name="QPI Calculator" />
      <div className='gap-5 flex flex-row justify-center items-center'>
        <Courses />

        <div className='gap-5 flex flex-col flex-1'>
          <YourQPI />
          <CumulativeQPI />
        </div>
        
      </div>
    </>
  )
}

function Courses(){
  return(
  <>
  <div className='py-5 justify-center w-3/5 mx-10 border-5 border-blue-300'>

  <div className='mx-10 gap-5 flex flex-row'>
    <button className='gap-2 flex flex-row bg-blue-300 hover:bg-blue-500 text-white px-5 py-2'>
    <img src={Add} /> Add Course </button> 
    <button className='bg-blue-300 hover:bg-blue-500 text-white px-7 py-2'> Reset </button>  

  </div>
   

    <div className='my-10 justify-center flex flex-row gap-10'>
      <Label text='Course Code' bg='blue-300' />
      <Label text='Letter Mark' bg='blue-300' />
      <Label text='No. of Units' bg='blue-300' />
    </div>




  </div>
  </>
  )
}

function YourQPI(){
  return(
    <>
      <div className='text-pink bold border-5 py-5 border-pink'>
        <Label text='Your QPI' bg='pink' />
        <h1> 4.00</h1>

      </div>
    </>
  )
}

function CumulativeQPI(){
  return(
  <>
    <Label text='Cumulative QPI' bg='pink' />

    <div className='py-5 border-5 border-pink'>
      <Label text='Desired QPI' bg='pink' />
              <h1> 4.00</h1>

    </div>

    <div className='py-5 border-5 border-pink'>
      <Label text='Minimum QPI' bg='pink' />
              <h1> 4.00</h1>

    </div>

    <div className='py-5 border-5 border-pink'>
      <Label text='Units Left to Take' bg='pink' />
    </div>
  </>
  )
}

export default Calculator
