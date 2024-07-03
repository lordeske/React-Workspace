import { createContext,useState, useEffect, Children } from "react";
import api from '../api/objave';
import useVelicinaProzora from '../hooks/useVelicinaProzora';
import useAxiosFetch from '../hooks/useAxionFetch';
import { useNavigate } from 'react-router-dom';






const DataContext = createContext({});




export const DataProvider = ({children}) => 
    {
        const navigacija = useNavigate();
        const {width} = useVelicinaProzora();  /// Import i dobijanje sirine iz naseg Hooka
        const  {data, fetchError, isLoading } = useAxiosFetch("http://localhost:3500/objave");   // import drugog hooka

        const [objava, setObjava] = useState([]);  
        const [pretraga, setPretraga] = useState("");  
        const [rezultatPretrage, setRezultatPretrage] = useState([]);

        const [imeObjave, setImeObjave] = useState("");   
        const [bodyObjave, setBodyObjave] = useState("");

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
        
            try {
              const response = await api.post("/objave", novaObjava);
              const objave2 = [...objava, response.data];
              setObjava(objave2);
              navigacija("/");
              setBodyObjave("");
              setImeObjave("");
            } catch (err) {
              console.log(`Greska koja se desila je ${err.message}`);
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
                width,
                objava,
                pretraga,
                rezultatPretrage,
                imeObjave,
                bodyObjave,
                editIme,
                editBody,
                setObjava,
                setPretraga,
                setRezultatPretrage,
                setImeObjave,
                setBodyObjave,
                setEditIme,
                setEditBody,
                handleObrisi,
                handleKreiraj,
                handleAzuriraj,
                fetchError,
                isLoading
            }}>
                {children}
            </DataContext.Provider>
        );
    }


export default DataContext;