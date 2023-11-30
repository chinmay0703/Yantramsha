import React from 'react'
import Navbar from '../components/Navbar';

function ContactUs() {
    const activeItem = "ContactUs";
    
    const setActiveItem = (itemName) => {

        console.log(`Setting active item to ${itemName}`);
    };
  return (
    <div className='App'>
        <Navbar activeItem={activeItem} setActiveItem={setActiveItem}  />
    </div>
  )
}

export default ContactUs