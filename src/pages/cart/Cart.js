import React from 'react'
import './cart.css'
import { useHistory } from "react-router-dom";

import back from '../../images/back.svg'

const Cart = ({cart}) => {

    

    let history = useHistory();

    const goToPreviousPath = (e) => {
        e.preventDefault();
       history.goBack()
}
    return (
        <div>
            <div className="backcart">
                <div onClick={goToPreviousPath} className="back"><img src={back} alt=""/></div>
                <div><p>Carts</p></div>
                <div className="disguise"></div>
            </div>

            <div className="background">
                {
                    cart.map((product,i)=>(
                        <div className="coke" key={i}>
                            <div className="imagename">
                                <div className="image"><img src={product.photo} alt=""/></div>
                                <div className="text">
                                    <p>{product.name}</p>
                                    <p>{product.price}</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="deletecounter">
                                <div className="delete">
                                    <div className="icon"><i className="fas fa-trash"></i></div>
                                    <p className="text">Delete</p>
                                </div>
                                <div className="counter">
                                    <div className="plus">+</div>
                                    <div className="text">{product.quantity}</div>
                                    <div className="plus">-</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="subtotalcheckout">
                <div className="subtotal">
                    <p>Subtotal</p>
                    <p>N18,099.09</p>
                </div>
                <div className="total">
                    <p>Total</p>
                    <p>N18,099.09</p>
                </div>

                <button>Checkout</button>
            </div>

            <div className="recentlyviewed">
                <div className="text">
                    <p>Recently viewed</p>
                    <p>View all</p>
                </div>

                
                
            </div>
        </div>
    )
}

export default Cart
