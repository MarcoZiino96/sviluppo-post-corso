import React from 'react'
import { IGelato } from '../interfaces/IGelato';

function Gelato({nome, img, descrizione, prezzo, categoria}:IGelato):JSX.Element{
 
    return (
        

    <article className='flex gap-2 text-black justify-center p-5'>


        <div>
        <img src={img}className='rounded-lg w-8 h-8'></img>
        </div>

        <div>

            <div className='flex justify-between'>

                <div>
                    <h3>{nome}</h3>
                    <h5>{categoria}</h5>
                </div>

                <div>
                    <h6 className='bg-cyan-700 p-1 text-white'>{(prezzo / 100).toFixed(2)}</h6>
                </div>

            </div>

            <p>{descrizione}</p>

       </div>

    </article>
  )
}

export default Gelato;