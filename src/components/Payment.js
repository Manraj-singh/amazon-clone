import React ,{ useState ,useEffect } from 'react';
import { useStateValue } from '../StateProvider';
import BasketProduct from './BasketProduct';
import './styles/payment.css';
import CurrencyFormat from 'react-currency-format'
import { useHistory } from "react-router-dom";
import { CardElement ,useStripe,useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from '../Reducer';
// import axios from '../axios';
import axios from 'axios'
import { db } from "../Firebase";

const Payment = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret,setClientSecret]= useState('')
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [processing, setProcessing] = useState('')
    const [success, setSuccess] = useState(false)
    
    const history = useHistory()
    const [{basket,user},dispatch]  =useStateValue()

    useEffect(()=>{
        
        const getClientSecret = ()=>{
            axios.post(`https://amazon-back.herokuapp.com/payment/create/${getBasketTotal(basket)*100}`)
            .then((res)=>{
                console.log('client secret set',clientSecret);
                setClientSecret(res.data.clientSecret)
                console.log('client secret set',clientSecret);
            })
        }
        getClientSecret();
    },[basket])

    const handleSubmit = (e) => {
        e.preventDefault()
        setProcessing(true)

        stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            console.log('setting to firestore');
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket:basket,
                amount:paymentIntent.amount,
                created:paymentIntent.created
            }).catch(err => console.log(err))

            dispatch({
                type:'EMPTY_BASKET'
            })

            setSuccess(true);
            setError(null);
            setProcessing(false)
            history.replace('/orders')
        })
        
    }
    const handleChange =(e) => {
        setDisabled(e.empty);
        setError(e.error? e.error.message : '')
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1 onClick={e=>history.push('/checkout') }>
                    {`Checkout ${basket?.length} items`}
                </h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>payment title</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>bbc para,bhawanipatna</p>
                        <p>kalahandi,766001</p>
                    </div>

                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>rewiew items</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item=>
                            <BasketProduct 
                            id={item.id}
                            image={item.image}
                            desc={item.desc}
                            price={item.price}
                            rating={item.rating} />
                        )}
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment method</h3>
                    </div>
                    <div className='payment__details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className='payment__pricecontainer'>
                            <CurrencyFormat 
                                renderText={(value) =>(
                                <h3>order total: &#8377;{value}</h3>
                                   ) }
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                
                                />
                            </div>
                            <button disabled={processing || disabled || success}>
                                <span>{processing?<p>processing</p>:'Buy now'}</span>
                            </button>

                            {error && <div>{error}</div>}

                            
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
