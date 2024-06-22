import React from 'react';
import LajntAjtem from './LajntAjtem';

const ListaAjtema = ({ items, cekirajBox, obitsiBox }) => {
  return (
    <ul>
      {items.map((item) => (
        <LajntAjtem item={item} cekirajBox={cekirajBox} obitsiBox={obitsiBox} key={item.id} />
      ))}
    </ul>
  );
}

export default ListaAjtema;
