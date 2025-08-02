import { useState } from 'react'

import Title from '../components/Title'
import Label from '../components/Label'

function Daydream() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title name="Daydream Calculator" />
      <div className='justify-center items-center'>
        <Label text='Your QPI' bg='pink' />

      </div>


    </>
  )
}

export default Daydream