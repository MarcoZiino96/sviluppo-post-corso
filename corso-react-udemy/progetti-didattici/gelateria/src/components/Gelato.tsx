import React from 'react'
import { IGelato } from '../interfaces/IGelato';

function Gelato({nome, img, descrizione, prezzo, categoria}:IGelato):JSX.Element{
 
    return (
        

    <article className='flex gap-x-2 text-black justify-center bg-blue-50 rounded-lg p-2 hover:bg-blue-400 hover:scale-105 transition duration-500'>


        <div className='box-img'>
        <img src={img}className='imgGel rounded-lg'></img>
        </div>

        <div>

            <div className='flex justify-between border-b-2 border-blue-800 mb-2 pb-2'>

                <div>
                    <h3 className='font-bold'>{nome}</h3>
                    <h5 className='font-semibold'>{categoria}</h5>
                </div>

                <div>
                    <h6 className=' bg-blue-800 p-1 text-white rounded-md'>{(prezzo / 100).toFixed(2)}€</h6>
                </div>

            </div>

            <p className='text-md'>{descrizione}</p>

       </div>

    </article>
  )
}

export default Gelato;