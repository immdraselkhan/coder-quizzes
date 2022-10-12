/*
* Main layout
* allTopics data coming route loader then sending to all components using ContextAPI (TopicsContext)
*/

import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';

export const TopicsContext = createContext([]);

const Main = () => {
  const allTopics = useLoaderData();
  return (
    <TopicsContext.Provider value={allTopics.data}>
      <Header />
        <main>
          <Outlet />
        </main>
      <Footer />
    </TopicsContext.Provider>
  )
};

export default Main;