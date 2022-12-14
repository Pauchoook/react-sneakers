import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Favourites from './pages/Favourites/Favourites';
import Header from './components/Header/Header';
import { Orders } from './pages/Orders/Orders';
export const Context = createContext();

function App(props) {
  const [isOpenedBasket, setOpenedBasket] = useState(false);
  const [basketProducts, setBasketProducts] = useState([]);
  const [favouritesProducts, setFavouritesProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetch() {
      const [basketRes, productsRes] = await Promise.all([
        axios.get('https://6391fa89b750c8d178d35c97.mockapi.io/basket'),
        axios.get('https://6391fa89b750c8d178d35c97.mockapi.io/products')
      ]);
      // await axios.get('https://6391fa89b750c8d178d35c97.mockapi.io/basket').then(res => {
      //   setBasketProducts(res.data);
      // });
      // await axios.get('https://6391fa89b750c8d178d35c97.mockapi.io/products').then(res => {
      //   setProducts(res.data);
      // });
      setBasketProducts(basketRes.data);
      setProducts(productsRes.data);
      setLoading(false);
    }

    const favourites = JSON.parse(localStorage.getItem('favouritesProducts'));
    if (favourites && favourites.length) {
      setFavouritesProducts(favourites);
    }
    fetch();
  }, []);

  const basketHandler = () => {
    setOpenedBasket(!isOpenedBasket);
  }

  const addBasketProduct = (product) => {
    setBasketProducts([...basketProducts, product]);
  }

  const addFavouritesProduct = (product) => {
    setFavouritesProducts([...favouritesProducts, product]);
    console.log(favouritesProducts)
    localStorage.setItem('favouritesProducts', JSON.stringify([...favouritesProducts, product]));
  }

  const removeBasketProduct = (id) => {
    axios.delete(`https://6391fa89b750c8d178d35c97.mockapi.io/basket/${id}`);
    setBasketProducts(prev => prev.filter(product => product.id !== id));
  }

  const removeFavouritesProduct = (product) => {
    // axios.delete(`https://6391fa89b750c8d178d35c97.mockapi.io/favourites/${id}`);
    setFavouritesProducts(prev => prev.filter(item => item.id !== product.id));
    localStorage.setItem('favouritesProducts', JSON.stringify(favouritesProducts.filter(item => item.id !== product.id)));
  }

  const state = {
    basketHandler,
    addBasketProduct,
    addFavouritesProduct,
    removeBasketProduct,
    removeFavouritesProduct,
    isLoading,
    isOpenedBasket,
    basketProducts,
    favouritesProducts,
    products
  }

  return (
    <Context.Provider value={state}>
      <div className='wrapper'>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/favourites' element={<Favourites />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='*' element={<Home />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;