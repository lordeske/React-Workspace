import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DataContext from '../context/dataContext';
import api from '../api/objave';

const UrediObjavu = () => {

  const navigacija = useNavigate()
  const [editIme, setEditIme] = useState("");  
  const [editBody, setEditBody] = useState("");

  const handleAzuriraj = async (id) => {
    const datum = new Date();
    const datum1 = datum.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    const updatedObjava = {
      id: id,
      naslov: editIme,
      datetime: datum1,
      body: editBody
    };

    try {
      const response = await api.put(`/objave/${id}`, updatedObjava);
      setObjava(objava.map((obj) => obj.id === id ? { ...response.data } : obj));
      setEditIme("");
      setEditBody("");
      navigacija("/");
    } catch (err) {
      console.log(`Greska koja se desila je ${err.message}`);
    }
  };

  const { objava ,setObjava  } = useContext(DataContext)


  const { id } = useParams();

  const obj = objava.find(obj => (obj.id).toString() === id);

  useEffect(() => {
    if (obj) {
      setEditIme(obj.naslov);
      setEditBody(obj.body);
    }
  }, [obj, setEditBody, setEditIme]);

  return (
    <main className="NewPost">
      {editIme ? (
        <>
          <h2>Azuriranje objave</h2>
          <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="editIme">Naziv objave</label>
            <input 
              id="editIme" 
              type="text" 
              value={editIme} 
              onChange={(e) => setEditIme(e.target.value)} 
            />
            <label htmlFor="editBody">Tekst objave:</label>
            <textarea 
              id="editBody" 
              value={editBody} 
              onChange={(e) => setEditBody(e.target.value)} 
            />
            <button type="submit" onClick={() => handleAzuriraj(obj.id)}>Azuriraj tekst</button>
          </form>
        </>
      ) : (
        <>
          <h2>Greska se desila</h2>
          <p>Nece nam se ponoviti</p>
          <p><Link to="/">Vrati se na pocetnu stranu</Link></p>
          
        </>
      )}
    </main>
  );
};

export default UrediObjavu;
