import React from 'react'

function Lista({odgovori}) {
  return (

    

    <>
      {odgovori.map((item)=>
        
       <li key={item.id} > {JSON.stringify(item)}</li> 
    )}



    </>
  )
}

export default Lista
