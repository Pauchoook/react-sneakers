import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../App';
import Button from '../../components/Button/Button';
import CardProduct from '../../components/CardProduct/CardProduct';
import { Empty } from '../../components/Empty/Empty';
import './favourites.scss';

function Favourites(props) {
   const {favouritesProducts} = useContext(Context);
   const navigate = useNavigate();

   return (
      <div className='favourites'>
         <div className="container">
            <div className="favourites__header">
               <Button
                  onClick={() => navigate(-1)}
                  src='/img/icons/arrow-prev.svg'
               />
               <h2 className="favourites__title">Избранное</h2>
            </div>
            {favouritesProducts.length
            ?
               <div className="favourites__body">
                  {favouritesProducts.map(product =>
                     <CardProduct key={product.id} product={product} />   
                  )}
               </div>
            :
            <Empty title='Избранные товары отсутствуют' content='Вы ничего не добавляли в закладки' />
            }
         </div>
      </div>
   );
}

export default Favourites;