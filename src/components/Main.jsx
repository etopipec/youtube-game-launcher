import React from 'react';

import HomeIcon from '../assets/home-icon.png';
import LibraryIcon from '../assets/library-icon.png';
import ShopIcon from '../assets/shop-icon.png';
import WishListIcon from '../assets/love-icon.png';
import DiscountIcon from '../assets/discount-icon.png';
import WalletIcon from '../assets/wallet-icon.png';
import BackgroundImage from '../assets/bg1.png';

const Main = () => {
  return (
    <main className="main" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <aside className="sidebar">
        <h1 className="sidebar__title">QHOF</h1>

        <div className="sidebar__divider"></div>

        <ul className="sidebar__menu">
          <li className="menu__item active">
            <img src={HomeIcon} className="item__icon" />
            <span className="item__text">Home</span>
          </li>
          <li className="menu__item">
            <img src={LibraryIcon} className="item__icon" />
            <span className="item__text">Library</span>
          </li>
          <li className="menu__item">
            <img src={ShopIcon} className="item__icon" />
            <span className="item__text">Store</span>
          </li>
          <li className="menu__item">
            <img src={WishListIcon} className="item__icon" />
            <span className="item__text">Wishlist</span>
          </li>
        </ul>

        <div className="sidebar__divider"></div>

        <ul className="sidebar__menu">
          <li className="menu__item active">
            <img src={DiscountIcon} className="item__icon" />
            <span className="item__text">Discount</span>
          </li>
          <li className="menu__item">
            <img src={WalletIcon} className="item__icon" />
            <span className="item__text">Wallet | Rp.20.053</span>
          </li>
        </ul>
      </aside>
    </main>
  )
};

export { Main };
