import Header from './Header';
import Futer from './Futer';
import Lista from './Lista';
import React, { useState } from 'react';
import { useEffect } from 'react';
import KreirajHranu from './KreirajHranu';
import PretraziProizvode from './PretraziProizvode'


function App() {

  const URL  = "http://localhost:3500/items"
 

  const [items, setItems] = useState([])
  const [pretraga, setNewPretraga] = useState("")
  const [novaHrana, setNovaHrana] = useState("")
  const [fetchError, setFetchError] = useState(null);
  const [loading, SetIsLoading] = useState(true);

  const fetchItems = async () => {    /// Funckija ce da korsiti Await
    try {
      const response = await fetch(URL);  /// Slanje requesta

      
      if (!response.ok) throw  Error('Greksa se desila, nema podataka ali ce da radi');  /// pracenje statusa
      
      const listItems = await response.json();  //// Formatiranje odziva
      
      setItems(listItems);

      console.log(listItems);
      setFetchError(null);

    } 
    catch (e) 
    {
      setFetchError(e.message);

    }
    finally 
    {
      SetIsLoading(false);
    }



  };

  useEffect(() => {
   
      setTimeout(() =>
      {
        fetchItems()
      }, 2000)


  }, []);

  


  

  const dodajItem = (item) =>
  {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const noviState = {id ,
              cekiran : false,
              item 
    }
  

    const listItems = [...items , noviState]
    setItems(listItems)
      
  }


  const cekirajBox = (id) => 
    
    {

      const listaAjtema = items.map((item) => item.id === id ? {...item, cekiran : !item.cekiran} : item)
      setItems(listaAjtema)

      
      
  }



  const obitsiBox = (id) => 
    
    {
  
        const liste = items.filter((item) => 
          item.id !== id
        );
        setItems(liste)
        
        
  }



  



  const dodajHranuFunckija = (e) =>{


    e.preventDefault();


    if(!novaHrana) return;

    
    dodajItem(novaHrana)

    setNovaHrana("")
    


   

  }

  return (
    <div className="App">
      <Header title = "Hrana na meniju" />
      <KreirajHranu dodajHranuFunckija = {dodajHranuFunckija} novaHrana = {novaHrana} setNovaHrana = {setNovaHrana} />
      <PretraziProizvode pretraga = {pretraga} setNewPretraga = {setNewPretraga} />

      <main>
      {loading &&  <p>Ucitavam hranu...</p>}
      {fetchError && <p style={{color : "red"}} >{`Greksa ${fetchError}`}</p>}

      { !fetchError && !loading &&  <Lista items = {items.filter( item => ((item.item).toLowerCase()).includes(pretraga.toLowerCase()))}  cekirajBox = {cekirajBox} obitsiBox = {obitsiBox} /> }
      
      </main>
      
      <Futer numberOfItems = {items.length}  />
    </div>
  );
}

export default App;
