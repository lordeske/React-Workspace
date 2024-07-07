import React from 'react'
import { FaLaptop, FaMobileAlt, FaTabletAlt } from 'react-icons/fa'
import useVelicinaProzora from '../hooks/useVelicinaProzora';


const Zaglavlje = ({naslov}) => {

  const {width} = useVelicinaProzora()

  return (
    <header className='Header'>
      <h1>{naslov}</h1>
      {width < 768 ? <FaMobileAlt/> 
        : width < 992 ? <FaTabletAlt/> 
          : <FaLaptop/>}
    </header>
  )
}

export default Zaglavlje

