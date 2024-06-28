import React from 'react'

const KreirajObjavu = ({imeObjave, setImeObjave, bodyObjave,setBodyObjave , handleKreiraj}) => {
  return (
    <main className='NewPost'>
      <h2>Kreiraj novu objavu</h2>

      <form className='newPostForm' onSubmit={() => handleKreiraj}> 
        <label htmlFor='imeObjave'>Naziv objave</label>
        <input id='imeObjave' type='text' required placeholder='Unesi naziv objave' 
                value={imeObjave} onChange={(e) => setImeObjave(e.target.value)}></input>
        <label htmlFor='bodyObjave'>Teskt objava</label>
        <textarea id='bodyObjave' required placeholder='Unesi tekst objave' 
                value={bodyObjave} onChange={(e) => setBodyObjave(e.target.value)}></textarea>


        <button type='submit'> Kreiraj objavu </button>
      </form>
    </main>
  )
}

export default KreirajObjavu
