import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Lista = () => {

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
    <main>
      <ul>
        {items.map((item) => (

          <li className='item' key={item.id}> 
            <input type='checkbox' checked = {item.cekiran} onChange={() => cekirajBox(item.id)}/> 
              <label onDoubleClick={() => cekirajBox(item.id)} style={(item.cekiran) ? {textDecoration : "line-through"} : null } > {item.item} </label>  
              <FaTrashAlt 
                onClick={() => obitsiBox(item.id)}
                role='button'
                tabIndex="0"/>
        </li> 

        ) )}
      </ul>
    </main>
  );
};

export default Lista;
