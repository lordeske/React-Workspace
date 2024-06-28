import React from 'react'
import { Link } from 'react-router-dom'

const Navigacija = ({pretraga, setPretraga}) => {
  return (
    <nav className='Nav'>
      <form className='searchForm' onSubmit={(e)=> e.preventDefault()}> 
      <label htmlFor='pretraga'>Pretrazi objavu</label>
      <input id='pretraga' type='text' placeholder='Pretrazi objavu' value={pretraga} onChange={(e) => setPretraga(e.target.value)}/>


      </form>
      <ul>
        <li><Link to="/"> Pocetna </Link></li>
        <li><Link to="/sve-objave"> Sve objave </Link></li>
         <li><Link to="/opis"> O nama </Link></li>
      </ul>
    </nav>
  
  )
}

export default Navigacija
