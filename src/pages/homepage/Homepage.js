import './homepage.css';
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
import { useEffect, useState } from 'react';



const Homepage = ({setitemdetails,cartnumber}) => {
    const products = 
    [
        {
            photo: hand,
            name:'Free sample small tote bag gucci fen...',
            price:1500,
            pieces:'MOQ 4 (pieces)',
            location: 'Lagos', 
            quantity:0,
            description: 'Get comfy and comfortable with the new 2019 designer sneaker for all your events',
            id:1
        },
        {
            photo: shoe,
            name:'Nice Vans Sneakers',
            price:45500,
            id:2,
            location: 'Lagos', 
            quantity:0,
            description: 'Get comfy and comfortable with the new 2019 designer sneaker for all your events',
            pieces:'MOQ 4 (pieces)'
        },
        {
            photo: coke,
            name:'Free sample small drink',
            price:1500,
            id:3,
            location: 'Lagos', 
            quantity:0,
            description: 'Get comfy and comfortable with the new 2019 designer sneaker for all your events',
            pieces:'MOQ 4 (pieces)'
        },
        {
            photo: nylon,
            name:'Free sample small nylon',
            price:2500,
            id:4,
            quantity:0,
            location: 'Lagos', 
            description: 'Get comfy and comfortable with the new 2019 designer sneaker for all your events',
            pieces:'MOQ 4 (pieces)'
        },
        {
            photo: food,
            name:'Free sample small food',
            price:10500,
            id:5,
            quantity:0,
            location: 'Lagos', 
            description: 'Get comfy and comfortable with the new 2019 designer sneaker for all your events',
            pieces:'MOQ 4 (pieces)'
        },
        {
            photo: box,
            name:'Free sample small box',
            price: 11500,
            quantity:0,
            id:6,
            location: 'Lagos', 
            description: 'Get comfy and comfortable with the new 2019 designer sneaker for all your events',
            pieces:'MOQ 4 (pieces)'
        }
    ]

    const [search, setsearch] = useState('')
    const [query, setquery] = useState('')
    const [realproduct, setrealproduct] = useState([])

    useEffect(() => {
        const filteredproducts = products.filter(product =>{
            return  product.name.toLowerCase().includes(search.toLowerCase());
          })
    
          setrealproduct(filteredproducts)
           // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])
    

    const handlechange=(e)=>{
        setquery(e.target.value)
    }

    onclick=()=>{
        setsearch(query)
    }




    return (
        <div>
           
            
            <div className="trollbasket">
                <p>Trollbasket</p>
            </div>
            <div className="lagosorder">
                <div className="lagos">
                    <div className="location"><i className="fas fa-map-marker-alt"></i></div>
                    <div className="lagostext"><p>Lagos</p></div>
                    <div className="dropdown"><i className="fas fa-caret-down"></i></div>
                </div>
                <div className="vl"></div>
                <div className="order">
                    <div className="calender"><i className="fas fa-calendar-day"></i></div>
                    <div className="myorder"><p>My Orders</p></div>
                </div>
                <div className="vl"></div>
                <Link to='/cart'>
                    <div className="cart">
                        <div className="carticon">
                            <div className="cartnumber">{cartnumber}</div>
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                        <div className="carttext"><p>Cart</p></div>
                    </div>
                </Link>
                
            </div>
            <div className="search">
                <input onChange={handlechange} type="text" placeholder="Search merchbuy"/>
                <div onClick={onclick} className="searchicon"><i className="fas fa-search"></i></div>
            </div>

            <div className="card">
                <div className="left"></div>
                <div className="havingissues">
                        <div className="smallballs">
                            <div className="small"></div>
                            <div className="small"></div>
                            <div className="small"></div>
                            <div className="small"></div>
                            <div className="small"></div>
                            <div className="small"></div>
                            <div className="small"></div>
                            <div className="small"></div>
                        </div>
                    <div className="havingtext">
                        <p>Having any <span>issues </span>  with <br/> your order? </p>
                    </div>
                    <div className="contactus">Contact Us</div>
                </div>
                <div className="right"></div>
                
            </div>

            <div className="pprs">
                <div className="pc">
                    <div className="book"><i className="fas fa-book"></i></div>
                    <div className="text"><p>Product <br/> categories</p></div>
                </div>
                <div className="pp">
                    <div className="book"><i className="fas fa-fire"></i></div>
                    <div className="text"><p>Popular <br/> Products</p></div>
                </div>
                <div className="rp">
                    <div className="book"><i className="far fa-thumbs-up"></i></div>
                    <div className="text"><p>Recommended <br/> Products</p></div>
                </div>
                <div className="shop">
                    <div className="book"><i className="fas fa-store"></i></div>
                    <div className="text"><p>Shops</p></div>
                </div>
            </div>

            <div className="theproducts">
                    {
                        
                        realproduct.map((product,i)=>(
                            <Link to='/detail'>
                                <div onClick={()=>setitemdetails(product)} className="product" key={i}>
                                    <div className="image"><img src={product.photo} alt=""/></div>
                                    <p className="fool">{product.name}</p>
                                    <p className="text">N {product.price}</p>
                                    <p>{product.pieces}</p>

                                </div>
                            </Link>
                        ))
                    }

            </div>

            <div className="navbar">
                <div className="nav">
                    <div className="icon"><img src={home} alt=""/></div>
                    <div className="text">Home</div>
                </div>
                <div className="nav">
                    <div className="icon"><img src={buy} alt=""/></div>
                    <div className="text">Buy</div>
                </div>
                <div className="nav">
                    <div className="icon"><img src={deal} alt=""/></div>
                    <div className="text">Deals</div>
                </div>
                <div className="nav">
                    <div className="icon"><i className="fas fa-wallet"></i></div>
                    <div className="text">Wallet</div>
                </div>
                <div className="nav">
                    <div className="icon"><i className="fas fa-bars"></i></div>
                    <div className="text">Menu</div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
