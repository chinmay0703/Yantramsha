import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import "../routes/Aboutus.css";
import fr from "../Images/aboutus.jpg"
function AboutUs() {
  const bac = {
    backgroundColor: "white",
    opacity: "0.8"
  }

  const activeItem = "AboutUs";

  const setActiveItem = (itemName) => {

    console.log(`Setting active item to ${itemName}`);
  };
  return (
    <div className='App'>
      <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className=' about-us-container'>

        <div className='container my-3 ' style={bac}>
         
          <div className='row'>
            <div className='col-6'>
            <img src={fr} className='my-3' style={{ borderRadius: '50px' }} />

            </div>
            <div className='col-6'>
              <h1 className='my-3 text-typing'>TechnoconfigHub</h1>
              <p className='text-start my-3 '>We are a UK-based Company, leading the way in high-quality shadow consulting for products and services across IT and digital spectrums. We offer the kind of support that represents the quintessential element of business success.
                Our range of products and services comprises of web application development, software testing services and digital marketing solutions for the new age. Our software designs are tested for all possible boundary conditions and made reliable by simulating real-life test scenarios.</p>
            </div>
          </div>

        </div>


      </div>
      <Footer></Footer>
    </div>

  )
}

export default AboutUs