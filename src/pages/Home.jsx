import React from 'react'
import NavBar from '../layouts/NavBar.jsx'
import Footer from '../layouts/Footer.jsx'
import Tick from '../assets/icon/Tick.jsx'
import ButtonComponent from '../component/ButtonComponent.jsx'
import Play from '../assets/icon/PlayRed.jsx'
import Heroimage from '../assets/image/hero-image.png'
import Next from '../assets/icon/Next.jsx'
import Navlogo from '../assets/icon/FashionBrand.jsx'
import Zviolet from '../assets/icon/Zviolet.jsx'
import Bluefashion from '../assets/icon/BlueFashion.jsx'
import Zgold from '../assets/icon/Zgold.jsx'
import Featured from '../layouts/Featured.jsx'
import TrendyStyles from '../component/TrendyStyles.jsx'
import Ceo from '../assets/image/ceo.png'

import WhatWe from '../layouts/WhatWe.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import FrequentlyAsked from '../layouts/FrequentlyAsked.jsx'
import PersonalChart from '../component/PersonalChart.jsx'
import { useNavigate } from 'react-router-dom'
// import dottedline from '../assets/image/dottedline.png'


function Home() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  }


  const settings = {
    auto: true,
    dots: true,
    infinite: true, 
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 778,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className=''>
      <div className="hero-background second-background">
        <NavBar />
        <div className="container">
          <div className="home-head">
            <div className="hero-text">
              <div className="hero-box four-textcolour third-backgroundcolour ">
                <div className="hero-box-text">
                  <Tick />
                  <h5>Free Register</h5>
                </div>
                <div className="hero-box-text">
                  <Tick />
                  <h5>Great Service</h5>
                </div>
                <div className="hero-box-text">
                  <Tick />
                  <h5>Easy payment</h5>
                </div>
              </div>
              <div className="hero-content">
                <h2>Getting the best and latest style has never</h2>
                <h1 className='first-text-colour'> been easier!</h1>
                <h5 className='five-text-colour'><span style={{ fontWeight: '700' }}>FashionForAll</span> is a platform that helps to make fashion accessible to all. It brings fashion to your doorstep!</h5>
                <div className="hero-content-btn">
                  <ButtonComponent
                    customClass="home-first-btn second-bordercolour first-button-background-colour"
                    onClick={() => handleNavigate('/Products')}
                    label={
                      <>

                        <span className='third-text-colour'>Shop collections</span>
                      </>
                    }
                    width={"275px"}
                    height={"68px"}
                  />
                  <ButtonComponent
                    customClass="home-second-btn second-bordercolour second-button-background-colour"
                    label={
                      <>
                        <Play />
                        <span className='first-text-colour'>Watch reviews</span>
                      </>
                    }
                    width={"162px"}
                    height={"38px"}
                  />
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img src={Heroimage} alt="heroimage" />
              <div className="dottedline">
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* hero */}

      {/* fashion for all */}
      <div className="fashion-head">
        <div className="fashion-brand four-backgroundcolour">
          <div className="fashion-brand-1">
            <div className="brand-text">Over<span className='first-text-colour'>32k+</span>fashion gurus are growing their brands with FashionForAll.</div>
            <div className="brand-symbol">
              <ul className='brand-symbol-1'>
                <li className='nine-textcolour' style={{ listStyle: "none" }}><Next />NextFashion</li>
                <li className='first-text-colour' style={{ listStyle: "none" }}><Navlogo />FashionForAll</li>
                <li className='six-textcolour' style={{ listStyle: "none" }}><Zviolet />Queen clozet</li>
                <li className='seven-textcolour' style={{ listStyle: "none" }}><Bluefashion />FashionForAll</li>
                <li className='eight-textcolour' style={{ listStyle: "none" }}><Zgold />Queen clozet</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* fashion for all */}

      {/* Featured */}
      <Featured />
      {/* Featured */}

      {/* trendy-style */}
      <div className="container">
        <TrendyStyles />
      </div>
      {/* trendy-style */}

      {/* What we do */}
      <WhatWe />
      {/* What-we-do */}

      {/* saying about us */}
      <div className="about-us-head">
        <h2>What people all over the world are saying about us</h2>
        <Slider {...settings} className="about-cards">
          <div className="card-wrapper">
            <div className="about-card-1">
              <h5>Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.</h5>
              <div className="liner-line-animation"></div>
              <div className="about-card-1flex">
                <img src={Ceo} alt="image" />
                <div className="about-card-name">
                  <h4>Name Surname</h4>
                  <p>CEO of Google</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="about-card-1">
              <h5>Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.</h5>
              <div className="liner-line-animation"></div>
              <div className="about-card-1flex">
                <img src={Ceo} alt="image" />
                <div className="about-card-name">
                  <h4>Name Surname</h4>
                  <p>CEO of Google</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="about-card-1">
              <h5>Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.</h5>
              <div className="liner-line-animation"></div>
              <div className="about-card-1flex">
                <img src={Ceo} alt="image" />
                <div className="about-card-name">
                  <h4>Name Surname</h4>
                  <p>CEO of Google</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <ButtonComponent
          customClass="saying-about-btn first-button-background-colour"
          label={
            <>
              See all review
            </>
          }
          width={"275px"}
          height={"68px"}
        />
      </div>
      {/* saying about us */}

      {/* Frequently asked */}
      <FrequentlyAsked />
      {/* Frequently asked */}

      {/* personal-chart */}
      <PersonalChart />
      {/* personal-chart */}

      <div className="line-home"></div>

      <Footer />
    </section>
  )
}

export default Home