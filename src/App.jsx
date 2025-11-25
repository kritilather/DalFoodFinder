import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import dalLogo from './assets/dallogo.svg'
import studleypic from './assets/studley-campus.jpeg'
import carletonpic from './assets/carleton-campus.jpeg'
import './App.css'
import { Studley, Carleton, cafedata} from './assets/assets.js';
import Building from './Building.jsx'



function App() {
  const mydata = Studley;
  const [selectedCampus, setSelectedCampus] = useState("Studley")
  const [selectedBuilding, setSelectedBuilding] = useState("")
  const [dispdata, setDispdata] = useState([])
  const [buildData, setBuildData] = useState(mydata)

  useEffect(()=>{
    selectedCampus === "Studley" ? setBuildData(Studley) : setBuildData(Carleton);
  },[selectedCampus])




  return (
    
    <div>
      <div className='flex justify-between'>
        <a href="https://www.dal.ca" target="_blank">
          <img src={dalLogo} className="w-40" alt="Vite logo" />
        </a>
        <p></p>
        
        <p className='font-family: "Outfit" text-md text-gray-600'>DAL Info Service</p>
      </div>
      
      <h1 className='bg-amber-300 mt-5 font-family: "Outfit" sans-serif text-xl text-gray-600'>Dal Food Finder</h1>
      <p className='font-family: "Outfit"  justify-center flex text-gray-600'>Welcome to DAL Food Availability Service. </p> 
      
      <p className='font-family: "Outfit"  mt-5 mb-5 text-gray-600 font-bold'>Please Select Nearest Campus</p>
     
     <div className='flex justify-center'>
        <form className='flex font-family: "Outfit" text-md'>
         
        <label className=' mr-20 text-gray-600'>
          <img className='rounded-lg w-40 mb-5' src={studleypic}  alt="Vite logo" />
          <input className='mr-2'
            type="radio"
            name="campus" // Same name for all in the group
            value="Studley"
            checked={selectedCampus === "Studley"}
            onChange={(e)=>{
              setSelectedCampus(e.target.value);
            }}
          />
          Studley Campus
        </label>
        
        <label className=' text-gray-600'>
           <img className='rounded-lg w-40 mb-5' src={carletonpic}  alt="Vite logo" />
          <input
          className='mr-2'
            type="radio"
            name="campus"
            value="Carleton"
            checked={selectedCampus === "Carleton"}
            onChange={(e)=>{
              setSelectedCampus(e.target.value);
            }}
          />
          Carleton campus
        </label>
        
      </form>
     </div>
      
     
      <div className='mt-10'> 
        { buildData.map((item, index)=>( 
          
          <Building key={index} data={item}/>
      ))} 
      </div>
  </div> 
    
  )
}

export default App
