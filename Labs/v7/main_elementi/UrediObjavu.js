import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'easy-peasy';


const UrediObjavu = () => {

  const navigacija = useNavigate()
  const { id } = useParams();
  
  const editIme = useStoreState((state) => state.editIme)
  const editBody = useStoreState((state) => state.editBody)

  const azurirajObjavu = useStoreActions((actions) => actions.azurirajObjavu)

  const setEditIme = useStoreActions((actions) => actions.setEditIme)
  const setEditBody = useStoreActions((actions) => actions.setEditBody)

  const getObjavaPoID = useStoreState((state)=> state.getObjavaPoID)
  const obj = getObjavaPoID(id)



  const handleAzuriraj =  (id) => {
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

    azurirajObjavu(updatedObjava);
    navigacija("/")
  };

  


  

  

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
            <button type="button" onClick={() => handleAzuriraj(obj.id)}>Azuriraj tekst</button>
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
