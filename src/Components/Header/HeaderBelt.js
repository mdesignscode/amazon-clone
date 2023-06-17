import './headerBelt.scss';
import { FaBars } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { FaSortDown } from 'react-icons/fa';
import React, { useState } from 'react';
import PrimeDropDown from '../DropDownComponents/PrimeDropDown';

function HeaderBelt ({ onShowMenu, windowWidth }) {
  const NAV_BELT_OPTIONS = [
    "Epic Deals",
    "Holiday Gift Guide",
    "Amazon Basics",
    "Customer Service",
    "Prime",
    "New Releases",
    "Books",
    "Music",
    "Registry",
    "Amazon Home",
    "Fashion",
    "Pharmacy",
    "Gift Cards"
  ];

  const navBeltOptions = windowWidth > 1225 ? NAV_BELT_OPTIONS : NAV_BELT_OPTIONS.slice(0, -3);

  const showBeltMenu = () => {
    document.querySelector('.nav__beltMenuShow').classList.remove('animateOut')
    onShowMenu(false);
    document.body.style.overflow = 'hidden';

    const background = document.createElement('div');
    background.className = 'background';
    document.querySelector('.app').appendChild(background);

    document.querySelector('.nav__beltMenuShow').classList.add('animateIn')
  };

  const [hidePrime, setHidePrime] = useState(true);

  const showPrimeDropdown = () => {
    setHidePrime(false);

    const header = document.querySelector('.header');
    header.style.position = 'relative';
    header.style.zIndex = 10;
    const headerBelt = document.querySelector('.nav__belt');
    headerBelt.style.position = 'relative';
    headerBelt.style.zIndex = 10;

    const background = document.createElement('div');
    background.className = 'background';
    document.querySelector('.home').appendChild(background);
  };

  const hidePrimeDropdown = () => {
    setHidePrime(true);

    const header = document.querySelector('.header');
    header.style.position = 'initial';
    header.style.zIndex = 'initial';
    const headerBelt = document.querySelector('.nav__belt');
    headerBelt.style.position = 'initial';
    headerBelt.style.zIndex = 'initial';

    const background = document.querySelector('.background');
    document.querySelector('.home').removeChild(background);
  };

  return (
    <div className="nav__belt">

      <IconContext.Provider value={{ size: "1.4em" }}>
        <div
          className="nav__beltMenu mx-3"
          aria-label="Open Sidebar"
          onPointerDown={showBeltMenu}>
          <FaBars className="me-1 nav__beltMenuOpen" /> <span>All</span>
        </div>
      </ IconContext.Provider>

      <div className="nav__beltOptions">
        {
          navBeltOptions.map((option, i) => {
            return (
              option !== 'Prime' ? (
                <span
                  key={`bo_${i}`}
                  className="nav__beltOption">
                  {option}
                </span>
              ) : (
                <span
                  key={`bo_${i}`}
                  className="nav__beltOption prime"
                  onPointerEnter={showPrimeDropdown}
                  onPointerLeave={hidePrimeDropdown}
                >
                  {option}
                  <FaSortDown size={13} color="#a7acb2" />

                  <PrimeDropDown hidePrime={hidePrime} />
                </span>
              )
            );
          })
        }
      </div>
    </div>
  );
}

export default HeaderBelt;
