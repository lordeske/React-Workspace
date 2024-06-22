import React from 'react'

function Kocka({teskt,hexVrijednsot ,bojaTeskta}) {

  



  return (
    <div className='kocka' style={{
      backgroundColor : teskt,
      color : bojaTeskta ? 'black' : 'white'
      }}>
    <div >
      <p>{teskt ? teskt : "Nesto pise"}</p>
      <p>{hexVrijednsot ? hexVrijednsot : null}</p>
    </div>
    </div>
  )
}

export default Kocka
