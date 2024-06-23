import './App.css';
import { Loader } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import axiosBase from './api';
import { useEffect, useState } from 'react';
import ShowsCard from './components/shows/ShowsCard';


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(()=>{
    const dataLoad = async () => {
      try{
        setIsLoading(true)
        const response = await axiosBase("/shows");
        setData(response.data)
      }
      catch(err){
        setIsLoading(false)
        console.log(err);
      }
      finally{
        setIsLoading(false)
      }
    }
    dataLoad();
  }, []);


  console.log(data);


  return (
    <>
      {isLoading ? <Loader center size='md' backdrop inverse speed='normal' content='Tv Shows are loading....' /> : <ShowsCard shows={data} />}
    </>
  )
}

export default App
