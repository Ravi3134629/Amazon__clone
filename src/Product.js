import React from 'react';
import "./Product.css";
import {useStateValue} from"./StateProvider.js";


function Product({id,title,image,price,rating}) {
    const [{basket},dispatch]=useStateValue();
    const addToBasket=()=>{
        dispatch({
            // How we manupulate the data layer -> allow u to send to the data layer
            type: 'ADD_TO_BASKET', 
            item: {
                id: id, 
                title: title, 
                image: image, 
                price: price, 
                rating: rating,
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>RS</small>
                    <strong>{price}</strong>
                
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
                </p>
            </div>
<img src={image} alt="some"/>
<button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
