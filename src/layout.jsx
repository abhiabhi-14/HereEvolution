import React from 'react';
import Header from './component/nav/Nav';
import Footer from './component/footer/Footer';
import {Outlet} from 'react-router-dom';

function Layout() {
  return (
    <>
    <Header></Header>
    <Outlet/>
    <Footer></Footer>
    </>
  )
}

export default Layout
