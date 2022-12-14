import React from 'react';
import Button from '../Button/Button';
import './search.scss';

function Search({value, setValue}) {
   return (
      <div>
         <div className="search">
            <img src="/img/icons/search.svg" className="search__img" />
            <input 
               onChange={e => setValue(e.target.value)}
               value={value}
               type="text" 
               placeholder='Поиск...' 
               className="search__input" />
            {value && 
            <Button 
               onClick={() => setValue('')}
               className='search__reset' 
               src='/img/icons/close.svg' 
            />}
         </div>
      </div>
   );
}

export default Search;