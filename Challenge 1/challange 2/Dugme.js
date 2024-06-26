import React from 'react'

function Dugme({setZahtjev , tekstDugmeta, zahtjev}) {
  return (
    <div>
        <button className={ tekstDugmeta == zahtjev ? "selektovan" : null }
         onClick={ () => setZahtjev(tekstDugmeta)}> {tekstDugmeta} </button>
        
    </div>
  )
}

export default Dugme
