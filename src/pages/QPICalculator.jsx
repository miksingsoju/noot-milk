import { useState } from 'react'

import Title from '../components/Title'
import Label from '../components/Label'

function Calculator() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title name="QPI Calculator" />
      <div className='justify-center items-center'>
        <Label text='Your QPI' bg='pink' />
        <Label text='Your QPI' bg='blue-300' />
        

      Hello
      </div>


    </>
  )
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

export default Calculator
