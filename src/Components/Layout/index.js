import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header';
import HeaderBelt from '../Header/HeaderBelt';
import Footer from '../Footer/Footer';

function Layout ({
  showMenu,
  setShowMenu,
  windowWidth
}) {
  return (
    <>
      <SideBar
        showMenu={showMenu}
        onShowMenu={setShowMenu}
        setShowMenu={setShowMenu}
      />
      <Header />
      <HeaderBelt onShowMenu={setShowMenu} windowWidth={windowWidth} />

      <Outlet />

      <Footer />
    </>
  );
}

export default Layout;
