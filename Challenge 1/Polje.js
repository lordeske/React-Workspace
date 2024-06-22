import React from 'react'
import { useRef } from 'react'
import colorNames from 'colornames'




function Polje({setTeskt,setHexVrijednost}) {

  const ref = useRef()

  return (
    <form onLoad={()=> ref.current.focus()} className='input2' onSubmit={(e) => e.preventDefault()}>

        <input autoFocus type='text' onChange={((e) =>  { 
          setTeskt(e.target.value)  ;
          setHexVrijednost(colorNames(e.target.value))} )} 
          ref={ref} ></input>

    </form>
  )
}

export default Polje
