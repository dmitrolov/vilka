import React from 'react';
import { displayWidth } from '../../App';
import { Search } from '../search/search';
import './header.scss';

export const Header: React.FC = () => {
  return (
    <header>
      <div className="header">
        <div className="header-menu">
          {
            displayWidth < 1440 && <div className="header-menu__item">
              <img className="header-menu__img" src="img/header/menu.png" alt="menu" /> 
            </div>
          }
          {
            displayWidth >= 768 && <div className="header-menu__item">
              <a href="#"><img src="img/header/logo.png" width="55" height="55" alt="logo" /></a>
            </div>
          }
          {
            displayWidth >= 1440 && <div className="header-menu__title">VILKA</div>
          }
        </div>
        <div className="header-search">
          <Search></Search>
        </div>
        <div className="header-buttons">
          {
            displayWidth >= 1440 && <div className="header-buttons__item">
              <img className="header-buttons__img" src="img/header/user.png"  alt="user" />
            </div>
          }
          {
            displayWidth >= 768 && <div className="header-buttons__item">
              <img className="header-buttons__img" src="img/header/favorite.png"  alt="favorite" />
            </div>
          }
          <div className="header-buttons__item">
            <img className="header-buttons__img" src="img/header/cart.png"  alt="cart" />
          </div>
        </div>
      </div>
    </header>
  );
}