import React from 'react';
import './styles/subtotal.css';
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../Reducer';
import { useHistory } from "react-router-dom";

const Subtotal = () => {
    const history = useHistory()
    const [{basket}] =useStateValue()
    return (
        <div className='subtotal'>
            <CurrencyFormat 
            renderText={(value) =>(
                <>
                <p>
                    Subtotal({basket.length} items):
                    <strong> &#8377; {value}</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type='checkbox'></input>
                    this order contains gift 
                </small>
                </>
            ) }
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            
            />
            <button onClick={e=> history.push('/payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
