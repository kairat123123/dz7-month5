import React from 'react';
import { useDispatch } from 'react-redux';
import { sendThirdPageRequest } from '../store/store';

const ThirdPage = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(sendThirdPageRequest());
    alert('Запрос на третьей странице отправлен');
  };

  return (
    <div>
      <h1>Страница 3</h1>
      <button onClick={handleClick}>Отправить запрос</button>
    </div>
  );
};

export default ThirdPage;
