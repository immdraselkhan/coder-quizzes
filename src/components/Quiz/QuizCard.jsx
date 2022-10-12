import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import QuizOptions from './QuizOptions';
import { Toaster } from 'react-hot-toast';

const QuizCard = ({everyQuestion, index}) => {
  const {question, options, correctAnswer} = everyQuestion;

  const [disable, setDisable] = useState(false);
  
  const disableHandler = () => {
    setDisable('disabled');
  };

  return (
    <div className="bg-[#5f49eb] p-10 space-y-5 rounded-lg">
      <div className="flex justify-between gap-5 pb-5 text-white">
        <p className="text-lg font-medium leading-8">Quiz {index+1}: {`${question.replace(/[<p></p>]/g, '')}`}</p>
        <EyeIcon className="h-10 w-10 cursor-pointer"/>
      </div>
      <div className={`space-y-5 ${disable ? disable : ''}`}>
        { options.map(option => <QuizOptions key={options.indexOf(option)} option={option} correctAnswer={correctAnswer} disableHandler={disableHandler} />) }
        <Toaster />
      </div>
    </div>
  )
};

export default QuizCard;