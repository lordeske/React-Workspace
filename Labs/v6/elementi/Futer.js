import React from 'react'

const Futer = ({objava , fetchError, isLoading}) => {
  return (
    <footer className='Footer'>
        
        {isLoading && <p> Cekamo ucitavanje</p>}
        {fetchError && !isLoading && <p>Greksa se desila</p>}
        
        {!fetchError && !isLoading && <p>{objava.length ? `Broj objava je: ${objava.length}`: "Nema objava na na stranici" }  </p>}
    </footer>
  )
}

export default Futer

