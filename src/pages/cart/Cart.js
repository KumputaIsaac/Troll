import React from 'react'
import './cart.css'
import shoe from '../../images/2.png'
import coke from '../../images/1.png'
import hand from '../../images/3.png'
import { useHistory } from "react-router-dom";


import back from '../../images/back.svg'



const Cart = ({cart,setcart}) => {
    const products = 
    [
        {
            photo: hand,
            name:'Free sample small tote bag gucci fen...',
            price:'₦900 - ₦1,500',
            pieces:'MOQ 4 (pieces)',
            location: 'Lagos', 
            quantity:0,
            description: 'Get comfy and comfortable with the new 2019 designer sneaker for all your events',
            id:1
        },
        {
            photo: shoe,
            name:'Nice Vans Sneakers',
            price:'₦1900 - ₦45,500',
            id:2,
            location: 'Lagos', 
            quantity:0,
            description: 'Get comfy and comfortable with the new 2019 designer sneaker for all your events',
            pieces:'MOQ 4 (pieces)'
        },
        {
            photo: coke,
            name:'Free sample small drink',
            price:'₦900 - ₦1,500',
            id:3,
            location: 'Lagos', 
            quantity:0,
            description: 'Get comfy and comfortable with the new 2019 designer sneaker for all your events',
            pieces:'MOQ 4 (pieces)'
        },
    ]
    

    let history = useHistory();

    const goToPreviousPath = (e) => {
        e.preventDefault();
       history.goBack()
    }

    const itemsPrice = cart.reduce((a, c) => a + c.quantity * c.price, 0);

    const onRemove = (product) => {
        const exist = cart.find((x) => x.id === product.id);
        if (exist.quantity === 1) {
          setcart(cart.filter((x) => x.id !== product.id));
        } else {
          setcart(
            cart.map((x) =>
              x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
            )
          );
        }
      };

    const onAdd = (product) => {
        const exist = cart.find((x) => x.id === product.id);
        if (exist) {
          setcart(
            cart.map((x) =>
              x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
            )
          );
        } else {
          setcart([...cart, { ...product, quantity: 1 }]);
        }
      };


    const handleRemove=(id)=> {
        const newList = cart.filter((item) => item.id !== id)
        setcart(newList)
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
                                    <p>N {product.price}</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="deletecounter">
                                <div onClick={() => handleRemove(product.id)} className="delete">
                                    <div className="icon"><i className="fas fa-trash"></i></div>
                                    <p  className="text">Delete</p>
                                </div>
                                <div className="counter">
                                    <div onClick={() => onRemove(product)} className="plus">-</div>
                                    <div className="text">{product.quantity}</div>
                                    <div className="plus" onClick={()=> onAdd(product)}>+</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="subtotalcheckout">
                <div className="subtotal">
                    <p>Subtotal</p>
                    <p>N {itemsPrice}</p>
                </div>
                <div className="total">
                    <p>Total</p>
                    <p>N {itemsPrice}</p>
                </div>

                <button>Checkout</button>
            </div>

            <div className="recentlyviewed">
                <div className="text">
                    <p>Recently viewed</p>
                    <p>View all</p>
                </div>

                
                <div style={{marginBottom:'0px',padding:'0',fontSize: '12px'}} className="theproducts">
                    {
                        
                        products.map((product,i)=>(
                                <div className="product" key={i}>
                                    <div className="image"><img src={product.photo} alt=""/></div>
                                    <p className="fool">{product.name}</p>
                                    <p className="text">N {product.price}</p>
                                    <p>{product.pieces}</p>

                                </div>
                        ))
                    }
                </div>
                
                
                
            </div>
        </div>
    )
}

export default Cart
