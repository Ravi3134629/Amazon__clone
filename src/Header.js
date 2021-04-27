import React from 'react'
import './Header.css';
import amazon from "./amazon.png";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBaketIcon from "@material-ui/icons//ShoppingBasket";
import { Link } from 'react-router-dom';
import{useStateValue } from "./StateProvider";
import {auth} from "./firebase.js";
function Header() {
    const [{basket,user},dispatch]=useStateValue();
    const handleAuth=()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <Link to="/">
            <img className="header__logo"src={amazon} alt="some"/>
                </Link>
            
            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to ={!user && "/login"}> 
            <div className='header__option' onClick={handleAuth}>
                <span className='header__optionLineOne'>{!user?"Hello,Guest":"Hello,"+user.email}</span>
                <span className='header__optionLineTwo'>{user?'Sign out':'Sign In'}</span>


             </div>
             </Link>
             <div className='header__option'>
             <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionLineTwo'>& Orders</span>

              </div>
              <div className='header__option'>
              <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>

                </div>
                <Link to="/checkout"> 
                <div className='header__optionBasket'>
                    <ShoppingBaketIcon/>
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>


                </div>
                
                </Link>
            </div>

        </div>
    )
}

export default Header
