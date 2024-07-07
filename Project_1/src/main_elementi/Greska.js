import React from 'react'
import { Link } from 'react-router-dom'

const Greska = () => {
  return (
    <main className='Missing'>
      <h2>Desila se greska</h2>
      <p>Stvarno je tuzno sto se to dogodilo</p>
      <Link to="/">Vrati se na pocetnu stranu</Link>
    </main>
  )
}

export default Greska
