import './App.css';
import {  Route, Routes , useNavigate} from 'react-router-dom';
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
import { flushSync } from 'react-dom';



function App() {

  // IMPORTI
  const navigacija = useNavigate();









  //// STEJTOVI 
  const [objava,setObajava] = useState([   /// Nas niz Objava
    {
      id : 1,
      naslov : "Kako pobijediti anksioznost",
      datetime : "Jul 01, 2022",
      body : "Moramo da budemo jaki, silni i nenadjebivi. Da grizemo ko lavovi!"
    },
    {
      id : 2,
      naslov : "Mali nindza kornajca",
      datetime : "Maj 04, 2024 ",
      body : "To je mali nindza Kornjaca"
    },
    {
      id : 3,
      naslov : "Gume trosi drift",
      datetime : "July 01, 2022",
      body : "AZRAAA"
    },])
  const [pretraga, setPretraga] = useState("");   /// Pretraga na pocetnoj (ono sto kucamo)
  const [rezultatPretrage, setRezultatPretrage] = useState([])



  // STEJTOVI ZA OBJAVU
  const [imeObjave, setImeObjave] = useState("");
  const [bodyObjave, setBodyObjave] = useState  ("");



  // FUNKCIJE

  const handleObrisi = (id) =>
    {
      const noviNiz = objava.filter(obj => obj.id != id);

      setObajava(noviNiz);
      navigacija("/") 
    
    }


  const handleKreiraj = (e) =>
    {
      e.preventDefault();

      const id = objava.length ? objava[objava.length - 1].id + 1 : 1; 
      
      const datum = new Date()
      
      const datum1 = datum.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }
      )

      const novaObjava = {
          id : id,
          naslov : imeObjave,
          datetime : datum1,
          body : bodyObjave
      }

      const objave2 = [...objava , novaObjava]
      setObajava(objave2);
      navigacija("/")


      setBodyObjave("");
      setImeObjave("")


    }




  /// useEffect()

  useEffect(()=>{

    const filtririaniRezultati = objava.filter((obj) => 
    
      ((obj.body).toLowerCase()).includes(pretraga.toLowerCase())
    
      || 

      ((obj.naslov).toLowerCase()).includes(pretraga.toLowerCase())
    )

    setRezultatPretrage(filtririaniRezultati.reverse())

  },[objava, pretraga])



  return (
    <div className="App">
      <Zaglavlje naslov="Esketov blog" />
      <Navigacija pretraga={pretraga} setPretraga={setPretraga}/>
      <Routes>
        <Route path="/" element={<Pocetna objava = {rezultatPretrage} />} />
        <Route path="/kreiraj-objavu" element={
          <KreirajObjavu imeObjave = {imeObjave} setImeObjave = {setImeObjave}  bodyObjave = {bodyObjave} 
                          setBodyObjave = {setBodyObjave} handleKreiraj = {handleKreiraj} />} />
        <Route path="/opis" element={<Opis />} />
        <Route path="/sve-objave" element={<SveObjave />} />
        <Route path='/objava/:id'  element={<StranaObjava objava={objava} handleObrisi={handleObrisi}/>}  />
        <Route path="*" element={<Greska />} />
      </Routes>
      <Futer objava= {objava}/>
    </div>
  );
}

export default App;
