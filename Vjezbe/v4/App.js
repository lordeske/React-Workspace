import Header from './Header';
import Futer from './Futer';
import Lista from './Lista';
import React, { useState } from 'react';
import KreirajHranu from './KreirajHranu';
import PretraziProizvode from './PretraziProizvode'


function App() {


  const [items, setItems] = useState(JSON.parse(localStorage.getItem("Lista")) || [])
  const [pretraga, setNewPretraga] = useState("")
  const [novaHrana, setNovaHrana] = useState("")

  const setISaveItems = (noviNiz) =>
  {

    setItems(noviNiz);
    localStorage.setItem("Lista" , JSON.stringify(noviNiz));

  } 

  const dodajItem = (item) =>
  {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const noviState = {id ,
              cekiran : false,
              item 
    }
  

    const listItems = [...items , noviState]
    setISaveItems(listItems)
      
  }


  const cekirajBox = (id) => 
    
    {

      const listaAjtema = items.map((item) => item.id === id ? {...item, cekiran : !item.cekiran} : item)
      setISaveItems(listaAjtema)

      
      
  }



  const obitsiBox = (id) => 
    
    {
  
        const liste = items.filter((item) => 
          item.id !== id
        );
        setISaveItems(liste)
        
        
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

      <Lista items = {items.filter( item => ((item.item).toLowerCase()).includes(pretraga.toLowerCase()))}  cekirajBox = {cekirajBox} obitsiBox = {obitsiBox} />
      <Futer numberOfItems = {items.length}  />
    </div>
  );
}

export default App;
