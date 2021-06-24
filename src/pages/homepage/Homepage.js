import './homepage.css';

import React from 'react'
import shoe from '../../images/2.png'
import coke from '../../images/1.png'
import hand from '../../images/3.png'
import box from '../../images/4.png'
import food from '../../images/5.png'
import nylon from '../../images/6.png'
import home from '../../images/test4.svg'
import buy from '../../images/test1.svg'
import deal from '../../images/test2.svg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Homepage = () => {
    return (
        <div>
            <div class="phone">
                <div class="time">9:41</div>
                <div class="status">
                    <div class="bar"><i class="fas fa-signal"></i></div>
                    <div class="wifi"><i class="fas fa-wifi"></i></div>
                    <div class="battery"><i class="fas fa-battery-full"></i></div>
                </div>
            </div>
            <div class="trollbasket">
                <p>Trollbasket</p>
            </div>
            <div class="lagosorder">
                <div class="lagos">
                    <div class="location"><i class="fas fa-map-marker-alt"></i></div>
                    <div class="lagostext"><p>Lagos</p></div>
                    <div class="dropdown"><i class="fas fa-caret-down"></i></div>
                </div>
                <div class="vl"></div>
                <div class="order">
                    <div class="calender"><i class="fas fa-calendar-day"></i></div>
                    <div class="myorder"><p>My Orders</p></div>
                </div>
                <div class="vl"></div>
                <Link to='/cart'>
                    <div class="cart">
                        <div class="carticon"><i class="fas fa-shopping-cart"></i></div>
                        <div class="carttext"><p>Cart</p></div>
                    </div>
                </Link>
                
            </div>
            <div class="search">
                <input type="text" placeholder="Search merchbuy"/>
                <div class="searchicon"><i class="fas fa-search"></i></div>
            </div>

            <div class="card">
                <div class="left"></div>
                <div class="havingissues">
                    <div class="havingtext"><p>Having any <span>issues </span>  with <br/> your order? </p></div>
                    <div class="contactus">Contact Us</div>
                </div>
                <div class="right"></div>
            </div>

            <div class="pprs">
                <div class="pc">
                    <div class="book"><i class="fas fa-book"></i></div>
                    <div class="text"><p>Product <br/> categories</p></div>
                </div>
                <div class="pp">
                    <div class="book"><i class="fas fa-fire"></i></div>
                    <div class="text"><p>Popular <br/> Products</p></div>
                </div>
                <div class="rp">
                    <div class="book"><i class="far fa-thumbs-up"></i></div>
                    <div class="text"><p>Recommended <br/> Products</p></div>
                </div>
                <div class="shop">
                    <div class="book"><i class="fas fa-store"></i></div>
                    <div class="text"><p>Shops</p></div>
                </div>
            </div>

            <div class="theproducts">
                <Link to='/detail'>
                    <div class="product">
                        <div class="image"><img src={hand} alt=""/></div>
                        <p class="fool">Free sample small tote bag gucci fen...</p>
                        <p class="text">₦900 - ₦1,500</p>
                        <p>MOQ 4 (pieces)</p>

                    </div>
                </Link>
                
                <div class="product">
                    <div class="image"><img src={shoe} alt=""/></div>
                    <p class="fool">Free sample small tote bag gucci fen...</p>
                    <p class="text">₦900 - ₦1,500</p>
                    <p>MOQ 4 (pieces)</p>

                </div>
                <div class="product">
                    <div class="image"><img src={coke} alt=""/></div>
                    <p class="fool">Free sample small </p>
                    <p class="text">₦900 - ₦1,500</p>
                    <p>MOQ 4 (pieces)</p>

                </div>
                <div class="product">
                    <div class="image"><img src={nylon} alt=""/></div>
                    <p class="fool">Free sample small tote bag gucci fen...</p>
                    <p class="text">₦900 - ₦1,500</p>
                    <p>MOQ 4 (pieces)</p>

                </div>
                <div class="product">
                    <div class="image"><img src={food} alt=""/></div>
                    <p class="fool">Free sample small tote bag gucci fen...</p>
                    <p class="text">₦900 - ₦1,500</p>
                    <p>MOQ 4 (pieces)</p>

                </div>
                <div class="product">
                    <div class="image"><img src={box} alt=""/></div>
                    <p class="fool">Free sample small tote bag gucci fen...</p>
                    <p class="text">₦900 - ₦1,500</p>
                    <p>MOQ 4 (pieces)</p>
                </div>
            </div>

            <div class="navbar">
                <div class="nav">
                    <div class="icon"><img src={home} alt=""/></div>
                    <div class="text">Home</div>
                </div>
                <div class="nav">
                    <div class="icon"><img src={buy} alt=""/></div>
                    <div class="text">Buy</div>
                </div>
                <div class="nav">
                    <div class="icon"><img src={deal} alt=""/></div>
                    <div class="text">Deals</div>
                </div>
                <div class="nav">
                    <div class="icon"><i class="fas fa-wallet"></i></div>
                    <div class="text">Wallet</div>
                </div>
                <div class="nav">
                    <div class="icon"><i class="fas fa-bars"></i></div>
                    <div class="text">Menu</div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
