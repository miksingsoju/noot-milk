import { useState } from 'react'
import './App.css'

import Noot from './assets/nootnoot_photo.png'
import Calculator from './assets/Calculator.png'
import Checklist from './assets/Checklist.png'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <Title />
      </section>
      <hr className='mb-5'/>

      Our Projects
      <section className='flex flex-row'>
        <ProjectCard name='QPI Calculator' img={Calculator}/>
        <ProjectCard name='Day Dreaming' img={Checklist}/>
        <ProjectCard name='Day Dreaming' img={Checklist}/>
        <ProjectCard name='Day Dreaming' img={Checklist}/>
        <ProjectCard name='Day Dreaming' img={Checklist}/>
        <ProjectCard name='Day Dreaming' img={Checklist}/>

        


      </section>
      
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

function Title(){
  return(
  <>
      <div className='flex flex-col justify-center items-center mb-10'>
        <h1 className='text-center'>noot & milk's</h1>
        <div className='bg-pink text-white rounded-lg w-full mb-5'>one-stop calculator</div>
        <img className='w-m aspect-square object-contain mb-5' src={Noot}/>
        a website for calculating miks <br /> 
        and amiel's dream life.
      </div>
      
  </>)
}

function ProjectCard({name, img}){
  return(
    <>
      <div className='pb-5 w-50 mx-5 mt-5 border-5 border-nootblue rounded-lg aspect-square justify-center items-center'>
        <img className='mx-auto items-center aspect-square object-contain' src={img} />
        {name}
      </div>
    </>
  )
}

export default Home
