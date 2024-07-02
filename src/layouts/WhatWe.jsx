import React from 'react';
import ShopLatest from '../assets/icon/ShopLatest.jsx';
import RequestStyle from '../assets/icon/RequestStyle.jsx';
import SellWears from '../assets/icon/SellWears.jsx';
import GetDelivery from '../assets/icon/GetDelivery.jsx';

function WhatWe() {
    return (
        <section>
            <div className="What-we-do-head">
                <h1>What we do</h1>
                <div className="what-shop-background">
                    <div className="what-blue-1"></div>
                    <div className="all-box">
                        <div className="shop-request">
                            <div className="shop-sub">
                                <div className="icon-background" style={{ background: '#fff2e7' }}>
                                    <ShopLatest />
                                </div>
                                <div className="shop-sub-text">
                                    <h3>Shop for latest wears</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.</p>
                                </div>
                            </div>

                            <div className="shop-sub">
                                <div className="icon-background" style={{ background: '#f0f0ff' }}>
                                    <RequestStyle />
                                </div>
                                <div className="shop-sub-text">
                                    <h3>Request for mesurment for a style</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.</p>
                                </div>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="sell-delivered">
                            <div className="shop-sub">
                                <div className="icon-background" style={{ background: '#e2f2ff' }}>
                                    <SellWears />
                                </div>
                                <div className="shop-sub-text">
                                    <h3>Sell yours wears</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.</p>
                                </div>
                            </div>

                            <div className="shop-sub">
                                <div className="icon-background" style={{ background: '#ecffe6' }}>
                                    <GetDelivery />
                                </div>
                                <div className="shop-sub-text">
                                    <h3>Get your wears delivered to you</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="what-blue-2"></div>
                </div>
            </div>
        </section>
    );
}

export default WhatWe;
