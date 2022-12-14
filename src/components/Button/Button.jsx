import React from 'react';
import './button.scss';

function Button({src, className, onClick, disabled}) {
   
   return (
      <button disabled={disabled} onClick={onClick} className={className ? className + " " + "button" : 'button'}>
         <img src={src} className="button__img" />
      </button>
   );
}

export default Button;