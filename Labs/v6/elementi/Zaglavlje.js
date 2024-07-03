import React from 'react'
import { FaLaptop, FaMobileAlt, FaTabletAlt } from 'react-icons/fa'
import { useContext } from 'react'
import DataContext from '../context/dataContext'


const Zaglavlje = ({naslov}) => {

  const {width} = useContext(DataContext);

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

