import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Zaglavlje from './elementi/Zaglavlje';
import Futer from './elementi/Futer';
import Navigacija from './elementi/Navigacija';
import Greska from './main_elementi/Greska';
import KreirajObjavu from './main_elementi/KreirajObjavu';
import Opis from './main_elementi/Opis';
import Pocetna from './main_elementi/Pocetna';
import SveObjave from './main_elementi/SveObjave';
import StranaObjava from './main_elementi/StranaObjava';
import { useEffect, useState } from 'react';
import api from './api/objave';
import UrediObjavu from './main_elementi/UrediObjavu';

function App() {
  const navigacija = useNavigate();

  const [objava, setObjava] = useState([]);  
  const [pretraga, setPretraga] = useState("");  
  const [rezultatPretrage, setRezultatPretrage] = useState([]);

  const [imeObjave, setImeObjave] = useState("");   
  const [bodyObjave, setBodyObjave] = useState("");

  const [editIme, setEditIme] = useState("");  
  const [editBody, setEditBody] = useState("");

  const handleObrisi = async (id) => {
    try {
      await api.delete(`objave/${id}`);
      const noviNiz = objava.filter(obj => obj.id !== id);
      setObjava(noviNiz);
      navigacija("/");
    } catch (err) {
      console.log(`Greska koja se desila je: ${err.message}`);
    }
  };

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

  useEffect(() => { 
    const filtririaniRezultati = objava.filter((obj) => 
      obj.body.toLowerCase().includes(pretraga.toLowerCase()) || 
      obj.naslov.toLowerCase().includes(pretraga.toLowerCase())
    );
    setRezultatPretrage(filtririaniRezultati.reverse());
  }, [objava, pretraga]);

  useEffect(() => { 
    const fecujObjave = async () => {
      try {
        const response = await api.get("/objave");
        setObjava(response.data);
      } catch (err) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      }
    };
    fecujObjave();
  }, []);

  return (
    <div className="App">
      <Zaglavlje naslov="Esketov blog" />
      <Navigacija pretraga={pretraga} setPretraga={setPretraga} />
      <Routes>
        <Route path="/" element={<Pocetna objava={rezultatPretrage} />} />
        <Route path="/kreiraj-objavu" element={
          <KreirajObjavu 
            imeObjave={imeObjave} 
            setImeObjave={setImeObjave} 
            bodyObjave={bodyObjave} 
            setBodyObjave={setBodyObjave} 
            handleKreiraj={handleKreiraj} 
          />} 
        />
        <Route path="/opis" element={<Opis />} />
        <Route path="/sve-objave" element={<SveObjave />} />
        <Route path="/uredi-objavu/:id" element={
          <UrediObjavu 
            editBody={editBody} 
            setEditBody={setEditBody} 
            editIme={editIme} 
            setEditIme={setEditIme} 
            handleAzuriraj={handleAzuriraj} 
            objava={objava} 
          />} 
        />
        <Route path="/objava/:id" element={<StranaObjava objava={objava} handleObrisi={handleObrisi} />} />
        <Route path="*" element={<Greska />} />
      </Routes>
      <Futer objava={objava} />
    </div>
  );
}

export default App;
