
import Feed from './Feed'
import { useStoreState } from 'easy-peasy';


const Pocetna = ({fetchError, isLoading}) => {

  const {rezultatPretrage} = useStoreState((state)=> state.rezultatPretrage);

  return (
    <main className='Home'>
      {isLoading && <p className='statusMesg'>Ucitavam objave</p>}
      {!isLoading&& fetchError && <p className='statusMess' style={{color : "red"}}>{fetchError}</p>}
      {!isLoading && !fetchError && (rezultatPretrage.length ? <Feed objava={rezultatPretrage}/> : <p className='statusMess'>Nema objava nastarnju</p>)}
    </main>
  )
}

export default Pocetna
