import React, {useEffect} from 'react';
import "./Checkout.css";
//import { getBasketTotal } from './reducer';
import {useStateValue } from './StateProvider.js';
import CheckoutProduct from "./CheckoutProduct.js";
import {Link} from "react-router-dom";
import  Subtotal from  "./Subtotal.js"
function Checkout() {
    const [{basket,user},dispatch]=useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="banner_image" className="checkout_ad"/>
                {basket.length?<div>
                <h3>{user?"Hi,"+user?.email:null}</h3>
                    <h2 className="checkout_title">
                        Shopping Cart
                    </h2>
                    {basket.map((item)=>{
                        return <CheckoutProduct id={item.id} title={item.title} price={item.price} rating={item.rating} image={item.image} />
                    })}
                </div>:
                <div className="empty">
                    <img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="empty_cart"/>
                    <h2>Your Amazon Basket is empty</h2>
                    {user?null:<Link to="/login"><button className="login_btn">Sign in to your account</button></Link>}
                </div>
                }
            </div>
            <div className="checkout__right">
                   <Subtotal itemCount={basket.length}/>
            </div>
        </div>
    )
}

export default Checkout