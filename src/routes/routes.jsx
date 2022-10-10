/*
* Creating all routes here
*/

import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog';
import Home from '../components/Home';
import Main from '../layouts/Main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'blog',
        element: <Blog />
      }
    ],
  },
]);