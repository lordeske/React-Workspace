import React, { useContext } from 'react'
import Feed from './Feed'
import DataContext from '../context/dataContext'


const Pocetna = () => {

  const {rezultatPretrage,isLoading,fetchError} = useContext(DataContext);

  return (
    <main className='Home'>
      {isLoading && <p className='statusMesg'>Ucitavam objave</p>}
      {!isLoading&& fetchError && <p className='statusMess' style={{color : "red"}}>{fetchError}</p>}
      {!isLoading && !fetchError && (rezultatPretrage.length ? <Feed objava={rezultatPretrage}/> : <p className='statusMess'>Nema objava nastarnju</p>)}
    </main>
  )
}

export default Pocetna
