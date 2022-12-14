import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';
import { Context } from '../../App';
import Button from '../Button/Button';
import './card-product.scss';

function CardProduct({ product, isLoading }) {
   const { addBasketProduct, addFavouritesProduct, basketProducts, favouritesProducts, removeFavouritesProduct } = useContext(Context);
   const [isAdded, setAdded] = useState(false);
   const [isLiked, setLiked] = useState(false);

   useEffect(() => {
      setAdded(basketProducts.some(item => item.catalogProduct === product.id));
   }, [basketProducts]);

   useEffect(() => {
      setLiked(favouritesProducts.some(item => item.id === product.id));
   }, [favouritesProducts, isLoading]);

   const addProduct = async () => {
      try {
         setAdded(true);
         await axios.post('https://6391fa89b750c8d178d35c97.mockapi.io/basket', { ...product, catalogProduct: product.id }).then(res => {
            addBasketProduct(res.data);
         });
      } catch (e) {
         console.log(e.message);
      }
   }

   const likeProduct = async () => {
      try {
         if (!favouritesProducts.some(item => item.id === product.id)) {
            // await axios.post('https://6391fa89b750c8d178d35c97.mockapi.io/favourites', product);
            addFavouritesProduct(product);
         } else {
            setLiked(false);
            removeFavouritesProduct(product)
         }
         setLiked(!isLiked);
      } catch (e) {
         console.log(e.message);
      }
   }

   return (
      <>
         {isLoading
            ?
            <ContentLoader
               speed={5}
               width={210}
               height={260}
               viewBox="0 0 210 260"
               backgroundColor="#d1d1d1"
               foregroundColor="#ecebeb"
               className='card-product'
            >
               <rect x="0" y="175" rx="2" ry="2" width="210" height="10" />
               <rect x="0" y="198" rx="2" ry="2" width="140" height="10" />
               <rect x="0" y="0" rx="5" ry="5" width="210" height="161" />
               <rect x="0" y="243" rx="2" ry="2" width="90" height="10" />
               <rect x="114" y="245" rx="2" ry="2" width="90" height="10" />
               <rect x="0" y="223" rx="2" ry="2" width="210" height="10" />
            </ContentLoader>
            :
            <div className='card-product'>
               <Button
                  onClick={likeProduct}
                  className={isLiked ? "card-product__like active" : "card-product__like"}
                  src={isLiked ? '/img/icons/liked.svg' : '/img/icons/like.svg'}
               />
               <img src={product.img} alt="Кроссовки" className="card-product__img" />
               <h5 className="card-product__title">{product.name}</h5>
               <div className="card-product__footer">
                  <div className="card-product__footer-left">
                     <span className="card-product__footer-content">Цена:</span>
                     <span className="card-product__footer-price">{product.price} руб.</span>
                  </div>
                  <Button
                     onClick={addProduct}
                     disabled={isAdded}
                     className={isAdded && 'added'}
                     src={isAdded ? '/img/icons/added.svg' : '/img/icons/plus.svg'} />
               </div>
            </div>
         }
      </>
   );
}

export default CardProduct;