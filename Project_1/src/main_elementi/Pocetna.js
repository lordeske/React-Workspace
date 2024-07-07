import { useContext } from 'react';
import DataContext from '../context/dataContext';
import Feed from './Feed';
import { useStoreState } from 'easy-peasy';

const Pocetna = () => {
  const { fetchError, isLoading } = useContext(DataContext);
  
  const rezultatPretrage = useStoreState((state) => state.rezultatPretrage);

  return (
    <main className='Home'>
      {isLoading && <p className='statusMesg'>Učitavam objave</p>}
      {!isLoading && fetchError && <p className='statusMess' style={{ color: "red" }}>{fetchError}</p>}
      {!isLoading && !fetchError && (rezultatPretrage?.length ? <Feed objava={rezultatPretrage} /> : <p className='statusMess'>Nema objava na stranici</p>)}
    </main>
  );
};

export default Pocetna;
