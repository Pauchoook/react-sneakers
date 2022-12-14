import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../App';
import './footer-basket.scss';

function FooterBasket(props) {
   const {basketProducts} = useContext(Context);
   const [price, setPrice] = useState(0);
   const tax = 5;

   useEffect(() => {
      setPrice(basketProducts.reduce((acc, val) => acc + val.price, 0));
   }, [basketProducts]);

   const addOrder = async () => {
      try {
         await axios.post(`https://6391fa89b750c8d178d35c97.mockapi.io/orders/`, {items: basketProducts});
      } catch(e) {
         console.log(e.message);
      }
   }

   return (
      <div className='footer-basket'>
         <ul className="footer-basket__list">
            <li className="footer-basket__item">
               <span className="footer-basket__title">Итого:</span>
               <div className="footer-basket__line"></div>
               <span className="footer-basket__price">{price} руб.</span>
            </li>
            <li className="footer-basket__item">
               <span className="footer-basket__title">Налог {tax}%:</span>
               <div className="footer-basket__line"></div>
               <span className="footer-basket__price">{price / 100 * tax} руб.</span>
            </li>
         </ul>
         <button onClick={addOrder} className="footer-basket__btn">
            <span>Оформить заказ</span>
            <img src="/img/icons/arrow.svg" className="footer-basket__img" />
         </button>
      </div>
   );
}

export default FooterBasket;