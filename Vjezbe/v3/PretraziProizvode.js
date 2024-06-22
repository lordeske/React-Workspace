import React from 'react'

function PretraziProizvode() {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault}>
        <label  htmlFor='pretraga'>Pretrazi</label>
        <input id='pretraga' type='text' role='seatchbox' placeholder='Unesi sta trazis'/>
    </form>
      
    
  )
}

export default PretraziProizvode
