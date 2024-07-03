import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../context/dataContext'

const Objava = ({obj}) => {

  

  return (
    <article className='post'>
      <Link to={`/objava/${obj.id}`}> 
        <h2>{obj.naslov}</h2>
        <p> Datum: {obj.datetime}</p>
      </Link>
      <p className='postBody'>{(obj.body).length <= 25 ? obj.body : `${(obj.body.slice(0,25))}...`}</p>
      



    </article>
  )
}

export default Objava
