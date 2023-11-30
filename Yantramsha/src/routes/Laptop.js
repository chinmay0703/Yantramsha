import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import backgroundImage from '../Images/back.jpg';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaGooglePlus, FaTelegramPlane, FaCog } from 'react-icons/fa';
import fr from "../Images/kagaa.webp"
import fre from "../Images/kay.webp"
import "../routes/desktop.css"
import { Link } from 'react-router-dom';
function Laptop() {
  const st = {
    position: 'relative',
    bottom: -20,
    left: 400,
    width: '500px',
    height: '100px',
    color: 'black',
    backgroundColor: 'Black',
    opacity: 0.9 // Corrected typo
  };
  const sty = {
    width: "250px",
    height: "200px"

  }
  const gray = {
    color: "white"
  }
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
}, []); 
  const activeItem = "Laptop";

  const setActiveItem = (itemName) => {
    console.log(`Setting active item to ${itemName}`);
  };

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // Set minimum height to cover the entire viewport
  };

  return (
    <div className='App br' style={containerStyle}>
      <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />

      <div className='container'>
        <div style={st}>
          <h1 className='text-white py-4 '> <FaCog style={gray}></FaCog><b>Build Your Laptop</b></h1>
        </div>
        <div className='row my-5 '>
          <div className='col-6'>
            <div className='card '>
              <div className='card-title'>
                <h3 className=''> Gamming Laptop</h3>
                <img src={fr} style={sty} className='my-4'>
                  {/* https://www.chillblast.com/special-edition-pcs/chillblast-opal-amd-ryzen-5-rtx-4060-ti-gaming-pc-1/configure?buildid=619614 */}
                </img>
                <div className='card-body'>
                  <p className='text-whie'><b>Chillblast Opal AMD Ryzen 5 RTX 4060 Ti Gaming PC</b></p>
                  <ul className='mx-5'>
                    <li className='text-start'> Graphics NVIDIA RTX 4060 Ti</li>
                    <li className='text-start'>Processor

                      AMD Ryzen 5 7600X

                      6 Cores</li>
                    <li className='text-start'>Memory

                      2 x 16GB DDR5 5600MHz

                      32GB</li>
                    <li className='text-start'>Storage

                      Solidigm P41 Plus PCIe 4.0 x4 NVMe

                      2TB</li>
                  </ul>
                  <Link to={"/laptopgamming"}><button className='btn btn-warning my-3'>configure</button></Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='card '>
              <div className='card-title'>
                <h3 className=''>
                  PROFESSIONAL / WORKSTATION LAPTOPS</h3>
                <img src={fre} style={sty}>
                </img>
                <div className='card-body'>
                  <p className='text-whie '><b>Chillblast Opal AMD Ryzen 5 RTX 4060 Ti Gaming PC</b></p>
                  <ul className='mx-5'>
                    <li className='text-start'>AMD A520, B550 & X570 Chipsets. Socket AM4.</li>
                    <li className='text-start'>Supporting the AMD Ryzen™ 5000 Series Processors.</li>
                    <li className='text-start'>Up to 8 Core / 16 Thread CPUs & DDR4 Memory.</li>
                    <li className='text-start'>High Performance PCs For Home Users, Gamers & Creators! </li>
                  </ul>
                  {/* https://www.pcspecialist.co.uk/computers/amd-am4-home-office/ */}
                  <Link to={"/laptopoffice"}> <button className='btn btn-warning my-1'>configure</button></Link>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
      <Footer></Footer>
    </div>
  );
}

export default Laptop;
