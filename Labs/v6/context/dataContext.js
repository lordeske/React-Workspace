import { createContext,useState, useEffect } from "react";
import api from '../api/objave';
import useAxiosFetch from '../hooks/useAxionFetch';
import { useNavigate } from 'react-router-dom';






const DataContext = createContext({});




export const DataProvider = ({children}) => 
    {
        const navigacija = useNavigate();
       
        const  {data, fetchError, isLoading } = useAxiosFetch("http://localhost:3500/objave");   // import drugog hooka

        const [objava, setObjava] = useState([]);  
        const [pretraga, setPretraga] = useState("");  
        const [rezultatPretrage, setRezultatPretrage] = useState([]);

        

        const [editIme, setEditIme] = useState("");  
        const [editBody, setEditBody] = useState("");


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

        const handleObrisi = async (id) => {
            try {
              await api.delete(`objave/${id}`);
              const noviNiz = objava.filter(obj => obj.id !== id);
              setObjava(noviNiz);
              navigacija("/");
            } catch (err) {
              console.log(`Greska koja se desila je: ${err.message}`);
            }
          };
        
          
        
          const handleAzuriraj = async (id) => {
            const datum = new Date();
            const datum1 = datum.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            });
        
            const updatedObjava = {
              id: id,
              naslov: editIme,
              datetime: datum1,
              body: editBody
            };
        
            try {
              const response = await api.put(`/objave/${id}`, updatedObjava);
              setObjava(objava.map((obj) => obj.id === id ? { ...response.data } : obj));
              setEditIme("");
              setEditBody("");
              navigacija("/");
            } catch (err) {
              console.log(`Greska koja se desila je ${err.message}`);
            }
          };


        
        return (
            <DataContext.Provider value={{
                objava,
                pretraga,
                rezultatPretrage,
                editIme,
                editBody,
                setObjava,
                setPretraga,
                setRezultatPretrage,
                
                setEditIme,
                setEditBody,
                handleObrisi,
                
                handleAzuriraj,
                fetchError,
                isLoading
            }}>
                {children}
            </DataContext.Provider>
        );
    }


export default DataContext;