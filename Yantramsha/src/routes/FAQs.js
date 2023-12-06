import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';

const FAQs = () => {
    const activeItem = "FAQs";
    const setActiveItem = (itemName) => {
        console.log(`Setting active item to ${itemName}`);
    };
  return (
    <div className='App'>
        <Navbar activeItem={activeItem} setActiveItem={setActiveItem}  />
        <div className='container'>

            <h1>FAQs</h1>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default FAQs


