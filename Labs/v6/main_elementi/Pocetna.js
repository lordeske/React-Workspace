import React, { useContext } from 'react'
import Feed from './Feed'
import DataContext from '../context/dataContext'


const Pocetna = () => {

  const {objava,isLoading,fetchError} = useContext(DataContext);

  return (
    <main className='Home'>
      {isLoading && <p className='statusMesg'>Ucitavam objave</p>}
      {!isLoading&& fetchError && <p className='statusMess' style={{color : "red"}}>{fetchError}</p>}
      {!isLoading && !fetchError && (objava.length ? <Feed objava={objava}/> : <p className='statusMess'>Nema objava nastarnju</p>)}
    </main>
  )
}

export default Pocetna
