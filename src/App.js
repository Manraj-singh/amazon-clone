import React, { useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { BrowserRouter ,Route, Switch } from 'react-router-dom'
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './components/Orders';

const promise = loadStripe('pk_test_51HRFFFGsZqNRPPrmIuw9QOnRKon7rh5lYqhcLB8kyBBlJnLY3EOtoeiFnfsHdrFurCLPtfio9oZ4Aziw9KmViOYZ00TzcKtjNP')


function App() {
  const [{user},dispatch] = useStateValue()
  useEffect(() => {
   auth.onAuthStateChanged(authuser =>{
     console.log('authuser',authuser)
     if (authuser) {
       dispatch({
        type:'SET_USER',
        user:authuser
       })
     }else{
       console.log('set to null');
      dispatch({
        type:'SET_USER',
        user:null
       })
     }

   })
 },[])

  return (
    <BrowserRouter>
    <div className="app">
      <Switch>
      <Route  path='/payment' >
        <Elements stripe={promise} >
          <Payment />
        </Elements>
        </Route>

        <Route exact path='/login' >
          <Login />
        </Route>

        <Route exact path='/orders' >
          <Orders />
        </Route>

        <Route exact path='/checkout' >
        <Header />
        <Checkout />
        </Route>

        <Route  path='/' >
          <Header />
          <Home />
        </Route>

      </Switch>
    </div>
    </BrowserRouter>
    
  );
}

export default App;