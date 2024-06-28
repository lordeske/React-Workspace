import React from 'react'
import Feed from './Feed'

const Pocetna = ({objava}) => {
  return (
    <main className='Home'>
      {objava.length ? (
        <Feed objava = {objava} ></Feed>
      ) : 
      (<p style={{marginTop : "2rem"}}>
        Nema objava za prikaz
      </p>)}
    </main>
  )
}

export default Pocetna
