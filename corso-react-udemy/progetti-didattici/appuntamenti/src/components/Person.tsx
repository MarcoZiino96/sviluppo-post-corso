import React from 'react'
import { IPerson } from '../interface/person-interface'

function Person({id, nome, stato,img}:IPerson, removePerson){
  return (
    <article className=''>
        <div>
            <img src={img} alt="prs" />
        </div>

    </article>
  )
}

export default Person