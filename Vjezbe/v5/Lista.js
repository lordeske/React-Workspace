
import ListaAjtema from './ListaAjtema';

const Lista = ({items,cekirajBox,obitsiBox }) => {


  return (
    <>
      {items.length ? (
        
        <ListaAjtema items={items} cekirajBox={cekirajBox} obitsiBox={obitsiBox} />

      ): (<p> Nema vise elenata </p>)}
    </>
  );
};

export default Lista;
