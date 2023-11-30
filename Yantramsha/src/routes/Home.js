import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import "../routes/Home.css";
import pic from "../Images/1103.jpg"
import picc from "../Images/1162.jpg"
import piccc from "../Images/1172.jpg"
import pr from "../Images/nj.png"
import tt from "../Images/ka.webp"
import uu from "../Images/fit.webp"
import utu from "../Images/2222.webp"

import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
function Home() {
  const containerStyle = {
    position: 'relative',
    display: 'inline-block',
  };

  const whiteDivStyle = {
    position: 'absolute',
    bottom: 30,
    left: 50,
    width: '500px',
    height: '100px',
    background: 'white',
    opacity: "0.6"
  };
  const sizee = {
    width: '500px',
    height: "300px"
  };
  const widdu = {
    width: '900px',
    height: "500px",
    align: "left"
  };
  const widdi = {
    width: '500px',
    height: "500px",
    align: "left"
  };
  const activeItem = "Home";
  const setActiveItem = (itemName) => {
    console.log(`Setting active item to ${itemName}`);
  };
  const [cartCount, setcartCount] = useState(0);
  useEffect(() => {
    const userId = localStorage.getItem('UserId');
    fetch(`http://localhost:3001/user/${userId}`)
      .then((response) => response.json())
      .then((user) => {
        const cartData = user.cart || [];

        let itemCount = 0;
        cartData.forEach((item) => {
          itemCount += item.quantity;
        });

        setcartCount(itemCount);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    // ... (your existing useEffect code)

    // Add event listener for scrolling to handle image visibility
    const handleScroll = () => {
      const images = document.querySelectorAll(".scroll-reveal");
      images.forEach((image) => {
        const rect = image.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight * 0.8) {
          // If the image is 80% or more in the viewport, add a class to make it visible
          image.classList.add("visible");
        } else {
          // Otherwise, remove the class to hide it
          image.classList.remove("visible");
        }
      });
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={pic} className="d-block w-100 " alt="..." />
            <div className="carousel-caption d-none d-md-block">

            </div>
          </div>
          <div className="carousel-item">
            <img src={picc} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">

            </div>
          </div>
          <div className="carousel-item">
            <img src={piccc} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">

            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="my-4">

        <h5 className="scroll-reveal"><b>Manufacturer of performance custom computers and laptops. Customise your ideal gaming PC or laptop using our advanced configurator.</b></h5>

      </div>
      <div className="row">
        <div className="col-7" style={containerStyle}>
          <img className="my-3 mx-4 scroll-reveal" src={uu} style={widdu}></img>
          <div style={whiteDivStyle}>
            <h1><b>Build <br></br>Your Own PC Today</b></h1>
          </div>
        </div>
        <div className="col-5">
          <img className="my-3 scroll-reveal" src={utu} style={widdi}></img>
        </div>
      </div>
      <div className="container">
        <div className="card bg-dark scroll-reveal">
          <div className="row">
            <h1 className="text-white my-3"><b>Custom Computers</b></h1>
          </div>
          <div className="row">
            <div className="col-6">
              <img style={sizee} src={tt} alt="Card image cap" className="scroll-reveal" />
            </div>
            <div className="col-6">
              <p className="text-white my-4">Based on the latest graphics and chipsets, custom build your gaming PC here! </p>
              <Link to={"/desktop"}>
                <button className="btn btn-primary">Configure Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-dark scroll-reveal">
          <div className="row">
            <h1 className="text-white my-3"><b>Custom Laptops</b></h1>
          </div>
          <div className="row">
            <div className="col-6">
              <img className="d scroll-reveal" style={sizee} src={pr} alt="Card image cap" />
            </div>
            <div className="col-6">
              <p className="text-white my-4">Based on the latest graphics and chipsets, custom build your gaming PC here! </p>
              <Link to={"/laptop"}>
                <button className="btn btn-primary">Configure Now</button></Link>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Home;
