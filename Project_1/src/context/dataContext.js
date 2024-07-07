import { createContext,useState, useEffect } from "react";
import useAxiosFetch from '../hooks/useAxionFetch';







const DataContext = createContext({});




export const DataProvider = ({children}) => 
    {
        
       
        const  {data, fetchError, isLoading } = useAxiosFetch("http://localhost:3500/objave");   // import drugog hooka

        const [objava, setObjava] = useState([]);  
        const [pretraga, setPretraga] = useState("");  
        const [rezultatPretrage, setRezultatPretrage] = useState([]);

        

        


        useEffect(() => { 
            const filtririaniRezultati = objava.filter((obj) => 
            obj.body.toLowerCase().includes(pretraga.toLowerCase()) || 
            obj.naslov.toLowerCase().includes(pretraga.toLowerCase())
            );
            setRezultatPretrage(filtririaniRezultati.reverse());
        }, [objava, pretraga]);

        

        
        useEffect(()=> {

        setObjava(data);
        console.log(data)


        },[data])

        
        
          
        
          


        
        return (
            <DataContext.Provider value={{
                objava,
                pretraga,
                rezultatPretrage,
                
                setObjava,
                setPretraga,
                
              
               
                
                
                
                fetchError,
                isLoading
            }}>
                {children}
            </DataContext.Provider>
        );
    }


export default DataContext;