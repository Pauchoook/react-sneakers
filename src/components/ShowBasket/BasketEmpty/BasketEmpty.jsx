import React, { useContext } from 'react';
import { Context } from '../../../App';
import './basket-empty.scss';

function BasketEmpty(props) {
   const {basketHandler} = useContext(Context);

   return (
      <div className='basket-empty'>
         <img src="/img/box.png" alt="Коробка" className="basket-empty__img" />
         <h2 className="basket-empty__title">Корзина пуста</h2>
         <p className="basket-empty__content">
            Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
         </p>
         <button onClick={basketHandler} className="basket-empty__btn">
            <img src="/img/icons/arrow.svg" className="basket-empty__btn-img" />
            <span>Вернуться назад</span>
         </button>
      </div>
   );
}

export default BasketEmpty;