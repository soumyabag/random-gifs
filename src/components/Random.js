
import useGif from '../hooks/useGif';
import Spinner from './Spinner'
import './Random.css'

const Random = () => {

  const{gif, loading, fetchData} = useGif();

  function clickHandler() {
    fetchData();
  }

  

  return (
    <div className='w-[75%] h-fit bg-green-500 flex flex-col 
    items-center  rounded-lg border border-black gap-y-5 mt-[15px] sm:w-1/2'>
        <h1 className='text-sm underline uppercase font-bold mt-[15px] md:text-2xl'>A Random Gif</h1>
         {
            loading ? (<Spinner/>) : (<img src={gif} width="450" height="450" 
              className='image-padding'
            />)
         }
        
        
        <button onClick={clickHandler} className="w-10/12 bg-white
        opacity-70 text-lg py-2 rounded-md mb-[20px]">Generate</button>
    </div>
  )
}

export default Random