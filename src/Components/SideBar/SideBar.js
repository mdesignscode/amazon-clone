import './sideBar.scss';
import React, { useState } from 'react';
import CloseButton from '../../assets/icons8-close-50.png';
import Expand from '../../assets/icons8-expand-arrow-30.png';
import Collapse from '../../assets/icons8-collapse-arrow-30.png';
import Enter from '../../assets/icons8-chevron-right-30.png';
import { useStateValue } from '../StateProvider';
import { auth } from '../../firebase';

function SideBar ({ showMenu, onShowMenu }) {
  const [{ username, userAvatar, user, resetUserAvatar }] = useStateValue();

  const hideMenu = () => {
    document.querySelector('.nav__beltMenuShow').classList.add('animateOut');

    setTimeout(() => {
      onShowMenu(true);
    }, 1000);

    document.body.style.overflow = 'initial';
    const background = document.querySelector('.background');
    document.querySelector('.app').removeChild(background);
  };

  const sidebarContent = [
    {
      title: 'trending',
      content: [
        "Best Sellers",
        "New Releases",
        "Movers & Shakers"
      ],
      moreContent: null,
      hasExpanded: false
    },
    {
      title: 'digital content & devices',
      content: [
        "Prime Video",
        "Amazon Music",
        "Echo & Alexa",
        "Fire Tablets",
        "Fire TV",
        "Kindle E-readers & Books",
        "Audible Books & Originals",
        "Amazon Photos",
        "Amazon Appstore"
      ],
      moreContent: null,
      hasExpanded: true
    },
    {
      title: "shop by department",
      content: [
        "Clothing, Shoes, Jewelry & Watches",
        "Amazon Fresh",
        "Books",
        "Movies, Music & Games"
      ],
      moreContent: [
        "Electronics",
        "Computers",
        "Smart Home",
        "Home, Garden & Tools",
        "Pet Supplies",
        "Food & Grocery",
        "Beauty & Health",
        "Toys, Kids & Baby",
        "Handmade",
        "Sports",
        "Outdoors",
        "Automotive & Industrial",
        "Industrial and Scientific"
      ],
      hasExpanded: true
    },
    {
      title: "programs & features",
      content: [
        "Whole Foods Market",
        "Pharmacy",
        "Clinic",
        "Amazon Physical Stores"
      ],
      moreContent: [
        "Subscribe & Save",
        "Luxury Stores",
        "Make Money with Amazon",
        "Home Services",
        "Gifting & Registry",
        "Gift Cards",
        "Credit & Payment Products",
        "Shop By Interest",
        "Amazon Custom",
        "Amazon Renewed",
        "Amazon Launchpad",
        "Amazon Outlet",
        "Amazon Subscription Boxes",
        "Amazon Live",
        "International Shopping",
        "Small & Medium Businesses",
        "Climate Pledge Friendly",
        "Amazon Second Chance",
        "Amazon Explore"
      ],
      hasExpanded: true
    },
    {
      title: "help & settings",
      content: [
        "Your Account",
        "🌐 English",
        "🇺🇲 United States",
        !user ? "Sign in" : "Sign out"
      ],
      moreContent: null,
      hasExpanded: false
    }
  ];

  const [isLess, setIsLess] = useState([true, true]);
  const showMore = (id) => {
    setIsLess(isLess.map((x, i) => i === id ? !x : x));
  };

  const signOut = () => {
    auth.signOut();
    resetUserAvatar();
  };

  return (
    <div className="sidebar">
      <div className="nav__beltMenuShow" hidden={showMenu}>
        <div className="sidebar__header">
          {userAvatar}
          <span>Hello, {username}</span>
        </div>

        {
          sidebarContent.map(({ title, content, moreContent, hasExpanded }, i) => {
            return (
              <section className="sidebar__section" key={'s_' + i}>
                <span className="sidebar__sectionTitle">{title}</span>

                {
                  content.map((content, i) => {
                    return (
                      <span
                        key={'sc_' + i}
                        className="sidebar__sectionContent"
                        aria-label="All options"
                        onPointerDown={content === "Sign out" ? signOut : undefined}
                      >
                        {content}
                        {hasExpanded && <img src={Enter} alt="Enter" />}
                      </span>
                    );
                  })
                }

                {
                  !isLess[i - 2] && moreContent?.map((content, i) => {
                    return (
                      <span
                        key={'msc_' + i}
                        className="sidebar__sectionContent moreContent"
                        aria-label="All options"
                      >
                        {content}
                        {hasExpanded && <img src={Enter} alt="Enter" />}
                      </span>
                    );
                  })
                }

                {
                  moreContent && (
                    <div
                      className="expand__section"
                      onPointerDown={() => showMore(i - 2)}
                    >
                      {
                        moreContent?.length && (
                          isLess[i - 2] ? <span>See All <img src={Expand} alt="Expand" /></span> : <span>See Less <img src={Collapse} alt="Collapse" /></span>
                        )
                      }
                    </div>
                  )
                }
              </section>
            );
          })
        }


      </div>
      <img
        aria-label="Close Sidebar"
        src={CloseButton}
        onPointerDown={hideMenu}
        hidden={showMenu}
        className="nav__beltMenuHide"
        width={25}
        height={25}
      />
    </div>
  );
}

export default SideBar;
