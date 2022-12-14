import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '../../App';
import Button from '../../components/Button/Button';
import CardProduct from '../../components/CardProduct/CardProduct';
import { Empty } from '../../components/Empty/Empty';
import './orders.scss';

export const Orders = () => {
   const [orders, setOrders] = useState([]);
   const [isLoading, setLoading] = useState(true);
   const navigate = useNavigate();

   useEffect(() => {
      async function fetch() {
         await axios.get('https://6391fa89b750c8d178d35c97.mockapi.io/orders').then(res => {
            setOrders(res.data);
         });
         setLoading(false);
      }
      fetch();
   }, []);

   if (isLoading) {
      return (
         <div className="container">
            <div className="orders__body">
               {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) =>
                  <CardProduct
                     key={index}
                     isLoading={true}
                  />
               )}
            </div>
         </div>
      )
   }

   return (
      <div className='orders'>
         <div className="container">
            <div className="orders__header">
               <Button
                  onClick={() => navigate(-1)}
                  src='/img/icons/arrow-prev.svg'
               />
               <h2 className="favourites__title">Мои заказы</h2>
            </div>
            {orders.length
               ?
               <div className="orders__body">
                  {orders.map(order =>
                     order.items.map(product =>
                        <CardProduct
                           key={product.id}
                           product={product}
                        />
                     )
                  )}
               </div>
               :
               <Empty title='У вас нет заказов' content='Вы нищеброд? Оформите хотя бы один заказ.' />
            }
         </div>
      </div>
   )
}
