import React from 'react';
import { useDispatch } from 'react-redux';
import { sendFirstPageRequest } from '../store/store';

const FirstPage = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(sendFirstPageRequest());
    alert('Запрос на первой странице отправлен');
  };

  return (
    <div>
      <h1>Страница 1</h1>
      <button onClick={handleClick}>Отправить запрос</button>
    </div>
  );
};

export default FirstPage;
