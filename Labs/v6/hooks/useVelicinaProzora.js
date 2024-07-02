import { useEffect, useState } from "react";

const useVelicinaProzora = () => 
    {

        const [velicinaProzora, setVelicinaProzora] = useState({
            width : undefined,
            height : undefined 
        })
        
        
        useEffect(() =>
        {
        
            const odradiResize = () => 
            {
                setVelicinaProzora(
                    {
                        width : window.innerWidth,
                        height : window.innerHeight
                    }
                )
            }
        
            odradiResize();
        
        
        
            window.addEventListener("resize", odradiResize);
        
        
            const cleanUP = () => 
                {
                    console.log("Radi ako je depenencie useEfekta promijnejen");
                    window.removeEventListener("reset", odradiResize)
        
                }
        
                return cleanUP;
        
        
        }, [])



        return velicinaProzora;





    }


export default useVelicinaProzora;