/*
* Main layout
*/

import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Main = () => {
  return (
    <>
      {/* header  */}
      <Header />
      {/* main */}
        <main>
          <Outlet />
        </main>
      {/* footer */}
      <Footer />
    </>
  )
}

export default Main;