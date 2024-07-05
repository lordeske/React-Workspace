import React, { useContext } from 'react'
import DataContext from '../context/dataContext'
import { useState } from 'react';
import api from '../api/objave';
import { useNavigate } from 'react-router-dom';

const KreirajObjavu = () => {

  const navigacija = useNavigate();

  const [imeObjave, setImeObjave] = useState("");   
  const [bodyObjave, setBodyObjave] = useState("");

  const {objava,setObjava} = useContext(DataContext)

  const handleKreiraj = async (e) => {
    e.preventDefault();
    const id = objava.length ? (parseInt(objava[objava.length - 1].id) + 1).toString() : 1; 
    const datum = new Date();
    const datum1 = datum.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
    const novaObjava = {
      id: id,
      naslov: imeObjave,
      datetime: datum1,
      body: bodyObjave
    };

    try {
      const response = await api.post("/objave", novaObjava);
      const objave2 = [...objava, response.data];
      setObjava(objave2);
      navigacija("/");
      setBodyObjave("");
      setImeObjave("");
    } catch (err) {
      console.log(`Greska koja se desila je ${err.message}`);
    }
  };

  return (
    <main className='NewPost'>
      <h2>Kreiraj novu objavu</h2>

      <form className='newPostForm' onSubmit={handleKreiraj}> 
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
