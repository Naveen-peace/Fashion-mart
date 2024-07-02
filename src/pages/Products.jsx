import React, { useRef, useState, useContext } from 'react';
import NavBar from '../layouts/NavBar';
import Footer from '../layouts/Footer';
import ForwardArrow from '../assets/icon/ForwardArrow';
import TrendyStyles from '../component/TrendyStyles';
import clothData from '../component/Data';
import ShopWhite from '../assets/icon/ShopWhite';
import PersonalChart from '../component/PersonalChart';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from '../contex/CartContext';

function Products() {
    const navigate = useNavigate();
    const { cartItems, addToCart } = useContext(CartContext);
    const [selectedFilter, setSelectedFilter] = useState({
        gender: '',
        age: '',
        priceRange: { min: '', max: '' },
        size: [],
        selectedColor: ''
    });

    const featuredStoreRef = useRef(null);

    const handleNavigate = (path) => {
        navigate(path);
    };


    const handleViewDetails = (id) => {
        navigate('/Productdetails');
    };

    const handleScrollToFeaturedStore = () => {
        if (featuredStoreRef.current) {
            featuredStoreRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleAddToCart = (item) => {
        const isInCart = cartItems.find(cartItem => cartItem.id === item.id);
        if (isInCart) {
            toast.error("This item is already in your cart!");
            return;
        }

        addToCart(item);
        toast.success("Item added to cart!");
    };

    const handleFilterChange = (name, value) => {
        setSelectedFilter(prevFilter => {
            if (name === 'min' || name === 'max') {
                return {
                    ...prevFilter,
                    priceRange: {
                        ...prevFilter.priceRange,
                        [name]: value
                    }
                };
            } else if (name === 'size') {
                const newSize = prevFilter.size.includes(value)
                    ? prevFilter.size.filter(s => s !== value)
                    : [...prevFilter.size, value];
                return {
                    ...prevFilter,
                    size: newSize
                };
            } else {
                return {
                    ...prevFilter,
                    [name]: value
                };
            }
        });
    };

    const filteredClothData = clothData.filter(item => {
        const { gender, age, priceRange, size, selectedColor } = selectedFilter;

        if (gender && gender !== 'all' && item.gender !== gender) {
            return false;
        }
        if (age && age !== 'all' && !item.age.includes(age)) {
            return false;
        }
        if (priceRange.min && priceRange.max) {
            const price = parseFloat(item.price.replace(/[^\d.]/g, ''));
            if (price < parseFloat(priceRange.min) || price > parseFloat(priceRange.max)) {
                return false;
            }
        }
        if (size.length > 0) {
            if (!size.some(s => item.availableSizes.includes(s))) {
                return false;
            }
        }
        if (selectedColor && selectedColor !== '') {
            if (!item.colorOptions.includes(selectedColor)) {
                return false;
            }
        }
        return true;
    });

    return (
        <section>
            <div className="container">
                <NavBar />
                <div className="products-head">
                    <div className="product-box twel-textcolour six-background{ ">
                        <div onClick={() => handleNavigate('/')} className="product-box-text">
                            <h5>Home</h5>
                            <ForwardArrow />
                        </div>
                        <div onClick={handleScrollToFeaturedStore} className="product-box-text">
                            <h5>Featured store</h5>
                            <ForwardArrow />
                        </div>
                        <div onClick={() => handleNavigate('/Productdetails')} className="product-box-text">
                            <h5>Product detail</h5>
                            <ForwardArrow />
                        </div>
                    </div>

                    {/* trendy */}
                    <div className="trendy-product">
                        <TrendyStyles />
                    </div>
                    {/* trendy */}

                    {/* feature */}
                    <div ref={featuredStoreRef} className='filter-head'>
                        <div className="featured-head">
                            <h2 className="feature-head-text">Our featured store</h2>
                            <div className="feature-head-texttwo">
                                <h3 className='first-text-colour'>Ankara styles<span className='five-text-colour'>Male & Female</span></h3>
                                <select className='first-text-colour' style={{ width: '167px', height: '44px', padding: '13.5px 10px 11.5px 20px' }}>
                                    <option className='first-text-colour' value="all">Sort by: Popular</option>
                                    <option className='first-text-colour' value="0-11">male</option>
                                    <option className='first-text-colour' value="Ranger">female</option>
                                </select>
                            </div>
                        </div>
                        <form className='correction-form'>
                            <div>
                                <label><strong>Gender :</strong></label>
                                <select value={selectedFilter.gender} onChange={(e) => handleFilterChange('gender', e.target.value)}>
                                    <option value="all">All Genders</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div>
                                <label><strong>Age Group :</strong></label>
                                <select value={selectedFilter.age} onChange={(e) => handleFilterChange('age', e.target.value)}>
                                    <option value="all">All Ages</option>
                                    <option value="0-11">Kids</option>
                                    <option value="Ranges">Ranges</option>
                                </select>
                            </div>
                            <div>
                                <label><strong>Price Range :</strong></label>
                                <input
                                    type="number"
                                    name="min"
                                    placeholder="Min"
                                    value={selectedFilter.priceRange.min}
                                    onChange={(e) => handleFilterChange('min', e.target.value)}
                                />
                                <input
                                    type="number"
                                    name="max"
                                    placeholder="Max"
                                    value={selectedFilter.priceRange.max}
                                    onChange={(e) => handleFilterChange('max', e.target.value)}
                                />
                            </div>
                            <div className='size-flex'>
                                <label><strong>Size :</strong></label>
                                <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="small"
                                            checked={selectedFilter.size.includes('small')}
                                            onChange={(e) => handleFilterChange('size', e.target.value)}
                                        />
                                        Small
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="medium"
                                            checked={selectedFilter.size.includes('medium')}
                                            onChange={(e) => handleFilterChange('size', e.target.value)}
                                        />
                                        Medium
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="large"
                                            checked={selectedFilter.size.includes('large')}
                                            onChange={(e) => handleFilterChange('size', e.target.value)}
                                        />
                                        Large
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="xtraLarge"
                                            checked={selectedFilter.size.includes('xtraLarge')}
                                            onChange={(e) => handleFilterChange('size', e.target.value)}
                                        />
                                        XtraLarge
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="feature-margin-product">
                        <div className="correction-card">
                            <div className="featured-shops">
                                {filteredClothData.map(item => (
                                    <div key={item.id} className="card">
                                        <img  style={{ width: '100%', height: "364px", borderRadius: '25px' }} src={item.image} alt={item.name} className="card-image" />
                                        <div className="card-body">
                                            <h3 className="card-title">{item.name}</h3>
                                            <div className="card-description">
                                                <p className="ten-textcolour">Gene: <span style={{ fontStyle: 'normal', fontWeight: '700' }}>{item.gender}</span></p>
                                                <p className="ten-textcolour">Age: <span style={{ fontStyle: 'normal', fontWeight: '700' }}>{item.age}</span></p>
                                            </div>
                                            <div className="card-icon-flex">
                                                <div className="card-price">
                                                    <p className="card-price">{item.price}</p>
                                                    <p className="card-rating ten-textcolour" style={{ fontStyle: 'italic' }}>Rating: <span style={{ fontStyle: 'normal', fontWeight: '700' }}>{item.rating}</span></p>
                                                </div>
                                                <button className='add-tocart-btn glow-on-hover' onClick={() => handleAddToCart(item)}>
                                                    <ShopWhite />
                                                </button>
                                            </div>
                                            {/* <p className="card-sizes">Available sizes: {item.availableSizes.join(', ')}</p> */}
                                            {/* <p className="card-colors">Color options: {item.colorOptions.join(', ')}</p> */}
                                        </div>
                                        <div onClick={handleViewDetails} className="btn-primary product-details-link">
                                            Details
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                    {/* feature */}
                </div>
            </div>

            {/* personal-chart */}
            <PersonalChart />
            {/* personal-chart */}

            <div className="line-home"></div>

            <Footer />
            <ToastContainer />
        </section>
    );
}

export default Products;
