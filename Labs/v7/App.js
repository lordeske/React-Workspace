import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Zaglavlje from './elementi/Zaglavlje';
import Futer from './elementi/Futer';
import Navigacija from './elementi/Navigacija';
import Greska from './main_elementi/Greska';
import KreirajObjavu from './main_elementi/KreirajObjavu';
import UrediObjavu from './main_elementi/UrediObjavu';
import Opis from './main_elementi/Opis';
import Pocetna from './main_elementi/Pocetna';
import SveObjave from './main_elementi/SveObjave';
import StranaObjava from './main_elementi/StranaObjava';
import useAxiosFetch from './hooks/useAxionFetch';
import { useEffect } from 'react';
import { action, useStoreActions } from 'easy-peasy';

function App() {

  const setObjava = useStoreActions((actions) => actions.setObjava)
  const  {data, fetchError, isLoading } = useAxiosFetch("http://localhost:3500/objave");   // import drugog hooka


   
  useEffect(()=> {

    setObjava(data);
    console.log(data)


    },[data, setObjava])



  return (
    <div className="App">
      
        <Zaglavlje naslov="Esketov blog"/>
         
          <Navigacija  />
          <Routes>
            <Route path="/" element={<Pocetna isLoading = {isLoading} fetchError = {fetchError}/>} />
            <Route path="/kreiraj-objavu" element={
              <KreirajObjavu
              />} 
            />
            <Route path="/opis" element={<Opis />} />
            <Route path="/sve-objave" element={<SveObjave />} />
            <Route path="/uredi-objavu/:id" element={
              <UrediObjavu 
                
              />} 
            />
            <Route path="/objava/:id" element={<StranaObjava  />} />
            <Route path="*" element={<Greska />} />
          </Routes>
          <Futer />
        
    </div>  
  );
}

export default App;
