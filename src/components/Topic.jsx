import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
  const {name, logo, total, id} = topic;
  return (
    <div className="bg-[#5f49eb] rounded-lg shadow-lg hover:shadow-xl max-w-fit mx-auto">
      <img className="rounded-t-lg" src={`${id === 2 ? 'js-logo.png' : logo}`} alt={name} />
      <div className="px-8 pb-10 pt-5 text-xl font-semibold space-y-5">
        <h3>Topic: {name}</h3>
        <p className="pb-3">Total Questions: {total}</p>
        <Link to={`/quiz/${id}`} className="text-center text-[#5f49eb] bg-white hover:bg-slate-200 rounded-full p-3 shadow-lg inline-block w-full">Start Quiz</Link>
      </div>
    </div>
  )
}

export default Topic;