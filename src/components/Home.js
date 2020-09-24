import React from 'react';
import './styles/home.css'
import banner from '../banner.jpg'
import Product from '../components/Product'



const Home = () => {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__img' src={banner} alt='banner'></img>
                <div className='home__row'>
                    <Product
                    id={121}
                      desc={"Glun Pink Mini IWILL20W 20 WATT On Off Switch and Indicator with 3 Hot Melt Glue Sticks"}
                      price={299}
                      rating={4}
                      image={'https://images-na.ssl-images-amazon.com/images/I/710B9KuRULL._SL1500_.jpg'}  
                    />
                    <Product
                    id={133}
                    desc={"Toy Arena Cube of 2X2 3x3 Pyraminx Triangle and Skewb Cube High Speed Magic Brainstorming Puzzle Combo Game Toy"}
                    price={150}
                    rating={3} 
                    image={'https://images-na.ssl-images-amazon.com/images/I/41d%2BkzN%2BcBL.jpg'}/>
                </div>
                <div className='home__row'>
                  <Product 
                  id={322}
                  desc={"Samsung Galaxy A31 (Prism Crush White, 6GB RAM, 128GB Storage) with No Co0st EMI/Additional Exchange Offers"}
                  price={21999}
                  rating={4}
                  image={'https://images-na.ssl-images-amazon.com/images/I/816-h37brML._SL1500_.jpg'} /> 
                  <Product 
                  id={43}
                  desc={"Apple iPhone 11 (64GB) - Black"}
                  price={75000}
                  rating={5}
                  image={'https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg'} />
                  <Product 
                  id={546}
                  desc={"Apple AirPods with Wireless Charging Case"}
                  price={16990}
                  rating={3}
                  image={'https://m.media-amazon.com/images/I/71IPFP9WJIL._AC_SX410_SY308_.jpg'} /> 
                </div>
                <div className='home__row'>

                </div>
            </div>
        </div>
    )
}

export default Home
