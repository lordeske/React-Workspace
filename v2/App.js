import Header from './Header';
import Futer from './Futer';
import Lista from './Lista';
import React, { useState } from 'react';

function App() {


  const [items, setItems] = useState([
    {
      id : 1,
      cekiran : false,
      item : "Stavka 1"
    },
    {
      id : 2,
      cekiran : false,
      item : "Stavka 2"
    },
    {
      id : 3,
      cekiran : false,
      item : "Stavka 3"
    },
  ])

  const cekirajBox = (id) => 
    
    {

      const listaAjtema = items.map((item) => item.id === id ? {...item, cekiran : !item.cekiran} : item)
      setItems(listaAjtema);

      localStorage.setItem("Lista" , JSON.stringify(listaAjtema));
      
    }



  const obitsiBox = (id) => 
    
    {
  
        const liste = items.filter((item) => 
          item.id !== id
        );
        setItems(liste);
        
        
    }

  return (
    <div className="App">
      <Header title = "Hrana na meniju" />
      <Lista items = {items}  cekirajBox = {cekirajBox} obitsiBox = {obitsiBox} />
      <Futer numberOfItems = {items.length}  />
    </div>
  );
}

export default App;
