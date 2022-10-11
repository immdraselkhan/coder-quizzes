/*
* Creating all routes here
*/

import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog';
import Home from '../components/Home';
import Statistics from '../components/Statistics';
import Main from '../layouts/Main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: 'topics',
        element: <Home />,
      },
      {
        path: 'statistics',
        element: <Statistics />
      },
      {
        path: 'blog',
        element: <Blog />
      }
    ],
  },
]);