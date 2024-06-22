import Kocka from './Kocka';
import Polje from './Polje';
import Dugme from './Dugme';
import './App.css';
import { useState } from 'react';





function App() {


  const [teskt, setTeskt] = useState("")
  const [hexVrijednsot, setHexVrijednost] = useState("")
  const [bojaTeskta, setBojaTeksta] = useState(true)




  

  return (
   <div>
    <Kocka teskt={teskt} hexVrijednsot = {hexVrijednsot} bojaTeskta = {bojaTeskta} ></Kocka>
    <Polje setTeskt = {setTeskt} setHexVrijednost = {setHexVrijednost}   ></Polje>
    <Dugme setBojaTeksta = {setBojaTeksta} bojaTeskta = {bojaTeskta}></Dugme>
    </div>
  );
}

export default App;
