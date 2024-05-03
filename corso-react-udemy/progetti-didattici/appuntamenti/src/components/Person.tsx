import React from 'react'
import { IPerson } from '../interface/person-interface'


interface FunctionProps extends IPerson{
  removePerson: (id: number) => void; 
}




function Person({id, nome, stato,img, removePerson}: FunctionProps):JSX.Element{
  return (

    <article className='flex text-emerald-300 p-5'>

        <div className='w-1/4 '>
            <img className='h-16 w-16 rounded-full' src={img} alt="prs" />
        </div>
        <div className='w-2/4 '>
          <p className='font-bold'>{nome}</p>
          <p>{stato}</p>
        </div>
        <div className='w-1/4 text-end  text-red-700'>
        <button className='bg-red-700 text-white p-2 cursor-pointer rounded-full' onClick={() => removePerson(id)}>
          X
        </button>
        </div>

    </article>
  )
}

export default Person