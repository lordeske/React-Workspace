
import Objava from './Objava'



const Feed = ({objava}) => {


  return (
    <>
        {objava.map( obj => 
            (
                <Objava key={obj.id} obj = {obj} ></Objava>
            )
        )}
    
    
    </>
      
  )
}

export default Feed
