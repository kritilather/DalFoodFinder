import React from 'react'
import dalLogo from './assets/dallogo.svg'

const Card = (props) => {
    const link = `${props.data.image}`.toString()
    const handleButtonClick = (url) => {
    window.open(url, '_blank'); // Opens the URL in a new tab
  };
   const internetUrl = props.data.caffeurl;
  return (
    
<div className='md:w-1/2  p-5  w-full '>
        
    <div className="max-w-sm w-full md:max-w-full md:flex">
        <div className="h-128 md:h-auto md:w-36 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden "  style={{ backgroundImage: `url(${link})`}} title="Woman holding a mug">
        </div>
    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-2">
      
      <div className="text-gray-900 font-bold text-xl mb-2">{props.data.name}</div>
      <div className="text-gray-600 font-bold text-sm mb-2">{props.data.floor === 1 ? "First Floor - " : ""}{props.data.floor === 2 ? "Second Floor - " : ""}{props.data.floor === 0 ? "Bottom Floor- " : ""}{props.data.building}</div>
      
        </div>
    <div className='flex flex-col items-start justify-start'>
    <p className="text-gray-600 align-start text-xs font-bold ">Operating Hours</p>
    <p className=" align-start text-sm text-blue-950 ">Mon-Th : {props.data.DO} - {props.data.DC}</p>
    <p className=" align-start text-sm text-blue-950">Friday  : {props.data.FO} - {props.data.FC}</p>
    <p className=" align-start text-sm text-red-600">{ props.data.name === "Second Cup" ? "Sat-Sun : 10:00 - 18:00" : "Closed on Saturday Sunday"}</p>
    </div>
    <button onClick={() => handleButtonClick(internetUrl)} className='border-2 w-32 border-blue-200 bg-blue-300 cursor-pointer'>Get Directions</button>
  </div>
</div>
  


    


    </div>
  )
}

export default Card