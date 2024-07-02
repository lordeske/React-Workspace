import React from 'react'
import { FaLaptop, FaMobileAlt, FaTabletAlt } from 'react-icons/fa'


const Zaglavlje = ({naslov , width}) => {
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

