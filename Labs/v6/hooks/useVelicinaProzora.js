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
        
        
            
            return () => window.removeEventListener("resize", odradiResize);
        
        
        }, [])



        return velicinaProzora;





    }


export default useVelicinaProzora;