import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const firstPageRequestSent = useSelector((state) => state.requests.firstPageRequestSent);
  const navigate = useNavigate();

  const handleNavClick = (page) => {
    if (!firstPageRequestSent && page !== '/page1') {
      alert('Пожалуйста, сначала отправьте запрос на первой странице.');
    } else {
      navigate(page);
    }
  };

  return (
    <nav>
      <button onClick={() => handleNavClick('/page1')}>Страница 1</button>
      <button onClick={() => handleNavClick('/page2')}>Страница 2</button>
      <button onClick={() => handleNavClick('/page3')}>Страница 3</button>
    </nav>
  );
};

export default Header;