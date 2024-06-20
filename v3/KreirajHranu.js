import { FaPlus } from "react-icons/fa";

import React from 'react'

const KreirajHranu = ({dodajHranuFunckija ,novaHrana , setNovaHrana}) => {
  return (
    <form className="addForm" onSubmit={dodajHranuFunckija}>
        <label htmlFor="addItem">Dodaj hranu </label>
        <input autoFocus id="addItem" required placeholder="Unesi ime hrane" type="text" value={novaHrana} onChange={(e) => setNovaHrana(e.target.value)}></input>
        <button type="submit" aria-label="dodaj Hranu"  > <FaPlus/> </button>

    </form>
  )
}

export default KreirajHranu
