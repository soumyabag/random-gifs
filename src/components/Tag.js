
import {useState } from 'react'
import useGif from '../hooks/useGif';
import Spinner from './Spinner'
import './Tag.css'

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {

  const[tag, setTag] = useState('car');

  const{gif, loading, fetchData} = useGif(tag);

  function clickHandler() {
    fetchData(tag);
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }

  

  return (
    <div className='w-[75%] h-fit bg-blue-500 flex flex-col 
    items-center  rounded-lg border border-black gap-y-5 mt-[15px] mb-[25px] sm:w-1/2'>
        <h1 className='text-sm underline uppercase font-bold mt-[15px] md:text-2xl'>Random {tag} Gif</h1>
        
        {
            loading ? (<Spinner/>) : (<img src={gif} width="450" height="450" className='image-padding'/>)
        }
        
        <input className='w-10/12 bg-white
        opacity-70 text-lg py-2 rounded-md mb-[3px] text-center'
         type="text"
         onChange={changeHandler} 
         value={tag}  
        />
        <button onClick={clickHandler} className="w-10/12 bg-white
        opacity-70 text-lg py-2 rounded-md mb-[20px]">Generate</button>
    </div>
  )
}

export default Tag