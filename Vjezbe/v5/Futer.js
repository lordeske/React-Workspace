import React from 'react'

const Futer = ({numberOfItems}) => {
  return (
    <footer>
      <p>Danasnja godina je:   {new Date().getFullYear()}</p>
      <p>{numberOfItems === 0 ? "Nema više proizvoda" : `Broj proizvoda na stanju je: ${numberOfItems}`}</p>
      </footer>
  )
}

export default Futer
