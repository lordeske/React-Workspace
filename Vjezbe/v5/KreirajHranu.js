import { FaPlus } from "react-icons/fa";
import { useRef } from "react";
import React from 'react'

const KreirajHranu = ({dodajHranuFunckija ,novaHrana , setNovaHrana}) => {

  const inputRef = useRef()


  return (
    <form className="addForm" onSubmit={dodajHranuFunckija}>
        <label htmlFor="addItem">Dodaj hranu </label>
        <input autoFocus ref={inputRef} id="addItem" required placeholder="Unesi ime hrane" type="text" value={novaHrana} onChange={(e) => setNovaHrana(e.target.value)}></input>
        <button type="submit" aria-label="dodaj Hranu" onClick={() => inputRef.current.focus()} > <FaPlus/> </button>

    </form>
  )
}

export default KreirajHranu
