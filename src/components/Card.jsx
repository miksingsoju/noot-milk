import { Link } from 'react-router-dom'

function Card({name, img, link}){
  const cardContent = (
     <div className='pb-5 w-50 mx-5 mt-5 border-5 border-nootblue rounded-lg aspect-square justify-center items-center'>
        <img className='mx-auto items-center aspect-square object-contain' src={img} />
        {name}
      </div>
  )
  // this card returns a link if a link is provided
  return link ? <Link to={link}>{cardContent}</Link> : cardContent
}

export default Card