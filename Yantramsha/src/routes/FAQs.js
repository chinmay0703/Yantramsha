import React from 'react'

export const FAQs = () => {
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
