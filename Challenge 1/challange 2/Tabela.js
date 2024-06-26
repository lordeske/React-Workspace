import React from 'react'
import Red from './Red'

function Tabela({odgovori}) {
  return (
    <div className='table-cont'>
        <table>

            <tbody>

            {odgovori.map((item) => 
            
                <Red item = {item}  key={item.id} >  </Red>
            
            )}


            </tbody>


        </table>


    </div>
  )
}

export default Tabela
