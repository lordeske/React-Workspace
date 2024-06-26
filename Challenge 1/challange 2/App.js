import { useEffect, useState } from 'react';
import './App.css';
import Dugme from './Dugme';
import Lista from './Lista';
import Tabela from './Tabela';

function App() {


  const  URL = "https://jsonplaceholder.typicode.com";


  const [zahtjev, setZahtjev] = useState("");
  const [odgovori, setOdgovori] = useState([]);



  const fecujOdgovor = async () =>
  {

    try{

      const odgovor = await fetch(`${URL}/${zahtjev}`)
  
        if(!odgovor.ok)
        {
          throw Error("Greska prilikom dobijaja podataka")
        }

        const rezultat = await odgovor.json();

        setOdgovori(rezultat);

        console.log(rezultat)


    }
    catch (e)
    {
      
    }

    

  }





  useEffect(()=>
  {
    fecujOdgovor();

  }, [zahtjev])






  return (
    <div className="App">
      <Dugme setZahtjev = {setZahtjev} tekstDugmeta={"users"} zahtjev={zahtjev} ></Dugme>
      <Dugme setZahtjev = {setZahtjev} tekstDugmeta={"posts"} zahtjev={zahtjev} ></Dugme>
      <Dugme setZahtjev = {setZahtjev} tekstDugmeta={"comments"} zahtjev={zahtjev} ></Dugme>

      <div className='forma'>
        <Tabela odgovori = {odgovori}></Tabela>
      </div>



    </div>
  );
}

export default App;
