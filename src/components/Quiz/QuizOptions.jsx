import React from 'react';

const QuizOptions = ({option}) => {
  return (
    <div className="flex items-center p-1 bg-white rounded cursor-pointer">
      <img className="w-10 h-10 rounded" src="/default.svg" alt="" />
      <p className="m-auto">{option}</p>
    </div>
  )
}

export default QuizOptions;