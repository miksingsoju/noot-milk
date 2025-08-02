import { useState } from 'react'

import Calculator from '../assets/Calculator.png'
import Checklist from '../assets/Checklist.png'

import Title from '../components/Title'
import Card from '../components/Card'


function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <Title name="one-stop calculator" />
        a website for calculating miks <br /> 
        and amiel's dream life.
      </section>
      <hr className='mb-5'/>

      Our Projects
      <section className='flex flex-row justify-center flex-wrap'>
        
        <Card name='QPI Calculator' img={Calculator} link="/QPI"/>
        <Card name='Day Dreaming' img={Checklist} link="/DayDream"/>
      </section>
      
    </>
  )
}

export default Home
