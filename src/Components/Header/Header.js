import React, { useState } from 'react';
import './header.scss';
import { SlLocationPin, SlMagnifier } from 'react-icons/sl';
import DepartmentsDropDown from '../DropDownComponents/DepartmentsDropDown';
import LanguageDropDown from '../DropDownComponents/LanguageDropDown';
import ShoppingCartIcon from '../../assets/icons8-cart-48.png';
import AccountsDropDown from '../DropDownComponents/AccountsDropDown';
import { US } from 'country-flag-icons/react/3x2';
import { FaSortDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function Header () {
  const toggleBackground = {
    on: () => {
      const header = document.querySelector('.header');
      header.style.position = 'relative';
      header.style.zIndex = 10;

      const background = document.createElement('div');
      background.className = 'background';
      document.querySelector('.home').appendChild(background);

      const headerBelt = document.querySelector('.nav__belt');
      headerBelt.style.position = 'relative';
      headerBelt.style.zIndex = 9;
    },
    off: () => {
      const header = document.querySelector('.header');
      header.style.position = 'initial';
      header.style.zIndex = 'initial';
      const headerBelt = document.querySelector('.nav__belt');
      headerBelt.style.position = 'initial';
      headerBelt.style.zIndex = 'initial';

      const background = document.querySelector('.background');
      document.querySelector('.home').removeChild(background);
    }
  };

  const [showAccounts, setShowAccounts] = useState(true);

  const showAccountsLists = () => {
    setShowAccounts(false);
    toggleBackground.on();
  };

  const hideAccountsLists = () => {
    setShowAccounts(true);
    toggleBackground.off();
  };

  const [hideLanguages, setHideLanguages] = useState(true);

  const showLanguagesMenu = () => {
    setHideLanguages(false);
    toggleBackground.on();
  };

  const hideLanguagesMenu = () => {
    setHideLanguages(true);
    toggleBackground.off();
  };

  const [{ basket, username }] = useStateValue();

  return (
    <div className="header">
      <div className="header__navLeft">
        <Link to="/">
          <img
            className="header__navLeftLogo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon logo"
          />
        </Link>

        <div className="location ms-2">
          <button aria-label="Navigation">
            <SlLocationPin />
            <div className="header__option">
              <span className="header__optionLineOne">Hello</span>
              <span className="header__optionLineTwo">Select your address</span>
            </div>
          </button>
        </div>
      </div>

      <form className="header__search">
        <DepartmentsDropDown />
        <input
          className="header__searchInput"
          type="text"
        />
        <SlMagnifier color="#343433" className="header__searchIcon" />
      </form>


      <div className="header__navRight">
        <div
          className="languages__dropdown"
          onPointerEnter={showLanguagesMenu}
          onPointerLeave={hideLanguagesMenu}
        >
          <div className="languages__dropdownBody">
            <button aria-label="Navigation">
              <US title="United States" className="flag" />
              <span className="language__code">EN</span>
              <FaSortDown size={13} color="#a7acb2" className="languages__dropdownToggle" />
            </button>
          </div>
          <LanguageDropDown hideLanguages={hideLanguages} />
        </div>

        <div
          className="header__option account"
          onPointerEnter={showAccountsLists}
          onPointerLeave={hideAccountsLists}
        >
          <button aria-label="Navigation">
            <span className="header__optionLineOne">Hello, {username}</span>
            <span className="header__optionLineTwo">Accounts & Lists</span>
            <FaSortDown size={13} color="#a7acb2" />
          </button>
          <AccountsDropDown showAccounts={showAccounts} />
        </div>

        <div className="header__option">
          <button aria-label="Navigation">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </button>
        </div>

        <div className="header__optionBasket">
          {/* Shopping Basket */}
            <Link to="/checkout">
              <img src={ShoppingCartIcon} height={40} width={45} alt="shopping cart" />
              <span className="header__basketCount">{basket?.length}</span>
              <span className="header__optionBasketCart">Cart</span>
            </Link>
        </div>

      </div>
    </div>
  );
}

export default Header;
