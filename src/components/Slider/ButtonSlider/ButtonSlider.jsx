import React, { forwardRef } from 'react'
import './button-slider.scss';

export const ButtonSlider = forwardRef(({src, onClick, className}, ref) => {
  return (
      <button className={"btn-slider " + className} onClick={onClick} ref={ref}>
         <img src={src} className="btn-slider__img" />
      </button>
   )
})
