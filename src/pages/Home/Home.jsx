import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';
import { Context } from '../../App';
import CardProduct from '../../components/CardProduct/CardProduct';
import Search from '../../components/Search/Search';
import { Slider } from '../../components/Slider/Slider';
import './home.scss';

function Home() {
   const { products, isLoading } = useContext(Context);
   const [searchValue, setSearchValue] = useState('');

   const onSearchProduct = (value) => {
      setSearchValue(value);
   }

   return (
      <>
         <div className='content'>
            <div className="container">
               <Slider />
               <div className="content__header">
                  <h1 className="content__title">{searchValue ? `Товары по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                  <Search
                     value={searchValue}
                     setValue={onSearchProduct} />
               </div>
               <div className="content__wrapper">
                  {(isLoading ? [1, 2, 3, 4, 5, 6, 7, 8] : (products
                     .filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))))
                     .map((item, index) =>
                        <CardProduct
                           key={index}
                           isLoading={isLoading}
                           product={item} />
                     )}
               </div>
            </div>
         </div>
      </>
   );
}

export default Home;