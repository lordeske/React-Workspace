import React from 'react'

function Dugme({setBojaTeksta ,bojaTeskta}) {
  return (

    <button className='input3' type='button' onClick={(e) =>setBojaTeksta(!bojaTeskta)}>Promijeni boju</button>
    
  )
}

export default Dugme
