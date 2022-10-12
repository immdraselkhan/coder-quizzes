import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import QuizOptions from './QuizOptions';
import toast, { Toaster } from 'react-hot-toast';

const QuizCard = ({everyQuestion, index, handleResult}) => {
  const {question, options, correctAnswer} = everyQuestion;

  const [disable, setDisable] = useState(false);
  
  const disableHandler = () => {
    setDisable('disabled');
  };

  const quickResult = answer => {
    toast((t) => (
      <span className="font-medium flex items-center gap-5">
        {answer}
        <button className="text-white px-2 py-1 bg-[#5f49eb] hover:bg-[#3a28a7] rounded" onClick={() => toast.dismiss(t.id)}>Dismiss</button>
      </span>
    ));
  };

  return (
    <div className="bg-[#5f49eb] card-padding space-y-5 rounded-lg">
      <div className="flex justify-between gap-5 pb-5 text-white">
        <p className="text-lg font-medium leading-8">Quiz {index+1}: {`${question.replace(/[<p></p>]/g, '')}`}</p>
        <div className="h-10 w-10">
          <EyeIcon onClick={() => quickResult(correctAnswer)} className="h-10 w-10 cursor-pointer"/>
        </div>
      </div>
      <div className={`space-y-5 ${disable ? disable : ''}`}>
        { options.map(option => <QuizOptions key={options.indexOf(option)} option={option} correctAnswer={correctAnswer} disableHandler={disableHandler} handleResult={handleResult} />) }
        <Toaster />
      </div>
    </div>
  )
};

export default QuizCard;