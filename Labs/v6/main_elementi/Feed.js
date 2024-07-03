import React, { useContext } from 'react'
import Objava from './Objava'
import DataContext from '../context/dataContext'


const Feed = ({objava}) => {


  return (
    <>
        {objava.map( obj => 
            (
                <Objava key={obj.id} obj = {obj} ></Objava>
            )
        )}
    
    
    </>
      
  )
}

export default Feed
