import React from 'react'
import './detail.css'
import right from '../../images/right.svg'
import segun from '../../images/segun.svg'
import back from '../../images/back.svg'
import times from '../../images/times.svg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useState } from 'react'


const Detail = ({itemdetails,setcart,cart,cartnumber}) => {

    const [visible, setvisible] = useState(false)

    const handleaddclick =()=>{
        setvisible(true)
        // setcart(cart=>[...cart,itemdetails])

        const exist = cart.find((x) => x.id === itemdetails.id);
        if (exist) {
          setcart(
            cart.map((x) =>
              x.id === itemdetails.id ? { ...exist, quantity: exist.quantity + 1 } : x
            )
          );
        } else {
          setcart([...cart, { ...itemdetails, quantity: 1 }]);
        }

    }

    const handlecancel=()=>{
        setvisible(false)
    }
    return (
        <div>
            <div className="backdetails">
                <Link to='/'>
                    <div className="back"><img src={back} alt=""/></div>
                </Link>
                
                <div className="detail"><p>Details</p></div>
                <div className="searchcart">
                    <div className="search"><i className="fas fa-search"></i></div>
                    <Link to='/cart'>
                        <div className="cart">
                            <div className="cartnumber">{cartnumber}</div>
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='backgrounds'>
                {
                    visible?
                    <div className="successfully">
                        <p>Item added to cart successfully</p>
                        <img onClick={handlecancel} src={times} alt=""/>
                    </div>: ''
                }
                
                <div className="itemimage">
                    <img src={itemdetails.photo} alt=""/>
                </div>
                <div className="aboutimage">
                    <p >{itemdetails.name}</p>
                    <p >{itemdetails.description}</p>
                    <p >{itemdetails.price} <span>/Piece</span></p>
                </div>
            </div>
            
            <div className="productdescription">
                <p>Product Description</p>
                <img src={right} alt=""/>
            </div>
            
            <div className="reviewandall">
                <div className="ratingall">
                    <p>Review and Rating</p>
                    <p>View all</p>
                </div>
                <div className="ratingicon">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <p>3.0</p>
                </div>
                <div className="description">
                    <p>This is the best product I have used in a long while and the
                        size fits perfectly and I love the colors!!!!!</p>
                </div>
                <div className="segun">
                    <div className="image"><img src={segun} alt=""/></div>
                    <p className="text">Segun Arinze</p>
                </div>
            </div>

            <div className="addwish">
                <div onClick={handleaddclick} className="add"><p>Add to cart</p></div>
                <div className="add wish"><p>Wishlist</p></div>
            </div>
        </div>
    )
}

export default Detail
