import React from 'react';
import './styles/checkout.css'
import ad from '../ad.jpg';
import Subtotal from './Subtotal';
import { useStateValue } from '../StateProvider';
import BasketProduct from './BasketProduct';


const Checkout = () => {
    const[{basket}]= useStateValue()
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img src={ad} alt='ad' className='checkout__ad'></img>
                <div>
                    <h2 className='checkout__title'>your shopping cart is empty</h2>
                    {basket.map((item)=>
                        <BasketProduct 
                        
                        id={item.id}
                        desc={item.desc}
                        image={item.image}
                        rating={item.rating}
                        price={item.price}
                        />
                    )

                    }
                </div>
            </div>

            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
