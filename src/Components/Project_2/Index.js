import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import './index.css'

const url = 'https://course-api.com/react-tours-project';

const Index = () => {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] =useState([]);

    const removeTour = (id) => {

      const newTours = tours.filter((tour) => tour.id !==id);
      setTours(newTours)

    }

    const fetchTours = async () => {
      
     setLoading(true);
     try {
      const response = await fetch(url); 
      const tours = await response.json(); 
      setLoading(false);
      setTours(tours);     
     } catch (error) {
       setLoading(false);
       console.log(error);
       
     }
    
     console.log(tours) 
     
    };
    useEffect(() => {
      fetchTours()
    },[]);

    if (loading){
      return(
        <main>
          <Loading />
        </main>
      )
    }
    if(tours.length===0){
      return(
        <main>
        <div className="title">
        <h2>No Tour Left</h2>
        <button className='btn' onClick={()=> fetchTours() }>Refresh</button>
        </div>
        </main>
      )
    }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
}

export default Index