import React from 'react';
import './styles/basketProduct.css'
import { useStateValue } from '../StateProvider';

const BasketProduct = ({hideButton,id,image,desc,rating,price}) => {
    const[{basket},dispatch]= useStateValue()
    const removeFromBasket= ()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }
    return (
        <div className='basketproduct'>
            <img src={image} className='basketproduct__img' />
            <div className='basketproduct__info'>
                <p className='basketproduct__title'>{desc}</p>
                <p className='basketproduct__price'>
                    <small>&#8377;</small>
                    <strong>{price}</strong>
                </p>
                <div className='basketproduct__rating'>
                    {Array(rating).fill().map(()=>
                        <p>&#9734;</p>
                    )}
                </div>
                {!hideButton && (<button onClick={removeFromBasket}>Remove from basket</button>)}
                
            </div>
            
        </div>
    )
}

export default BasketProduct
