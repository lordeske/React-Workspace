import React, { useContext } from 'react'
import DataContext from '../context/dataContext'
import { useStoreState } from 'easy-peasy'

const Futer = () => {

  const {fetchError, isLoading} = useContext(DataContext)
  
  const objava = useStoreState((state) => state.objava);

  return (



    <footer className='Footer'>
        
        {isLoading && <p> Cekamo ucitavanje</p>}
        {fetchError && !isLoading && <p>Greksa se desila</p>}
        
        {!fetchError && !isLoading && <p>{objava.length ? `Broj objava je: ${objava.length}`: "Nema objava na na stranici" }  </p>}
    </footer>
  )
}

export default Futer

