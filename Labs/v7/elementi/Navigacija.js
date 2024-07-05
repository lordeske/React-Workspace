import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { actions, useStoreActions, useStoreState } from 'easy-peasy'


const Navigacija = () => {

  const objava = useStoreState((state) => state.objava);
  const pretraga = useStoreState((state) => state.pretraga);
  const setPretraga = useStoreActions((actions) => actions.setPretraga)
  const setRezultatPretrage = useStoreActions((actions) => actions.setRezultatPretrage) 


  useEffect(() => { 
    const filtririaniRezultati = objava.filter((obj) => 
    obj.body.toLowerCase().includes(pretraga.toLowerCase()) || 
    obj.naslov.toLowerCase().includes(pretraga.toLowerCase())
    );
    setRezultatPretrage(filtririaniRezultati.reverse());
}, [objava, pretraga]);

  return (
    <nav className='Nav'>
      <form className='searchForm' onSubmit={(e)=> e.preventDefault()}> 
      <label htmlFor='pretraga'>Pretrazi objavu</label>
      <input id='pretraga' type='text' placeholder='Pretrazi objavu' value={pretraga} onChange={(e) => setPretraga(e.target.value)}/>


      </form>
      <ul>
        <li><Link to="/"> Pocetna </Link></li>
        <li><Link to="/kreiraj-objavu"> Nova Objava </Link></li>
         <li><Link to="/opis"> O nama </Link></li>
      </ul>
    </nav>
  
  )
}

export default Navigacija
