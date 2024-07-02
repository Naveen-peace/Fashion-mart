import React, { useState } from 'react';
import clothData from '../component/Data'; // Adjust the path according to your file structure;
import ShopWhite from '../assets/icon/ShopWhite';
import ButtonComponent from '../component/ButtonComponent';
import { useNavigate } from 'react-router-dom';


function Featured() {
    const [selectedFilter, setSelectedFilter] = useState({
        gender: '',
        age: '',
        priceRange: { min: '', max: '' },
        size: [],
        selectedColor: ''
    });

    const [cartItems, setCartItems] = useState([]); // State for cart items

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/Products');
    };

    const handleViewDetails = (id) => {
        navigate('Productdetails');
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

    const handleAddToCart = (item) => {
        const isInCart = cartItems.find(cartItem => cartItem.id === item.id);
        if (isInCart) {
          toast.error('This item is already in your cart!');
          return;
        }
    
        setCartItems([...cartItems, item]);
        toast.success('Item added to cart!');
      };


    return (
        <section>
            <div className="container">
                <div className='filter-head'>
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
                        <div style={{display:'flex',gap:'10px'}}> 
                            <label><strong>Price Range :</strong></label>
                            <input
                                type="number"
                                name="min"
                                style={{width:'40px'}}
                                placeholder="Min"
                                value={selectedFilter.priceRange.min}
                                onChange={(e) => handleFilterChange('min', e.target.value)}
                            />
                            <input
                                type="number"
                                name="max"
                                style={{width:'40px'}}
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

                <div className="correction-card-head">
                    <div className="correction-card">
                        <div className="featured-shops">
                            {filteredClothData.slice(0, 4).map(item => (
                                <div key={item.id} className="card">
                                    <img style={{ width: '100%', height: "364px", borderRadius: '25px' }} src={item.image} alt={item.name} className="card-image" />
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
                                    </div>
                                    <div onClick={handleViewDetails} className="btn-primary product-details-link">
                                            Details
                                        </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="feature-btn-center">
                        <ButtonComponent
                            customClass="features-about-btn glow-on-hover"
                            onClick={handleNavigate}
                            label="See all products"
                            width="200px"
                            height="68px"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Featured;
