import React, { useState } from 'react';
import toast from 'react-hot-toast';

const QuizOptions = ({option, correctAnswer, disableHandler}) => {

  const [result, setResult] = useState('default');

  const quizHandler = answer => {
    if (answer === correctAnswer) {
      setResult(true);
      toast.success('Yaay! Correct Answer 👍');
    }
    else {
      setResult(false);
      toast.error("Opps! Wrong Answer 😔")
    }
  };

  return (
    <div onClick={() => {quizHandler(option); disableHandler()}} className={`${result === true ? 'bg-green-500 text-white' : (result === false ? 'bg-red-500 text-white' : 'bg-white')} flex items-center p-1 rounded cursor-pointer`}>
      <img className="w-10 h-10 rounded" src={`${result === true ? '/correct.svg' : (result === false ? '/wrong.svg' : '/default.svg') }`} alt="" />
      <p className="m-auto">{option}</p>
    </div>
  )
};

export default QuizOptions;