import React from 'react'

const FAQs = () => {
    const activeItem = "FAQs";
    const setActiveItem = (itemName) => {
        console.log(`Setting active item to ${itemName}`);
    };
  return (
    <div className='App'>
        <Navbar activeItem={activeItem} setActiveItem={setActiveItem}  />
    </div>
  )
}

export default FAQs


