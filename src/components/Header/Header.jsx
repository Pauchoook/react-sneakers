import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Context} from '../../App';
import ShowBasket from '../ShowBasket/ShowBasket';
import './header.scss';

function Header({onOpenBasket}) {
   const {basketHandler,basketProducts} = useContext(Context);
   const [price, setPrice] = useState(0);

   useEffect(() => {
      setPrice(basketProducts.reduce((acc, val) => acc + val.price, 0));
   }, [basketProducts]);

   return (
      <header className='header'>
         <ShowBasket />
         <div className="container header__container">
            <Link to='/' className="header__logo">
               <img src="/img/logo.png" alt="logo" className="header__logo-img" />
               <div className="header__logo-info">
                  <h3 className="header__logo-title">React Sneakers</h3>
                  <p className="header__logo-content">Магазин лучших кроссовок</p>
               </div>
            </Link>
            <nav className='header__nav'>
               <ul className="header__list">
                  <li 
                     onClick={basketHandler}
                     className="header__item"
                  >
                     <img src="/img/icons/cart.svg" className="header__nav-icon" />
                     <span className="header__cart-sum">{price} руб.</span>
                  </li>
                  <li className="header__item">
                     <Link to='/favourites'>
                        <img src="/img/icons/like2.svg" className="header__nav-icon" />
                     </Link>
                  </li>
                  <li className="header__item">
                     <Link to='/orders'>
                        <img src="/img/icons/user.svg" className="header__nav-icon" />
                     </Link>
                  </li>
               </ul>
            </nav>
         </div>
      </header>
   );
}

export default Header;