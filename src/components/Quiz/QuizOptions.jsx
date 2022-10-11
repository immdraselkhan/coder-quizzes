import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const QuizOptions = ({option, correctAnswer}) => {

  const [result, setResult] = useState('default');

  const quizHandle = answer => {
    if (answer === correctAnswer) {
      setResult(true);
      toast.success('Correct Answer!');
    }else {
      setResult(false);
      toast.error("Wrong Answer!")
    }
  }

 let img = '/default.svg';
 let answerStyle = 'bg-white';
 if (result === true) {
  img = '/correct.svg';
  answerStyle = 'bg-green-500 text-white';
 }
 if (result === false) {
  img = '/wrong.svg';
  answerStyle = 'bg-red-500 text-white';
 }

  return (
    <div onClick={() => quizHandle(option)} className={`${answerStyle} flex items-center p-1 rounded cursor-pointer`}>
      <img className="w-10 h-10 rounded" src={img} alt="" />
      <p className="m-auto">{option}</p>
      <Toaster />
    </div>
  )
}

export default QuizOptions;