import Noot from '../assets/nootnoot_photo.png'
import {Link} from 'react-router-dom'

function Title({name}){
  return(
  <>  
  <Link to='/'>
   <div className='flex flex-col justify-center items-center mb-10'>
        <h1 className='text-center pb-3'>noot & milk's</h1>
        <div className='bg-pink text-white rounded-lg w-1/3 p-2 mb-5'>{name}</div>
        <img className='w-m aspect-square object-contain' src={Noot}/>
      </div>

  </Link>
     
        
      
  </>)
}

export default Title