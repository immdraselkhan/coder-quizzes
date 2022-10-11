/*
* Creating all routes here
* allTopics comming from getQuizzes.js then sending to Main component
*/

import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog';
import Home from '../components/Home';
import Quiz from '../components/Quiz';
import Statistics from '../components/Statistics';
import Main from '../layouts/Main';
import { allTopics } from '../loaders/getTopics';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    loader: allTopics,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'topics',
        element: <Home />,
      },
      {
        path: 'quiz',
        element: <Quiz />
      },
      {
        path: 'statistics',
        element: <Statistics />
      },
      {
        path: 'blog',
        element: <Blog />
      },
    ],
  },
]);