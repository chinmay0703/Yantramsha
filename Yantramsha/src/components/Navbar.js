import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import 'boxicons/css/boxicons.min.css';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import im from "../Images/p.png"

function Navbar(props) {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('UserId');
        localStorage.removeItem('UserName');
        navigate("/")
        toast.error("Loged out Successfully");
    };
    const authToken = localStorage.getItem('authToken');
    const user = localStorage.getItem('UserName');
    const cartCount = props.cartCount || {};
    const count = cartCount.count;

    const { activeItem, setActiveItem } = props;
    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };
    const [sidebarActive, setSidebarActive] = useState(false);
    const handleSidebarToggle = () => {
        setSidebarActive(!sidebarActive);
    };
    const handleSidebarCollapseX = () => {
        setSidebarActive(false);
    };
    const neet = {
        width: "60px",
        position: "relative",


    };
    const tr = {
        position: "relative",
        top: 15

    }
    return (
        <div>
            <div className={`overlay ${sidebarActive ? 'visible' : ''}`}></div>



            <nav className="navbar navbar-expand-md navbar-light blight main-menu"  style={{ boxShadow: 'black', borderBottom: '1px solid orange' }} >
                <div className="container">
                    <Button
                        type="button"
                        id="sidebarCollapse"
                        variant="link"
                        className="btn btn-link d-block d-md-none"
                        onClick={handleSidebarToggle}
                    >
                        <i className={`bx ${sidebarActive ? 'bx-x' : 'bx-menu'} icon-single`}></i>
                    </Button>

                    <Link className="navbar-brand" to="/">
                        <div className="row">
                            <div className="col-1">
                                {/* <img src={im} style={neet}></img> */}
                            </div>
                            <div className="col-1">
                                <ul className="navbar-nav mx-auto">
                                    <li className={`nav-item ${activeItem === 'Home' ? 'active' : ''}`}>
                                        <img src={im} style={neet}></img>
                                    </li>
                                    <li className={`nav-item ${activeItem === 'Home' ? 'active' : ''}`}>
                                        <Link className="nav-link text-white" to="/" onClick={() => handleItemClick('Home')}>
                                            <h2>Yantramsha</h2>
                                        </Link>
                                    </li>
                                </ul>
                                {/* <div className="row">
                                    <h6 className="font-weight-bold mx-3 " style={tr}>Tailor your Tech</h6>
                                </div> */}
                            </div>

                        </div>
                    </Link>
                    <nav className="navbar navbar-expand-md navbar-light blight sub-menu">
                        <div className="container">
                            <div className="collapse navbar-collapse" id="navbar">
                                <ul className="navbar-nav mx-auto">
                                    <li className={`nav-item ${activeItem === 'Home' ? 'active' : ''}`}>
                                        <Link className="nav-link text-white" to="/" onClick={() => handleItemClick('Home')}>
                                            Home
                                        </Link>
                                    </li>
                                    <li className={`nav-item ${activeItem === 'AboutUs' ? 'active' : ''}`}>
                                        <Link to="/AboutUs" className="nav-link text-white" onClick={() => handleItemClick('AboutUs')}>
                                            About Us
                                        </Link>
                                    </li>
                                    <li className={`nav-item ${activeItem === 'Desktop' ? 'active' : ''}`}>
                                        <Link className="nav-link text-white" to="/desktop" onClick={() => handleItemClick('Desktop')}>
                                            Desktop
                                        </Link>
                                    </li>
                                    <li className={`nav-item ${activeItem === 'Laptop' ? 'active' : ''}`}>
                                        <Link className="nav-link text-white" to="/laptop" onClick={() => handleItemClick('Laptop')}>
                                            Laptop
                                        </Link>
                                    </li>
                                    <li className={`nav-item ${activeItem === 'FAQs' ? 'active' : ''}`}>
                                        <Link className="nav-link text-white" to="/FAQs" onClick={() => handleItemClick('FAQs')}>
                                            FAQs
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="collapse navbar-collapse justify-content-end">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <h5 className="my-2">{user}</h5>
                            </li>
                            <li className="nav-item ml-md-3">
                                {authToken ? (
                                    <button className="btn btn-danger" onClick={handleLogout}>
                                        <i className="bx bxs-user-circle mr-1"></i> Log Out
                                    </button>
                                ) : (
                                    <Link className="btn btn-primary" to="/login">
                                        <i className="bx bxs-user-circle"></i> Log In
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="search-bar d-block d-md-none">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        </div>
                    </div>
                </div>
            </div>
            <nav id="sidebar" className={sidebarActive ? 'active' : ''}>
                <div className="sidebar-header">
                    <div className="container">
                        <div className="row align-items-left">
                            <div className="col-4 text-left">
                                <button type="button" id="sidebarCollapseX" className="btn btn-link" onClick={handleSidebarCollapseX}>
                                    <i className="bx bx-x icon-single"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="list-unstyled components links mb-3">
                    <li className={`${activeItem === 'Home' ? 'active' : ''}`}>
                        <Link to="/" onClick={() => handleItemClick('Home')}>
                            Home
                        </Link>
                    </li>
                    <li className={` ${activeItem === 'Products' ? 'active' : ''}`}>
                        <Link to="/desktop" onClick={() => handleItemClick('Products')}>
                            Desktop                        </Link>
                    </li>
                    <li className={` ${activeItem === 'Login' ? 'active' : ''}`}>
                        {authToken ? (
                            <Link to="/products" onClick={() => handleLogout('Log out')}>
                                Log out
                            </Link>

                        ) : (
                            <Link to="/login" onClick={() => handleItemClick('log in')}>
                                Log In
                            </Link>
                        )}
                    </li>
                </ul>
                <ul className="social-icons">
                    <li><a href="/f" target="_blank" title="d"><i className="bx bxl-facebook-square"></i></a></li>
                    <li><a href="/j" target="_blank" title="d"><i className="bx bxl-twitter"></i></a></li>
                    <li><a href="/d" target="_blank" title="d"><i className="bx bxl-linkedin"></i></a></li>
                    <li><a href="/f" target="_blank" title="d"><i className="bx bxl-instagram"></i></a></li>
                </ul>
            </nav>
           
        </div>
    )
}
export default Navbar;