import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const LajntAjtem = ({ item, cekirajBox, obitsiBox }) => {
  return (
    <li className='item'>
      <input 
        type='checkbox' 
        checked={item.cekiran} 
        onChange={() => cekirajBox(item.id)}
      />
      <label 
        onDoubleClick={() => cekirajBox(item.id)} 
        style={item.cekiran ? { textDecoration: 'line-through' } : null}
      >
        {item.item}
      </label>
      <FaTrashAlt 
        onClick={() => obitsiBox(item.id)}
        role='button'
        tabIndex="0"
      />
    </li>
  );
}

export default LajntAjtem;
