import React from 'react';
import { useGlobalContext } from './context';
import Loading from './loading.gif'
// components 
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import './index.css';

const Index = () => {
    const {loading} = useGlobalContext();
    if(loading) {
        return(
            <div  className="loading-bar-spinner"><img src={Loading} alt="" /></div>
        )
    }
  return (
    <main>
     <Navbar/>
     <CartContainer/>
    </main>
  )
}

export default Index