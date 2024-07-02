import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import ForwardArrow from '../assets/icon/ForwardArrow';
import NextArrow from '../assets/icon/NextArrow';
import NavBar from './NavBar';
import Footer from './Footer';
import PersonalChart from '../component/PersonalChart';
import clothData from '../component/Data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ButtonComponent from '../component/ButtonComponent';
import Chat from '../assets/icon/Chat';
import { useParams } from 'react-router-dom';
import SendMsg from '../assets/icon/SendMsg';
import ToastifyComponent from '../component/toastifyComponent'; // Adjust the import path


function ProductDetails() {
    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState(clothData[0]);
    const toastRef = useRef(null);
    const textareaRef = useRef(null);
    const popupRef = useRef(null);


    const handleNavigate = (path) => {
        navigate(path);
    };

    const { id } = useParams();
    const product = clothData.find(item => item.id === parseInt(id));


    // const relatedProducts = clothData.filter(
    //     (item) => item.age === selectedProduct.age && item.id !== selectedProduct.id
    // );

    


    const handleSendClick = () => {
        // Get message from textarea
        const message = textareaRef.current.value.trim();
        console.log('Message:', message);

        // Clear textarea
        textareaRef.current.value = '';

        // Show toast notification
        if (toastRef.current) {
            toastRef.current.notify();
        }

        // Open popup for review submission confirmation
        if (popupRef.current) {
            popupRef.current.openPopup();
        }
    };


    // const checkoutProduct = () => {
    //     dispatch(clearmessage());
    //     navigate('');
    // };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        afterChange: (index) => setSelectedProduct(clothData[index]) // Update selectedProduct on slide change
    };

    const relatedSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 878,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
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
        <section>
            <div className="container">
                <NavBar />
                <div className="productdetails-head">
                    <div className="product-box twel-textcolour six-background">
                        <div onClick={() => handleNavigate('/')} className="product-box-text">
                            <h5>Home</h5>
                            <ForwardArrow />
                        </div>
                        <div onClick={() => handleNavigate('/Products')} className="product-box-text">
                            <h5>Featured store</h5>
                            <ForwardArrow />
                        </div>
                        <div className="product-box-text">
                            <h5>Product detail</h5>
                            <ForwardArrow />
                        </div>
                    </div>

                    <div className="product-details">
                        <Slider className="related-shop-1" {...settings}>
                            {clothData.map((product) => (
                                <div key={product.id} onClick={() => setSelectedProduct(product)} className="related-product-card-1">
                                    <img className='img-height' src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '25px' }} />
                                    <div className="card-body">
                                        <h3>{product.name}</h3>
                                        <div className="card-description">
                                            <p>Gender: {product.gender}</p>
                                            <p>Age: {product.age}</p>
                                        </div>
                                        <div className="card-price">
                                            <p>Price: {product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div className="related-products">
                        <h3>Related Products</h3>
                        <Slider className="adjusrelated-card" {...relatedSettings}>
                            {clothData.map((item) => (
                                <div key={item.id} className="related-product-card">
                                    <div className="card-details">
                                        <img src={item.image} alt={item.name} style={{ width: '100%', height: '364px', borderRadius: '25px' }} />
                                        <div className="card-body">
                                            <h3 className="card-title">{item.name}</h3>
                                            <div className="card-description">
                                                <p className="ten-textcolour">Gender: <span style={{ fontStyle: 'normal', fontWeight: '700' }}>{item.gender}</span></p>
                                                <p className="ten-textcolour">Age: <span style={{ fontStyle: 'normal', fontWeight: '700' }}>{item.age}</span></p>
                                            </div>
                                            <div className="card-icon-flex">
                                                <div className="card-price">
                                                    <p className="card-price">{item.price}</p>
                                                    <p className="card-rating ten-textcolour" style={{ fontStyle: 'italic' }}>Rating: <span style={{ fontStyle: 'normal', fontWeight: '700' }}>{item.rating}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

            <div className="products-data-background">
                <div className="container">
                    <div className="productdetails-head-flex">
                        <div className="productdetails-head-flex-1">
                            <div className="product-data-head">
                                <div className="product-data-head-sub">
                                    <h6>Store Number: {selectedProduct.storenumber}</h6>
                                    <h2>{selectedProduct.name}</h2>
                                    <h4 className='first-text-colour'>{selectedProduct.price}</h4>
                                    <div className="product-data-btn-1">
                                        <ButtonComponent
                                            customClass="product-data-btn first-button-background-colour"
                                            label="Contact us"
                                            width={"142px"}
                                            height={"44px"}
                                        />
                                        <ButtonComponent
                                            customClass="product-data-btn-sub"
                                            label={
                                                <>
                                                    <Chat />
                                                    Chat with Store owner
                                                </>
                                            }
                                            width={"268px"}
                                            height={"44px"}
                                        />
                                    </div>
                                </div>
                                <div className="product-data-head-sub-1">
                                    <div className="data-text-align">
                                        <h5>Store Number</h5>
                                        <span>{selectedProduct.storenumber}</span>
                                    </div>

                                    <div className="data-line-1"></div>

                                    <div className="data-text-align">
                                        <h5>Gender </h5>
                                        <span>{selectedProduct.gender}</span>
                                    </div>

                                    <div className="data-line-1"></div>

                                    <div className="data-text-align">
                                        <h5>Age </h5>
                                        <span>{selectedProduct.age}</span>
                                    </div>

                                    <div className="data-line-1"></div>

                                    <div className="data-text-align">
                                        <h5>Size </h5>
                                        <span>{selectedProduct.availableSizes}</span>
                                    </div>

                                    <div className="data-line-1"></div>

                                    <div className="data-text-align">
                                        <h5>Color </h5>
                                        <span>{selectedProduct.colorOptions}</span>
                                    </div>

                                    <div className="data-line-1"></div>

                                    <div className="data-text-align">
                                        <h5>Measurment request </h5>
                                        <span>Yes</span>
                                    </div>

                                    <div className="data-line-1"></div>

                                    <div className="data-text-align">
                                        <h5>Location </h5>
                                        <span>{selectedProduct.location}</span>
                                    </div>

                                    <div className="data-line-1"></div>

                                    <div className="data-text-align">
                                        <h5>Published Date </h5>
                                        <span>{selectedProduct.publisheddate}</span>
                                    </div>

                                    <div className="data-line-1"></div>

                                    <div className="data-text-align">
                                        <h5>Additional Information </h5>
                                        <span>{selectedProduct.additionalinformation}</span>
                                    </div>

                                    <div className="data-line-1"></div>
                                </div>

                                <div className="product-data-btn-2">
                                    <ButtonComponent
                                        customClass="product-data-btn-3 first-button-background-colour"
                                        label="Add to cart"
                                        width={"275px"}
                                        height={"68px"}
                                    />
                                    <ButtonComponent
                                        customClass="product-data-btn-sub-1  glow-on-hover"
                                        label="Pay immediately"
                                        width={"275px"}
                                        height={"68px"}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="product-data-flex-2">
                            <h2>Leave a complaint or review</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.</p>
                            <div className="message-input-container">
                                <textarea
                                    ref={textareaRef}
                                    className="message-input"
                                    placeholder="Enter your message..."
                                    maxLength="300" /* Set max characters */
                                    rows="4" /* Set the number of rows for the textarea */
                                ></textarea>

                                <div className="send-icon" onClick={handleSendClick}>
                                    <SendMsg />
                                </div>

                                {/* Toast notification component */}
                                <ToastifyComponent
                                    ref={toastRef}
                                    headerMessage="Success"
                                    paragraphMessage="Your message was sent successfully."
                                    buttonLabel=""
                                    customClass="toastify-center" // Custom class for centering on screen
                                    width="auto" // Adjust width as needed
                                    height="auto" // Auto height
                                    type="success"
                                />

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <PersonalChart />
            <div className="line-home"></div>
            <Footer />
        </section>
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow`}
            style={{ ...style }}
            onClick={onClick}
        >
            <div className="arrow-center"><ForwardArrow /></div>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow`}
            style={{ ...style }}
            onClick={onClick}
        >
            <div className="arrow-center-2"><NextArrow /></div>
        </div>
    );
}

export default ProductDetails;
