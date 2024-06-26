import React from 'react'
import Celija from './Celija'

function Red({item}) {
  return (
    <tr>
      {Object.entries(item).map(([key,value]) => {

        return (


            <Celija key = {key} vrednostCelije = {JSON.stringify(value)}></Celija>
        )
      })}
    </tr>
  )
}

export default Red
