import React, { useContext, useState } from 'react';
import { Context } from '../../../App';
import Button from '../../Button/Button';
import './card-product-basket.scss';

function CardProductBasket({product}) {
   const {removeBasketProduct} = useContext(Context);

   return (
      <div className='card-product-basket'>
         <img src={product.img} alt="product" className="card-product-basket__img" />
         <div className="card-product-basket__info">
            <h5 className="card-product-basket__title">{product.name}</h5>
            <span className="card-product-basket__price">{product.price} руб.</span>
         </div>
         <Button
            onClick={() => removeBasketProduct(product.id)}
            className="basket__btn"
            src="/img/icons/close.svg" />
      </div>
   );
}

export default CardProductBasket;