import React from 'react';
import './styles/product.css'
import amazon from '../amazon.png'
import { useStateValue } from '../StateProvider';

const Product = ({id,desc,price,rating,image}) => {
    const [{user},dispatch] =useStateValue();
    

      const addToBasket =(e)=>{
          e.preventDefault()
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                image:image,
                desc:desc,
                price:price,
                rating:rating,
            },
            
        })
      }
    
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{desc}</p>
                <p className='product__price'>
                    <small>&#8377;</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                   { Array(rating).fill().map(() => (
                        <p>&#9734;</p>
                    ))}
                </div>
            </div>
                <img src={image} alt="product" ></img>
                
                <button onClick={addToBasket}>Add to basket</button>
            
            
        </div>
    )
}

export default Product
