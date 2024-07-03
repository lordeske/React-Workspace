import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DataContext from '../context/dataContext';

const UrediObjavu = () => {

  const { objava, editBody, setEditBody, editIme, setEditIme, handleAzuriraj } = useContext(DataContext)


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
