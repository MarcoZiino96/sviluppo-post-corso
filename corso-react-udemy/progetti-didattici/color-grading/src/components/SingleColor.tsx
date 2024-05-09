import React, { useEffect, useState } from 'react'
import { rgbToHex } from '../utils/rgbToHex';
import { IRgb } from '../interfaces/IRgb';

function SingleColor({alpha, rgb, type, weight}:IRgb): JSX.Element {

    const [message, setMessage] = useState<boolean>(false);


    function copiaColore(){
        navigator.clipboard.writeText(rgbToHex(rgb));
        setMessage(true)
    }

    useEffect(() =>{

        if(message){
            const timer = setTimeout(() => {
                setMessage(false)
            }, 1000)

            return (() => clearTimeout(timer))
        }
    }, [message])

    return (

        <>
        <article
        className={` border-2 mb-5 text-center border-slate-950 h-40  rounded-lg ${type}`} 
        onClick={copiaColore}
        style={{backgroundColor: `${rgbToHex(rgb)}`,
                boxShadow: ` 8px 8px 20px ${rgbToHex(rgb)}`}}
        >
            <h5 className='font-bold my-5'>{rgbToHex(rgb)}</h5>

            {message && <p className='text-center bg-slate-800  rounded-lg font-bold text-white text-xl '>Copied</p>}
        </article>
        </>
    )

    }


export default SingleColor