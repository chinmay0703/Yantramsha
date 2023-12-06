import React, { useState } from 'react';
import 'react-credit-cards/es/styles-compiled.css';
import Cards from 'react-credit-cards';
import './Bill.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';

function Bill() {
   
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Ensure that the card number input only accepts 16 digits
    if (name === 'number' && value.length <= 16) {
      setCardNumber(value);
    } else {
      // Handle other input changes
      switch (name) {
        case 'expiry':
          setExpiry(value);
          break;
        case 'cvc':
          setCvc(value);
          break;
        case 'name':
          setName(value);
          break;
        default:
          break;
      }
    }
  };
  const activeItem = "Bill";

  const setActiveItem = (itemName) => {

    console.log(`Setting active item to ${itemName}`);
  };

  return (
    <div className='App'>
            <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />
    <div className="container align-center d-flex justify-content-center col-sm-12 py-5">
      <div className='row py-5'>
        <div className='col-sm-6'>
          <form >
            <div className="well">
              <div className='row'>
                <div className='col-sm-8'>
                  <div className="form-group">
                    <label>Credit Card Number </label>
                    <input
                      type="text"
                      name="number"
                      className="form-control"
                      value={cardNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className='col-sm-4'>
                  <div className="form-group">
                    <label>Expiration</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      name="expiry"
                      className="form-control"
                      value={expiry}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>CVV </label>
                    <input
                      type="text"
                      name="cvc"
                      className="form-control"
                      value={cvc}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-group py-3">
                  <button type="button w-50" className="btn btn-primary">
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className='col-sm-6'>
          <div className=' mx-4'>
            <Cards
              number={cardNumber}
              name={name}
              expiry={expiry}
              cvc={cvc}
              focused="number"
            />
          </div>
        </div>
      </div>
    </div>
<Footer/>
    </div>

  );
}

export default Bill;
