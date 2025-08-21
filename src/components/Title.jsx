import Noot from '../assets/nootnoot_photo.png'
import {Link} from 'react-router-dom'

function Title({name}){
  return(
  <>  
  <Link to='/'>
   <div className='flex flex-col justify-center items-center mb-10  '>
        <h1 className='text-center pb-3'>noot & milk's</h1>
        <div className='bg-pink text-white rounded-lg  lg:w-1/3 sm:w-fit-content  p-5 mb-5  '>{name}</div>
        <img className='w-m aspect-square object-contain hover:scale-105 duration-300' src={Noot}/>
      </div>

  </Link>
     
        
      
  </>)
}

export default Title