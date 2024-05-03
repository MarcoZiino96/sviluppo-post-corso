import React from 'react'
import Person from './Person';
import { IPerson } from '../interface/person-interface';

interface ListProps{
    data: IPerson[];
    removePerson: (id: number) => void; 
}

function List({data, removePerson}:ListProps):JSX.Element{

  return (
    <>
    <ul className='list-none rounded-md bg-gray-700'>

        {data.map((person)=>(
            <li key={person.id}>
                <Person {...person} removePerson = {removePerson}>
                </Person>
            </li>
        ))
        
        }
    </ul>
    </>
  )
}

export default List;