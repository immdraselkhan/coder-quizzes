import React from 'react'

const Topic = ({topic}) => {
  const {name, logo, total} = topic;
  return (
    <div className="bg-[#5f49eb] rounded-lg shadow-lg hover:shadow-xl max-w-fit mx-auto">
      <img className="rounded-t-lg" src={`${topic.id === 2 ? 'js-logo.png' : logo}`} alt={name} />
      <div className="px-8 pb-10 pt-5 text-xl font-semibold space-y-5">
        <h3>Topics: {name}</h3>
        <p className="pb-3">Total Questions: {total}</p>
        <button className="bg-white hover:bg-slate-200 rounded-full p-3 text-[#5f49eb] shadow-lg w-full">Start Quiz</button>
      </div>
    </div>
  )
}

export default Topic;