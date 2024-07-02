import React from 'react'
import ButtonComponent from './ButtonComponent'
import Thank from '../assets/image/thank-you.png'
import { useNavigate } from 'react-router-dom';
import NavBar from '../layouts/NavBar';

function ThankYou() {

  const navigate = useNavigate();

  const handleNavigate= () =>{
    navigate ('/*')
  }

  return (
    <div className='thank-background'>
      <NavBar/>
      <div className="container">
        <div className="thankyou-head">
          <img src={Thank} alt="" />
          <h2>Thank for your order! </h2>
          <div className="feature-btn-center">
            <ButtonComponent
              customClass="features-about-btn glow-on-hover"
              onClick={handleNavigate}
              label="Continue Shopping"
              width="220px"
              height="68px"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThankYou