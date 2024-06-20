
import ListaAjtema from './ListaAjtema';

const Lista = ({items,cekirajBox,obitsiBox }) => {


  return (
    <main>
      {items.length ? (
        
        <ListaAjtema items={items} cekirajBox={cekirajBox} obitsiBox={obitsiBox} />

      ): (<p> Nema vise elenata </p>)}
    </main>
  );
};

export default Lista;
