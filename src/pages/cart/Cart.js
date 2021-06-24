import React from 'react'
import './cart.css'
import { useHistory } from "react-router-dom";

import back from '../../images/back.svg'
import coke from '../../images/1.png'
import vans from '../../images/vans.svg'

const Cart = () => {

    let history = useHistory();

    const goToPreviousPath = (e) => {
        e.preventDefault();
       history.goBack()
}
    return (
        <div>
            <div class="backcart">
                <div onClick={goToPreviousPath} class="back"><img src={back} alt=""/></div>
                <div><p>Carts</p></div>
                <div class="disguise"></div>
            </div>

            <div class="background">
                <div class="coke">
                    <div class="imagename">
                        <div class="image"><img src={coke} alt=""/></div>
                        <div class="text">
                            <p>2019 Vintage Coca Cola</p>
                            <p>N18,099.09</p>
                        </div>
                    </div>
                    <hr/>
                    <div class="deletecounter">
                        <div class="delete">
                            <div class="icon"><i class="fas fa-trash"></i></div>
                            <p class="text">Delete</p>
                        </div>
                        <div class="counter">
                            <div class="plus">+</div>
                            <div class="text">24</div>
                            <div class="plus">-</div>
                        </div>
                    </div>
                    

                </div>
                <div class="coke">
                    <div class="imagename">
                        <div class="image"><img src={vans} alt=""/></div>
                        <div class="text">
                            <p>NIKE Huararche 2019</p>
                            <p>N18,099.09</p>
                        </div>
                    </div>
                    <hr/>
                    <div class="deletecounter">
                        <div class="delete">
                            <div class="icon"><i class="fas fa-trash"></i></div>
                            <p class="text">Delete</p>
                        </div>
                        <div class="counter">
                            <div class="plus">+</div>
                            <div class="text">24</div>
                            <div class="plus">-</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="subtotalcheckout">
                <div class="subtotal">
                    <p>Subtotal</p>
                    <p>N18,099.09</p>
                </div>
                <div class="total">
                    <p>Total</p>
                    <p>N18,099.09</p>
                </div>

                <button>Checkout</button>
            </div>

            <div class="recentlyviewed">
                <div class="text">
                    <p>Recently viewed</p>
                    <p>View all</p>
                </div>

                
                
            </div>
        </div>
    )
}

export default Cart
