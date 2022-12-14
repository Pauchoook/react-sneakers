import React from 'react'
import { useNavigate } from 'react-router-dom';
import './empty.scss';

export const Empty = ({title, content}) => {
   const navigate = useNavigate();

  return (
   <div className="empty">
      <img src="/img/icons/favourites-smile.svg" alt="Смайлик" className="empty__smile" />
      <h4 className="empty__title">{title}</h4>
      <p className="empty__content">{content}</p>
      <button onClick={() => navigate(-1)} className="empty__btn">
         <img src="/img/icons/arrow.svg" className="empty__btn-img" />
         <span>Вернуться назад</span>
      </button>
   </div>
  )
}
