import { action, useStoreActions, useStoreState } from 'easy-peasy';
import { useNavigate } from 'react-router-dom';

const KreirajObjavu = () => {

  const navigacija = useNavigate();

  const objava = useStoreState((state)=> state.objava) 
  const imeObjave = useStoreState((state) => state.imeObjave) 
  const bodyObjave = useStoreState((state)=> state.bodyObjave)
  
  const kreirajObjavu = useStoreActions((actions) => actions.kreirajObjavu)
  const setBodyObjave = useStoreActions((actions) => actions.setBodyObjave);
  const setImeObjave = useStoreActions((actions) => actions.setImeObjave);

  const handleKreiraj = async (e) => {
    e.preventDefault();
    const id = objava.length ? (parseInt(objava[objava.length - 1].id) + 1).toString() : 1; 
    const datum = new Date();
    const datum1 = datum.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
    const novaObjava = {
      id: id,
      naslov: imeObjave,
      datetime: datum1,
      body: bodyObjave
    };

    kreirajObjavu(novaObjava);
    navigacija("/")
  };

  return (
    <main className='NewPost'>
      <h2>Kreiraj novu objavu</h2>

      <form className='newPostForm' onSubmit={handleKreiraj}> 
        <label htmlFor='imeObjave'>Naziv objave</label>
        <input id='imeObjave' type='text' required placeholder='Unesi naziv objave' 
                value={imeObjave} onChange={(e) => setImeObjave(e.target.value)}></input>
        <label htmlFor='bodyObjave'>Teskt objava</label>
        <textarea id='bodyObjave' required placeholder='Unesi tekst objave' 
                value={bodyObjave} onChange={(e) => setBodyObjave(e.target.value)}></textarea>


        <button type='submit'> Kreiraj objavu </button>
      </form>
    </main>
  )
}

export default KreirajObjavu
