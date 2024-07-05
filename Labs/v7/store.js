import {createdStore, actions, thunk, computed} from "easy-peasy";
import api from '../api/objave';


export default kreirajStore({

    objava : [],
    setObjava : actions((state, payload)=>
    
        state.objava = payload
    ),


    imeObjave : "",
    setImeObjave : actions((state, payload) =>
        state.imeObjave= payload
    ),

    bodyObjave : "",
    setBodyObjave : actions((state,payload)=>
        state.bodyObjave = payload
    ),

    editIme : "",
    setEditIme : actions((state,payload) => 
        state.editIme = payload
    ),

    editBody : "",
    setEditBody : actions((state,payload) => 
        state.editBody = payload
    ),


    pretraga : "",
    setPretraga : actions((state, payload) =>
        state.pretraga = payload
    ),


    rezultatPretrage : [],
    setrezultatPretrage : actions((state, payload) =>
        state.rezultatPretrage = payload
    ),

    brojObjava : computed((state) => state.objave.length),
    getObjavaPoID : computed((state) => {
        return (id) => state.objava.find(obj => (obj.id).toString() === id)
    }),


    sacuvajObjavu : thunk(async (actions,novaObjava,helpers ) => {

        const {objava} = helpers.getState();

        try
        {
            const response = await api.post("/objave", novaObjava);
            actions.setObjava([...objava, response.data]),
            actions.setBodyObjave(""),
            actions.setImeObjave("")


        }
        catch (err)
        {
            console.log(`Greska koja se desila je: ${err.message}`);
        }


    }),


    obrisiObjavu : thunk(async(actions,id,helpers)=> {
        const {objava} = helpers.getState();

        try 
        {
            await api.delete(`/objave/${id}`);
            actions.setObjava(objava.filter(obj => obj.id !== id));
        }
        catch (err)
        {
            console.log(`Greska koja se desila je: ${err.message}`)
        }



    }),



    azurirajObjavu: thunk(async (actions,helpers,azuriranPost ) =>{


        const {objava} = helpers.getState();
        const {id} = azuriranPost;

        try 
        {
            const response = await api.put(`/objave/${id}`, azuriranPost);
            actions.setObjava(objava.map(obj => obj.id === id ? {...response.data} : obj));
            actions.setEditIme(""),
            actions.setEditBody("")
        }
        catch (err)
        {
            console.log(`Greska koja se desila je: ${err.message}`)
        }



    })




})

