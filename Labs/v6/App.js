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
import api from './api/objave'



function App() {

  // IMPORTI
  const navigacija = useNavigate();  /// href

  









  //// STEJTOVI 
  const [objava,setObajava] = useState([])  /// Nas Niz objava
  const [pretraga, setPretraga] = useState("");   /// Pretraga na pocetnoj (ono sto kucamo)
  const [rezultatPretrage, setRezultatPretrage] = useState([])



  // STEJTOVI ZA OBJAVU
  const [imeObjave, setImeObjave] = useState("");
  const [bodyObjave, setBodyObjave] = useState  ("");



  // FUNKCIJE

  const handleObrisi = async (id) =>
    {

      try
      {
        await api.delete(`objave/${id}`)

        const noviNiz = objava.filter(obj => obj.id != id);

        setObajava(noviNiz);
        navigacija("/") 

      }
      catch (err)
      {

        console.log(`Greska koja se desila je: ${err.message}`);

      }

      
    
    }


  const handleKreiraj = async (e) =>
    {
      e.preventDefault();

      

      const id = objava.length ? (parseInt(objava[objava.length - 1].id) + 1).toString() : 1; 
      
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


      try
      {
        const response = await api.post("/objave", novaObjava)

        const objave2 = [...objava , response.data]
        setObajava(objave2);
        navigacija("/")
  
  
        setBodyObjave("");
        setImeObjave("");


      }
      catch (err)
      {
        console.log(`Greska koja se desila je ${err.message}`)
      }


      

    }




  /// useEffect()

  useEffect(()=>{     /// use Pretrage

    const filtririaniRezultati = objava.filter((obj) => 
    
      ((obj.body).toLowerCase()).includes(pretraga.toLowerCase())
    
      || 

      ((obj.naslov).toLowerCase()).includes(pretraga.toLowerCase())
    )

    setRezultatPretrage(filtririaniRezultati.reverse())

  },[objava, pretraga])


  useEffect(()=>
  {

    const fecujObjave = async () => 
      {

        try 
        {
          const response = await api.get("/objave");
          
          setObajava(response.data)


        }
        catch (err)
        {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);

        }


      }

    fecujObjave()



  },[])








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
