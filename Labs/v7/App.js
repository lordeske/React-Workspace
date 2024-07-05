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
import { DataProvider } from './context/dataContext';

function App() {
  



  return (
    <div className="App">
      
        <Zaglavlje naslov="Esketov blog"/>
          <DataProvider>
          <Navigacija  />
          <Routes>
            <Route path="/" element={<Pocetna/>} />
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
        </DataProvider>
    </div>  
  );
}

export default App;
