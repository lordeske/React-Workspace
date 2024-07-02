import React from 'react'
import Feed from './Feed'

const Pocetna = ({objava , isLoading, fetchError,}) => {
  return (
    <main className='Home'>
      {isLoading && <p className='statusMesg'>Ucitavam objave</p>}
      {fetchError && <p className='statusMess' style={{color : "red"}}>{fetchError}</p>}
      {!isLoading && !fetchError && (objava.length ? <Feed/>)}
    </main>
  )
}

export default Pocetna
