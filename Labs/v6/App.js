import './App.css';
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
      <DataProvider>
        <Zaglavlje naslov="Esketov blog"/>
        <Navigacija pretraga={pretraga} setPretraga={setPretraga} />
        <Routes>
          <Route path="/" element={<Pocetna isLoading = {isLoading} fetchError = {fetchError}  objava={rezultatPretrage} />} />
          <Route path="/kreiraj-objavu" element={
            <KreirajObjavu 
              imeObjave={imeObjave} 
              setImeObjave={setImeObjave} 
              bodyObjave={bodyObjave} 
              setBodyObjave={setBodyObjave} 
              handleKreiraj={handleKreiraj} 
            />} 
          />
          <Route path="/opis" element={<Opis />} />
          <Route path="/sve-objave" element={<SveObjave />} />
          <Route path="/uredi-objavu/:id" element={
            <UrediObjavu 
              editBody={editBody} 
              setEditBody={setEditBody} 
              editIme={editIme} 
              setEditIme={setEditIme} 
              handleAzuriraj={handleAzuriraj} 
              objava={objava} 
            />} 
          />
          <Route path="/objava/:id" element={<StranaObjava objava={objava} handleObrisi={handleObrisi} />} />
          <Route path="*" element={<Greska />} />
        </Routes>
        <Futer objava={objava} isLoading = {isLoading} fetchError= {fetchError} />
      </DataProvider>
    </div>  
  );
}

export default App;
