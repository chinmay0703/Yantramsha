import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';
function OrderSummary() {

    const [option1, setOption1] = useState("");
    const [option1Price, setOption1Price] = useState("");
    const [option2, setOption2] = useState("");
    const [option2Price, setOption2Price] = useState("");
    const [option3, setOption3] = useState("");
    const [option3Price, setOption3Price] = useState("");
    const [total, setTotal] = useState(0);
    const activeItem = "OrderSummary";
    const setActiveItem = (itemName) => {
        console.log(`Setting active item to ${itemName}`);
    };

    useEffect(() => {
        const op1 = localStorage.getItem('option1') || "";
        const op1p = localStorage.getItem('option1Price') || "";
        const op2 = localStorage.getItem('option2') || "";
        const op2p = localStorage.getItem('option2Price') || "";
        const op3 = localStorage.getItem('option3') || "";
        const op3p = localStorage.getItem('option3Price') || "";
        setOption1(op1);
        setOption1Price(op1p);
        setOption2(op2);
        setOption2Price(op2p);
        setOption3(op3);
        setOption3Price(op3p);
        const totalPrice = parseFloat(op1p) + parseFloat(op2p) + parseFloat(op3p);
        setTotal(totalPrice);
    }, []);

    return (
        <div className='App'>
            <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />
            <div>
                <h2 className='py-3'>Order Summary</h2>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Option</th>
                            <th>Item</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Graphics</td>
                            <td>{option1}</td>
                            <td>{option1Price}</td>
                        </tr>
                        <tr>
                            <td>Motherboard</td>
                            <td>{option2}</td>
                            <td>{option2Price}</td>
                        </tr>
                        <tr>
                            <td>Memory</td>
                            <td>{option3}</td>
                            <td>{option3Price}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Total Amount</td>
                            <td>{total}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><Link to={"/bill"}><button className='btn btn-primary'>Pay Now</button></Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
}
export default OrderSummary;
