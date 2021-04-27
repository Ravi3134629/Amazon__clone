import React from 'react';
import './CheckoutProduct.css'
import {useStateValue} from './StateProvider.js';
function CheckoutProduct({id,title,image,price,rating}) {
    //const [{basket}, dispatch] = useStateValue();
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        // remove the item from the basket

        //alert("hii");
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    
    
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt="some"
/>
<div class='checkoutProduct__info'>
    <p className="checkout__title">{title}</p>
</div>
<p className="checkoutProduct__price">
    <small>RS</small>
    <strong>{price}</strong>
</p>
<div className="checkoutProduct__rating">
{Array(rating).fill().map((_, i) => (
                        <p>🌟</p>))}

</div>

                    <button onClick={removeFromBasket}>Remove from basket</button>
                
</div>            
        
    )
}

export default CheckoutProduct
