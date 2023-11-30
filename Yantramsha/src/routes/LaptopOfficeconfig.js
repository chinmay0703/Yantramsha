import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import pic from "../Images/lapo1.webp";
import picc from "../Images/lapo2.webp";
import piccc from "../Images/lapo3.webp";
import Navbar from '../components/Navbar';
import bg from "../Images/11.webp"
import bgg from "../Images/73.webp"
import e from "../Images/2.webp"
import Footer from '../components/Footer/Footer';
import "../routes/desktop.css"
function LaptopOfficeconfig() {

    
    const [option1, setoption1] = useState('GeForce RTX 4060 Ti 8GB');
    const [option1Price, setoption1Price] = useState(4000);
    const [option2, setoption2] = useState('ASUS® PRIME H610M-A-CSM D4 (mATX, LGA1700, DDR4, PCIe 4.0)');
    const [option2Price, setoption2Price] = useState(700);
    const [option3, setoption3] = useState('8GB PCS PRO DDR4 3200MHz (1 x 8GB)');
    const [option3Price, setoption3Price] = useState(4500);
    const [total, settotal] = useState(9200);
    
    const handleDropdownChange = (value,event) => {
        event.preventDefault(); 
        setoption1(value);

        if (value === "GeForce RTX 4070 12GB") {
            setoption1Price(5000);
        } else if (value === "GeForce RTX 4070 Ti 12GB") {
            setoption1Price(6000);
        } else if (value === "GeForce RTX 4070 Ti 16GB") {
            setoption1Price(7000);
        } else if (value === "GeForce RTX 4070 Tm 32GB") {
            setoption1Price(7000);
        }
    };



    const handleDropdownChangee = (value,event) => {
        event.preventDefault(); 
        setoption2(value);
        switch (value) {
            case 'ASUS® PRIME H610M-A-CSM D4 (mATX, LGA1700, DDR4, PCIe 4.0)':
                setoption2Price(900);
                break;
            case 'ASUS® PRIME B760M-K D4 (mATX, LGA1700, DDR4, PCIe 4.0)':
                setoption2Price(1000);
                break;
            case 'ASUS® PRIME B760-PLUS D4 (LGA1700, DDR4, PCIe 5.0)':
                setoption2Price(1100);
                break;
            case 'ASUS® TUF GAMING B760-PLUS WIFI D4 (LGA1700, DDR4, PCIe 5.0, Wi-Fi 6)':
                setoption2Price(1200);
                break;
            case 'GIGABYTE H610M K DDR4 (mATX, LGA1700, DDR4, PCIe 4.0)':
                setoption2Price(1300);
                break;
            case 'GIGABYTE B660 DS3H DDR4 (rev. 1.0) (LGA1700, DDR4, PCIe 4.0)':
                setoption2Price(1400);
                break;
            case 'GIGABYTE B760 DS3H DDR4 (LGA1700, DDR4, PCIe 4.0)':
                setoption2Price(1500);
                break;

            default:

                break;
        }
    };
   

    const handleDropdownChangeee = (value,event) => {
        event.preventDefault(); 
        setoption3(value);

        
        switch (value) {
            case '16GB PCS PRO DDR4 3200MHz (1 x 16GB)':
                setoption3Price(5500);
                break;
            case '16GB PCS PRO DDR4 3200MHz (2 x 8GB)':
                setoption3Price(6500);
                break;
            case '32GB PCS PRO DDR4 3200MHz (1 x 32GB)':
                setoption3Price(7500);
                break;
            case '32GB PCS PRO DDR4 3200MHz (2 x 16GB)':
                setoption3Price(8500);
                break;
           
            default:
                
                break;
        }
    };

    
    const sty = {
        position: 'relative',
        width: "620px",
        height: "540px",
        left: 100
    };

    const backk = {
        backgroundColor: "gray"
    };

    const stt = {
        position: "relative",
        left: 10,
        width: "600px",
        height: "50px",
        radius: "5px "
    };

    const st = {
        color: "black"
    };

    const small = {
        width: "70px",
        height: "60px"
    };
   
    const dropdownmenu = {
        width: "700px"

    };
    const yy = {
        width: "600px",
        height: "90px"

    }
    const activeItem = "LaptopOfficeconfig";

    const setActiveItem = (itemName) => {
        console.log(`Setting active item to ${itemName}`);
    };
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
    }, []); 
    const jkjk={
        position:"relative",
        left:80,
        width:"150px",
        height:"60px"

    }
    useEffect(() => {
        console.log("Option 1 Price:", option1Price);
        console.log("Option 2 Price:", option2Price);
        console.log("Option 3 Price:", option3Price);
        settotal(option1Price + option2Price + option3Price);
        console.log("Total Price:", total);
       
    }, [option1, option2, option3, option1Price, option2Price, option3Price]);

    const save = () => {
        
        const calculatedTotal = option1Price + option2Price + option3Price;

    
        settotal(calculatedTotal);

        localStorage.setItem("TotalAmount", total);
    };
    
   
    

    useEffect(() => {
        console.log("kj");
        window.bootstrap && window.bootstrap.Tooltip && new window.bootstrap.Tooltip(document.body);
        window.bootstrap && window.bootstrap.Popover && new window.bootstrap.Popover(document.body);
        window.bootstrap && window.bootstrap.Dropdown && new window.bootstrap.Dropdown(document.body);
    }, []);

    return (
        <div className='App '>
            <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />
            <div>
                <div className='row'>
                    <div className='col-6'>
                        <div id="carouselExampleCaptions" className="carousel slide" style={backk} data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={pic} className="d-block " style={sty} alt="..." />
                                    <div className="carousel-caption d-none d-md-block"></div>
                                </div>
                                <div className="carousel-item">
                                    <img src={picc} className="d-block" style={sty} alt="..." />
                                    <div className="carousel-caption d-none d-md-block"></div>
                                </div>
                                <div className="carousel-item">
                                    <img src={piccc} className="d-block" style={sty} alt="..." />
                                    <div className="carousel-caption d-none d-md-block"></div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" style={st} data-bs-slide="prev">
                                <span className="carousel-control-prev-icon " style={st} aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className='col-6 overflow-autoo'>
                        <div className=''>
                            <h4 className='text my-4'><b>Choose your components</b></h4>
                        </div>
                        <div className='container bg-white ' style={yy}>
                            <div className='row'>
                                <div className='col-5'>
                                    <div className='row'>
                                        <h5 className='py-2 text-start'><b>Build Summary</b></h5>
                                    </div>
                                    <div className='row'>
                                        <p className='text-start'>total Amount:{total}Rs</p>
                                    </div>
                                </div>
                                <div className='col-7'>
                                    <button className='btn btn-warning my-3 mx-4 ' style={jkjk} onClick={save}> Continue</button>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row my-3">
                            <div className='col-1'>
                                <img src={bg} style={small} alt="icon" />
                            </div>
                            <div className='col-2'>
                                <h6 className='my-3'><b>Graphics</b></h6 >
                            </div>
                            <div className='row'>
                                <div className='col-11'>
                                    <div className="input-group">
                                        <input type="text" className="form-control" value={option1} readOnly />
                                        <div className="input-group-append">
                                            <button
                                                className="btn btn-warning dropdown-toggle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                            </button>
                                            <div className="dropdown-menu custom-dropdown-menu">
                                                <a className="dropdown-item" onClick={(event) => handleDropdownChange('GeForce RTX 4070 12GB',event)}>GeForce RTX 4070 12GB</a>
                                                <a className="dropdown-item" onClick={(event) => handleDropdownChange('GeForce RTX 4070 Ti 12GB',event)}>GeForce RTX 4070 Ti 12GB</a>
                                                <a className="dropdown-item" onClick={(event) => handleDropdownChange('GeForce RTX 4070 Ti 16GB',event)}>GeForce RTX 4070 Ti 16GB</a>
                                                <a className="dropdown-item" onClick={(event) => handleDropdownChange('GeForce RTX 4070 Tm 32GB',event)}>GeForce RTX 4070 Tm 32GB</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-group row my-3">
                            <div className='col-1'>
                                <img src={bgg} style={small} alt="icon" />
                            </div>
                            <div className='col-2'>
                                <h6 className='my-3 mx-3'><b>Motherboard</b></h6 >
                            </div>
                            <div className='row'>
                                <div className='col-11'>
                                    <div className="input-group">
                                        <input type="text" className="form-control" value={option2} readOnly />
                                        <div className="input-group-append">
                                            <button
                                                className="btn btn-warning dropdown-toggle"
                                                type="button"
                                                data-bs-toggle="dropdown" 
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                            </button>
                                            <div className="dropdown-menu custom-dropdown-menu">
                                            <a className="dropdown-item" href="#" onClick={(event) => handleDropdownChangee('ASUS® PRIME H610M-A-CSM D4 (mATX, LGA1700, DDR4, PCIe 4.0)', event)}>ASUS® PRIME H610M-A-CSM D4 (mATX, LGA1700, DDR4, PCIe 4.0)</a>
                                                <a className="dropdown-item" href="#" onClick={(event) => handleDropdownChangee('ASUS® PRIME B760M-K D4 (mATX, LGA1700, DDR4, PCIe 4.0)', event)}>ASUS® PRIME B760M-K D4 (mATX, LGA1700, DDR4, PCIe 4.0)</a>
                                                <a className="dropdown-item" href="#" onClick={(event) => handleDropdownChangee('ASUS® PRIME B760-PLUS D4 (LGA1700, DDR4, PCIe 5.0)', event)}>ASUS® PRIME B760-PLUS D4 (LGA1700, DDR4, PCIe 5.0)</a>
                                                <a className="dropdown-item" href="#" onClick={(event) => handleDropdownChangee('ASUS® TUF GAMING B760-PLUS WIFI D4 (LGA1700, DDR4, PCIe 5.0, Wi-Fi 6)', event)}>ASUS® TUF GAMING B760-PLUS WIFI D4 (LGA1700, DDR4, PCIe 5.0, Wi-Fi 6)</a>
                                                <a className="dropdown-item" href="#" onClick={(event) => handleDropdownChangee('-----------PERFORMANCE MOTHERBOARDS FROM GIGABYTE™-----------', event)}>-----------PERFORMANCE MOTHERBOARDS FROM GIGABYTE™-----------</a>
                                                <a className="dropdown-item" href="#" onClick={(event) => handleDropdownChangee('GIGABYTE H610M K DDR4 (mATX, LGA1700, DDR4, PCIe 4.0)', event)}>GIGABYTE H610M K DDR4 (mATX, LGA1700, DDR4, PCIe 4.0)</a>
                                                <a className="dropdown-item" href="#" onClick={(event) => handleDropdownChangee('GIGABYTE B660 DS3H DDR4 (rev. 1.0) (LGA1700, DDR4, PCIe 4.0)', event)}>GIGABYTE B660 DS3H DDR4 (rev. 1.0) (LGA1700, DDR4, PCIe 4.0)</a>
                                                <a className="dropdown-item" href="#" onClick={(event) => handleDropdownChangee('GIGABYTE B760 DS3H DDR4 (LGA1700, DDR4, PCIe 4.0)', event)}>GIGABYTE B760 DS3H DDR4 (LGA1700, DDR4, PCIe 4.0)</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-group row my-3">
                            <div className='col-1'>
                                <img src={e} style={small} alt="icon" />
                            </div>
                            <div className='col-2'>
                                <h6 className='my-3'><b>Memory</b></h6 >
                            </div>
                            <div className='row'>
                                <div className='col-11'>
                                    <div className="input-group">
                                        <input type="text" className="form-control" value={option3} readOnly />
                                        <div className="input-group-append">
                                            <button
                                                className="btn btn-warning dropdown-toggle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                            </button>
                                            <div className="dropdown-menu custom-dropdown-menu">
                                                <a className="dropdown-item" href="#" onClick={(event) => handleDropdownChangeee('16GB PCS PRO DDR4 3200MHz (1 x 16GB)',event)}>16GB PCS PRO DDR4 3200MHz (1 x 16GB)</a>
                                                <a className="dropdown-item" href="#" onClick={(event) => handleDropdownChangeee("16GB PCS PRO DDR4 3200MHz (2 x 8GB)",event)}>16GB PCS PRO DDR4 3200MHz (2 x 8GB)</a>
                                                <a className="dropdown-item" href="#" onClick={(event) => handleDropdownChangeee("32GB PCS PRO DDR4 3200MHz (1 x 32GB)",event)}>32GB PCS PRO DDR4 3200MHz (1 x 32GB)</a>
                                                <a className="dropdown-item" href="#" onClick={(event) => handleDropdownChangeee("32GB PCS PRO DDR4 3200MHz (2 x 16GB)",event)}>32GB PCS PRO DDR4 3200MHz (2 x 16GB)</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LaptopOfficeconfig;
