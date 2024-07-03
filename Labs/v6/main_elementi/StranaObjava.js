import React, { useContext } from 'react'
import { useParams , Link } from 'react-router-dom'
import DataContext from '../context/dataContext';


const StranaObjava = () => {

  const {objava , handleObrisi} = useContext(DataContext)


  const { id } = useParams();

  const obj = objava.find(obj => (obj.id) == id)

  
  return (
    <main className='PostPage'>
      <article className='post'>
        {obj &&   /// AKO OBJAVA POSTOJI PRIKAZI JE
          
          <>
            <h2>{obj.naslov}</h2>
            <p className='postDate' > {obj.datetime}</p>
            <p className='postBody' > {obj.body}</p>
            <button onClick={()=> handleObrisi(obj.id)} className='deleteButton'>Obrisi ovu objavu</button>
            <Link to={`/uredi-objavu/${obj.id}`}><button className='editButton'> Uredi objavu</button> </Link>
          </>
          
          }


          {
            !obj &&    /// AKO NEMA TE VISE OBJAVE!!! 
            
            <>
              <p style={{marginTop : "2rem"}}>Ova objava vise dostupna</p>
              <Link to="/">Vrati se na pocetnu</Link>
            </>
          }
      </article>
    </main>
  )
}

export default StranaObjava
