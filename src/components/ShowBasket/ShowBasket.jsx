import axios from 'axios';
import React, { useContext } from 'react';
import { Context } from '../../App';
import Button from '../Button/Button';
import BasketEmpty from './BasketEmpty/BasketEmpty';
import CardProductBasket from './CardProductBasket/CardProductBasket';
import FooterBasket from './FooterBasket/FooterBasket';
import './show-basket.scss';

function ShowBasket() {
   const { isOpenedBasket, basketProducts, basketHandler } = useContext(Context);

   return (
      <div className={isOpenedBasket ? 'basket open' : 'basket'}>
         <div className="basket__overlay">
            <div className="basket__menu">
               <div className="basket__menu-header">
                  <h2 className="basket__title">Корзина</h2>
                  <Button
                     onClick={basketHandler}
                     classN="basket__btn"
                     src="/img/icons/close.svg" />
               </div>
               {basketProducts.length
                  ?
                  <>
                     <div className="basket__list-items">
                        {basketProducts.map(product =>
                           <CardProductBasket
                              key={product.id}
                              product={product} />
                        )}
                     </div>
                     <FooterBasket />
                  </>
                  :
                  <div
                     style={{ height: '100%', display: 'flex', alignItems: 'center' }}
                  >
                     <BasketEmpty />
                  </div>
               }
            </div>
         </div>
      </div>
   );
}

export default ShowBasket;