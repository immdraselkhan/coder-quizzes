import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import QuizOptions from './QuizOptions';

const QuizCard = ({everyQuestion, index}) => {
  const {question, options, correctAnswer} = everyQuestion;
  return (
    <div className="bg-[#5f49eb] p-10 space-y-5 rounded-lg">
      <div className="flex justify-between gap-5 pb-5 text-white">
        <p className="text-lg font-medium leading-8">Quiz {index+1}: {`${question.replace(/[<p></p>]/g, '')}`}</p>
        <EyeIcon className="h-10 w-10 cursor-pointer"/>
      </div>
      { options.map(option => <QuizOptions key={options.indexOf(option)} option={option} correctAnswer={correctAnswer} />) }
    </div>
  )
}

export default QuizCard;