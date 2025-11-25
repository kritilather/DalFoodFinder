import React, { useEffect, useState } from 'react'
import { cafedata} from './assets/assets.js';
import Card from './Card.jsx';

const Building = (props) => {
    const [sel, setSel] = useState([]);
    const myselection = cafedata.filter((item) =>{
        return item.building === props.data;
    })
    useEffect(()=>{
        setSel(myselection);
    },[props.data])
    
    
  return (
    <div>
      <h2 className=' font-bold font-gray-600 text-xl mb-10'>Food Facilities at {props.data}</h2>
      <div className='flex flex-row justify-center items-center align-middle flex-wrap w-full  border-2 border-amber-200'>
    
        
        {sel.map((item, index)=>(
            <Card key={index} data={item}/>
        ))}
       

    </div>
    </div>
    
  )
}

export default Building;