import React, { useState } from 'react';
import './header.scss';
import { SlLocationPin, SlMagnifier } from 'react-icons/sl';
import DepartmentsDropDown from '../DropDownComponents/DepartmentsDropDown';
import ShoppingCartIcon from '../../assets/icons8-cart-48.png';
import AccountsDropDown from '../DropDownComponents/AccountsDropDown';
import { US } from 'country-flag-icons/react/3x2';
import { FaSortDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function Header () {
  const [showAccountsDropDown, setShowAccountsDropDown] = useState(false);

  const [{ basket, username }] = useStateValue();

  return (
    <div className="header">
      <div className="header__navLeft">
        <Link to="/">
          <img
            className="header__navLeftLogo"
            src="/AMZN_BIG.D.svg"
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
        >
          <div className="languages__dropdownBody">
            <button aria-label="Navigation">
              <US title="United States" className="flag" />
              <span className="language__code">EN</span>
            </button>
          </div>
        </div>

        <div
          className="header__option account"
        >
          <button
            aria-label="Navigation"
            onMouseOut={() => setShowAccountsDropDown(false)}
            onMouseOver={() => setShowAccountsDropDown(true)}
          >
            <span className="header__optionLineOne">Hello, {username}</span>
            <span className="header__optionLineTwo">Accounts & Lists</span>
            <FaSortDown size={13} color="#a7acb2" />
            {showAccountsDropDown && <AccountsDropDown />}
          </button>
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
