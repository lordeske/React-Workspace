import React from 'react'

const Futer = ({objava}) => {
  return (
    <footer className='Footer'>
        <p>{objava.length ? `Broj objava je: ${objava.length}`: "Nema objava na na stranici" }  </p>
    </footer>
  )
}

export default Futer

