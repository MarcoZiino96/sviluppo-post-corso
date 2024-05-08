import React, { useEffect, useState } from 'react'
import { rgbToHex } from '../utils/rgbToHex';
import { IRgb } from '../interfaces/IRgb';

function SingleColor(rgb:IRgb, type:string): JSX.Element {

    const [message, setMessage] = useState<boolean>(false);


    function copiaColore(){
        navigator.clipboard.writeText(rgbToHex(rgb));
        setMessage(true)
    }

    useEffect(() =>{

        if(message){
            const timer = setTimeout(() => {
                setMessage(false)
            }, 4000)

            return (() => clearTimeout(timer))
        }
    }, [message])

    return (

        <>
        <article
        className={`flex h-40 ${type}`} 
        onClick={copiaColore}
        style={{backgroundColor: `${rgbToHex(rgb)}`}}
        >
            <h5>{rgbToHex(rgb)}</h5>

            {message && <p>Copied</p>}
        </article>
        </>
    )

    }

    
 
 
 
 
 
 
 
 
 
 
 
 
 
 
    return (
    <div>SingleColor</div>
  )
}

export default SingleColor