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
import hg from "../Images/ddd.png"
import hg1 from "../Images/100.png"
import { Carousel } from 'primereact/carousel';
import q from "../Images/kagaa.webp"
import w from "../Images/lapg1.webp"
import e from "../Images/kay.webp"
import r from "../Images/lapg2.webp"
import aa from "../Images/left.webp"
import bb from "../Images/right.webp"
import deal from "../Images/deal.png"
function Home() {
  const containerStyle = {
    position: 'relative',
    display: 'inline-block',
  };
  const ty = {
  }
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
  const heightt = {
    height: "250px",
    width: "1000px"
  };
  const colo = {
    color: "gray",
  }
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
    const handleScroll = () => {
      const images = document.querySelectorAll(".scroll-reveal");
      images.forEach((image) => {
        const rect = image.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight * 0.8) {
          image.classList.add("visible");
        } else {
          image.classList.remove("visible");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="bg-black">
        <div id="carouselExampleCaptions" className="carousel slide container" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={pic} className="d-block" style={heightt} alt="..." />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div className="carousel-item">
              <img src={picc} className="d-block " style={heightt} alt="..." />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div className="carousel-item">
              <img src={piccc} className="d-block " style={heightt} alt="..." />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" style={ty} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon " aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="my-4">
        <h5 className="scroll-reveal"><b>Manufacturer of performance custom computers and laptops. Customise your ideal gaming PC or laptop using our advanced configurator.</b></h5>
      </div>

      <div className="container container-free ">


        <div className="row free">
          <div className="col-sm-1">
          </div>
          <div className="col-sm-10">
            <div className="row">

              <div className="col-sm-6">
                <div className="text-start py-5">
                  <h2><b>Why Customized Laptop</b></h2>
                  <br>
                  </br>
                  <p>Customizable devices aren't just a convenient way to get a laptop, desktop, or smartphone with the exact specs you want. The reality is that this kind of technology is a good way to combat the significant tech waste problem that has arisen in the modern era</p>
                  <Link to={"/laptop"}>
                    <bitton className="py-3 btn btn-warning">Configure Now</bitton>
                  </Link>
                </div>
              </div>
              <div className="col-sm-6">
                <img className="image-fluid" src={hg}></img>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-1">
        </div>

      </div>
      <div className="col-12 py-2 ">
        <div style={{ position: 'relative' }}>
          <img src={deal} className="w-100" alt="Today's Deal" />
          <div className="text-start" style={{ position: 'absolute', top: '50%', left: '25%', transform: 'translate(-50%, -50%)' }}>
            <h5 style={{ color: 'white' }} className="text-start"><b className="text-start">Today's Deal</b> The latest offers and promotions from Yantramsha</h5>
          </div>
        </div>
      </div>


      <div className="container py-3">
        {/* <p className="w-100" style={colo}>___________________________________________________________________________________________________________________________________________________</p> */}
        <div className="row">


        </div>

        {/* <p className="w-100" style={colo}>___________________________________________________________________________________________________________________________________________________</p> */}
        <div className="row ">
          <div className="col-sm-3">

            <img src={q} ></img>
            <h6 className="text-start"><b>Dell 5hz 5 megaton</b></h6>
            <p className="text-start">Only At 25000/-</p>

          </div>

          <div className="col-sm-3">

            <img src={w} ></img>
            <h6 className="text-start"><b>Dell 5hz 5 megaton</b></h6>
            <p className="text-start">Only At 25000/-</p>

          </div>
          <div className="col-sm-3">

            <img src={e} ></img>
            <h6 className="text-start"><b>Dell 5hz 5 megaton</b></h6>
            <p className="text-start">Only At 25000/-</p>

          </div>
          <div className="col-sm-3">

            <img src={r} ></img>
            <h6 className="text-start"><b>Dell 5hz 5 megaton</b></h6>
            <p className="text-start">Only At 25000/-</p>

          </div>
          <p className="w-100" style={colo}>___________________________________________________________________________________________________________________________________________________</p>




        </div>

      </div>



      <div class="row d-flex align-items-center khali">
        <div class="col-6">
          <img src={aa} className="img-fluid" style={{ opacity: 0.9 }} alt="Image A" />
          <div className="var">
            <h3 className="text-white"><b>Custom Gaming Pc</b></h3>
            <Link to={"/desktop"}>
              <button className="btn btn-warning">Configure Now</button>
            </Link>
          </div>
        </div>
        <div class="col-6">
          <img src={bb} className="img-fluid " style={{ opacity: 0.9 }} alt="Image B" />
          <div className="varr">
            <h3 className="text-white"><b>Custom  Laptop</b></h3>
            <Link to={"/laptop"}>
              <button className="btn btn-warning">Configure Now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="container container-free">

          <div className="row free">
            <div className="col-sm-1">
            </div>
            <div className="col-sm-10">
              <div className="row">

                <div className="col-sm-6">
                  <div className="text-start py-5">
                    <h2><b>Customized Pc</b></h2>
                    <br>
                    </br>
                    <p>One of the biggest advantages of getting a custom PC built for you is that it can be tailored to your specific needs. Instead of settling for a pre-built computer with a generic set of components, you can choose the exact parts you want and configure them in the most optimal way.</p>
                    <Link to={"/desktop"}>
                      <button className="btn btn-warning py-3 ">Configure Now</button>
                    </Link>

                  </div>
                </div>
                <div className="col-sm-6">
                  <img className="image-fluid" src={hg1}></img>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-1">
          </div>

        </div>

      </div>

      {/* <div className="container py-3">

        <div className="card-fluid bg-dark scroll-reveal">
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
        <div className="card-fluid bg-dark scroll-reveal my-3">
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
      </div> */}
      <Footer></Footer>
    </div>
  );
}
export default Home;
