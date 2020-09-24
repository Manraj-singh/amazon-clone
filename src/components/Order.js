import React from 'react'
import moment from 'moment';
import './styles/order.css'
import BasketProduct from './BasketProduct';
import CurrencyFormat from 'react-currency-format'


const Order = ({order}) => {
    return (
        <div className='order'>
            <h2>order</h2>
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY ,h:mma')}</p>
            <p className='order__id'>
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item =>
                <BasketProduct 
                id={item.id}
                desc={item.desc}
                rating={item.rating}
                price={item.price}
                image={item.image}
                hideButton />
            )}
            <CurrencyFormat 
            renderText={(value) =>(
            <h3 className='order__total'>Order Total: &#8377;{value}</h3>
            ) }
            decimalScale={2}
            value={order.data.amount /100}
            displayType={"text"}
            thousandSeparator={true}
            
            />
            
        </div>
    )
}

export default Order
