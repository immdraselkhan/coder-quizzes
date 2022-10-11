/*
* Home component
* allToics data getting using useContext hook (TopicsContext)
*/

import React, { useContext } from 'react';
import { TopicsContext } from '../layouts/Main';
import Topic from './Topic';

const Home = () => {
  const allTopics = useContext(TopicsContext);
  return (
    <div>
      <div className="py-16 bg-[#5f49eb]">
        <div className="max-w text-3xl md:text-5xl font-bold text-white text-center space-y-5 md:space-y-8">
          <h2>Start</h2>
          <img className="mx-auto h-20 md:h-32" src="/start-quiz.svg" alt="Start Quiz Home Banner" />
          <h2>for free!</h2>
        </div>
      </div>
      <div className="pt-16 bg-white">
        <div className="max-w space-y-10">
          <h2 className="text-3xl font-bold text-center md:text-left">Explore by topic</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 text-white">
            { allTopics.map(topic => <Topic key={topic.id} topic={topic} />) };
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;