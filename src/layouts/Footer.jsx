import React from 'react'
import FashionBrand from '../assets/icon/BlackFashion'
import Instagram from '../assets/icon/Instagram'
import Facebook from '../assets/icon/Facebook'
import Youtube from '../assets/icon/Youtube'

function Footer() {
  return (
    <footer>
      <div className="footer-head">
        <div className="footer-1">
          <h1><FashionBrand /> FashionForAll</h1>
          <h5>FashionForAll. Vestibulum non est nisl. Donec eget sodales nisl. Donec ut velit erat. </h5>
          <p>© 2022 All rights reserved.</p>
        </div>
        <div className="footer-sub-head">
          <div className="footer-2">
            <p>Explore</p>
            <p>Product</p>
            <p>Sell your product</p>
            <p>Pricing</p>
            <p  style={{margin:'0px'}}>Reviews</p>
          </div>
          <div className="footer-3">
            <p>Privacy policy</p>
            <p>Legal</p>
            <p>Terms of service</p>
            <p>Help center</p>
            <p className='eleven-textcolour' style={{fontWeight:'700'}}>Social Media</p>
            <div className="footer-3-icons">
              <a href="https://www.instagram.com/"><Instagram /></a>
              <a href="https://www.facebook.com/"><Facebook /></a>
              <a href="https://www.youtube.com/"><Youtube /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer