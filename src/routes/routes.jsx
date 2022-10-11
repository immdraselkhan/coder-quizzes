/*
* Creating all routes here
* allTopics coming from getData.js then sending to Main component
* topicQuiz coming from getData.js then sending to Quiz component
*/

import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog';
import Home from '../components/Home';
import Quiz from '../components/Quiz/Quiz';
import Statistics from '../components/Statistics';
import Main from '../layouts/Main';
import { allTopics, topicQuiz } from '../loaders/getData';

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
        path: 'quiz/:topicId',
        element: <Quiz />,
        loader: ({params}) => topicQuiz(`${params.topicId}`),
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