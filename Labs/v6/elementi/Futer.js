import React, { useContext } from 'react'
import DataContext from '../context/dataContext'

const Futer = () => {

  const {objava , fetchError, isLoading} = useContext(DataContext)


  return (



    <footer className='Footer'>
        
        {isLoading && <p> Cekamo ucitavanje</p>}
        {fetchError && !isLoading && <p>Greksa se desila</p>}
        
        {!fetchError && !isLoading && <p>{objava.length ? `Broj objava je: ${objava.length}`: "Nema objava na na stranici" }  </p>}
    </footer>
  )
}

export default Futer

