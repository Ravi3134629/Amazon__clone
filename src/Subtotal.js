import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { Basket } from '@material-ui/icons'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider'
import { useHistory } from 'react-router'
 // Homework - import useStateValue from StateProvider
//import {useHistory} from 'react-router-dom';
function Subtotal() {
    const history=useHistory();
    const [{basket},dispatch] = useStateValue(); // Pull the basket from useStateValue
//const history=useHistory();
    // Homework - Calculate basket total
    //const calculateTotal = (basket) => {
        //return basket.reduce((price, item) => item.price + price, 0)
    
const handleCheckout =()=>{
    history.push("/payment");
}
    return (
        <div className="subtotal">
            <CurrencyFormat 
            renderText={(value) => (
                <>
                <p>
                    Subtotal ({basket.length},items): <strong>{value}</strong> 
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)} 
            displayType={"text"}
            thousandSeparator={true}
            prefix={"RS"}
            />
            <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
