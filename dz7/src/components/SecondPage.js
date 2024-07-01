import React from 'react';
import { useDispatch } from 'react-redux';
import { sendSecondPageRequest } from '../store/store';

const SecondPage = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(sendSecondPageRequest());
    alert('Запрос на второй странице отправлен');
  };

  return (
    <div>
      <h1>Страница 2</h1>
      <button onClick={handleClick}>Отправить запрос</button>
    </div>
  );
};

export default SecondPage;
