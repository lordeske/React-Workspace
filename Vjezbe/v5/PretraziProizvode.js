import React from 'react'

function PretraziProizvode({pretraga, setNewPretraga}) {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label  htmlFor='pretraga'>Pretrazi</label>
        <input id='pretraga' type='text' role='seatchbox' placeholder='Unesi sta trazis' value={pretraga} onChange={(e) =>setNewPretraga(e.target.value)} />
    </form>
      
    
  )
}

export default PretraziProizvode
