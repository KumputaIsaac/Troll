import React from 'react'
import './detail.css'
import right from '../../images/right.svg'
import segun from '../../images/segun.svg'
import back from '../../images/back.svg'
import times from '../../images/times.svg'
import shoe from '../../images/22.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useState } from 'react'


const Detail = () => {

    const [visible, setvisible] = useState(false)

    const handleaddclick =()=>{
        setvisible(true)
    }

    const handlecancel=()=>{
        setvisible(false)
    }
    return (
        <div>
            <div class="backdetails">
                <Link to='/'>
                    <div class="back"><img src={back} alt=""/></div>
                </Link>
                
                <div class="detail"><p>Details</p></div>
                <div class="searchcart">
                    <div class="search"><i class="fas fa-search"></i></div>
                    <Link to='/cart'>
                        <div class="cart"><i class="fas fa-shopping-cart"></i></div>
                    </Link>
                </div>
            </div>
            <div class='backgrounds'>
                {
                    visible?
                    <div class="successfully">
                        <p>Item added to cart successfully</p>
                        <img onClick={handlecancel} src={times} alt=""/>
                    </div>: ''
                }
                
                <div class="itemimage">
                    <img src={shoe} alt=""/>
                </div>
                <div class="aboutimage">
                    <p >NIKE Huararche 2019</p>
                    <p >Get comfy and comfortable with the new 2019 designer
                        sneaker for all your events </p>
                    <p >N45,000 - N80,000 <span>/Piece</span></p>
                </div>
            </div>
            
            <div class="productdescription">
                <p>Product Description</p>
                <img src={right} alt=""/>
            </div>
            
            <div class="reviewandall">
                <div class="ratingall">
                    <p>Review and Rating</p>
                    <p>View all</p>
                </div>
                <div class="ratingicon">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <p>3.0</p>
                </div>
                <div class="description">
                    <p>This is the best product I have used in a long while and the
                        size fits perfectly and I love the colors!!!!!</p>
                </div>
                <div class="segun">
                    <div class="image"><img src={segun} alt=""/></div>
                    <p class="text">Segun Arinze</p>
                </div>
            </div>

            <div class="addwish">
                <div onClick={handleaddclick} class="add"><p>Add to cart</p></div>
                <div class="add wish"><p>Wishlist</p></div>
            </div>
        </div>
    )
}

export default Detail
