import './footer.scss';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Logo from '../../assets/PikPng.com_amazon-logo-png_3272114.png';
import { FaSortDown, FaSortUp } from 'react-icons/fa';
import { US } from 'country-flag-icons/react/3x2';
import { FaGlobe } from 'react-icons/fa';
import LanguageDropDown from '../DropDownComponents/LanguageDropDown';

function Footer () {
  const navLinks = [
    {
      title: 'Get to Know Us',
      content: [
        "Careers",
        "Amazon Newsletter",
        "About Amazon",
        "Sustainability",
        "Press Center",
        "Investor Relations",
        "Amazon Devices",
        "Amazon Science"
      ]
    },
    {
      title: 'Make Money with Us',
      content: [
        "Sell products on Amazon",
        "Sell apps on Amazon",
        "Supply to Amazon",
        "Protect & Build Your Brand",
        "Become an Affiliate",
        "Become a Delivery Driver",
        "Start a package delivery business",
        "Advertise Your Products",
        "Self-Publish with Us",
        "Host an Amazon Hub",
        "›See More Ways to Make Money"
      ]
    },
    {
      title: 'Amazon Payment Products',
      content: [
        "Amazon Rewards Visa Signature Cards",
        "Amazon Store Card",
        "Amazon Secured Card",
        "Amazon Business Card",
        "Shop with Points",
        "Credit Card Marketplace",
        "Reload Your Balance",
        "Amazon Currency Converter"
      ]
    },
    {
      title: 'Let Us Help You',
      content: [
        "Amazon and COVID-19",
        "Your Account",
        "Your Orders",
        "Shipping Rates & Policies",
        "Amazon Prime",
        "Returns & Replacements",
        "Manage Your Content and Devices",
        "Your Recalls and Product Safety Alerts",
        "Amazon Assistant",
        "Help"
      ]
    }
  ];

  const [hideLanguages, setHideLanguages] = useState(true);

  const showLanguagesMenu = () => {
    setHideLanguages(false);
  };

  const hideLanguagesMenu = () => {
    setHideLanguages(true);
  };

  return (
    <div
      className="footer"
      aria-label="footer"
    >
      <div
        className="backToTop"
        aria-label="Back to top"
        onPointerDown={() => document.body.scrollTop = document.documentElement.scrollTop = 0}
      >
        Back to top
      </div>

      <div className="footer__navLink d-flex justify-content-evenly" role="presentation">
        {
          navLinks.map(({ title, content }, i) => {
            return (
              <div
                className="footer__navLinkColumn d-flex flex-column"
                key={`fnlc_${i}`}
              >
                <span className="footer__navLinkColumnTitle">
                  {title}
                </span>
                {
                  content.map((content, i) => {
                    return (
                      <span
                        className="footer__navLinkColumnContent"
                        key={`fnlcc_${i}`}
                      >
                        {content}
                      </span>
                    );
                  })
                }
              </div>
            );
          })
        }
      </div>

      <div className="footer__line">
        <img src={Logo} alt="" className="footer__logo" />

        <Button
          className="footer__languages"
          onPointerEnter={showLanguagesMenu}
          onPointerLeave={hideLanguagesMenu}
        >
          <FaGlobe /> English

          <span className="footer__languagesToggle">
            <FaSortUp
              size={11}
              color="#555554"
              className="footer__languagesToggleButton up"
            />
            <FaSortDown
              size={11}
              color="#555554"
              className="footer__languagesToggleButton"
            />
          </span>

          <div className="footer__languagesDropdownMenu">
            <LanguageDropDown hideLanguages={hideLanguages} />
          </div>
        </Button>

        <Button className="footer__language">
          <US title="United States" className="footer__flag" />
          <span>United States</span>
        </Button>
      </div>

      <div className="footer_trademark">
        <div className="footer_trademarkLinks">
          <span aria-label="Navigation" className="footer__trademarkLink">Conditions of Use</span>
          <span aria-label="Navigation" className="footer__trademarkLink">Privacy Notice</span>
          <span aria-label="Navigation" className="footer__trademarkLink">Interest-Based Ads</span>
        </div>

        <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
      </div>
    </div>
  );
}

export default Footer;
