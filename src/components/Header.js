import React from 'react';
import amazon from '../amazon.png';
import './styles/header.css'
import SearchIcon  from '@material-ui/icons/Search';
import  ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../Firebase';

const Header = () => { 
    const [{basket,user}] = useStateValue()
    const handleAuth =()=>{
        if(user){
            console.log('signout')
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <Link to='/'>
            <img className='header__logo' alt='amazon' src={amazon}></img>
            </Link>
            <div className='header__search'>
                <input className='header__searchinput' />
                <SearchIcon className='header__searchicon' />

            </div>

            <div className='header__nav'>
                <Link to={!user && '/login'}>
                <div  className='header__options'>
                    <span className='header__optionslineone'>Hello {user?(user?.email):'guest'}</span>
                    <span onClick={handleAuth} className='header__optionslinetwo'> {user?'Sign out' :'Sign in'}</span>
                </div>
                </Link>
                <Link to='/orders'>
                <div className='header__options'>
                    <span className='header__optionslineone'>Returns</span>
                    <span className='header__optionslinetwo'> orders</span>
                </div>
                </Link>
                <div className='header__options'>
                    <span className='header__optionslineone'>Try</span>
                    <span className='header__optionslinetwo'>Prime</span>
                </div>
                <Link to='/checkout'>
                <div className='header__optionsbasket'>
                    
                    <ShoppingCartIcon />
                    
                    <span className='header__optionslinetwo header__basketcount'>{basket?.length} </span>
                </div>
                </Link>

            </div>
            
        </div>
    )
}


export default Header
