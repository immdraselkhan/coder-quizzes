import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from './QuizCard';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import Swal from 'sweetalert2';

const Quiz = () => {
  const quiz = useLoaderData();
  const {name, questions} = quiz.data;
  const [correctResults, setCorrectResults] = useState(0);
  const [wrongResults, setWrongResults] = useState(0);
  
  const handleResult = (correctAnswer, wrongAnswer) => {
    setCorrectResults(correctResults + correctAnswer);
    setWrongResults(wrongResults + wrongAnswer);
  };

  const showCorrectResults = `Correct ${correctResults === 0 || correctResults === 1 ? 'Answer' : 'Answers'}: ${correctResults}`;
  const showWrongResults = `Wrong ${wrongResults === 0 || wrongResults === 1 ? 'Answer' : 'Answers'}: ${wrongResults}`;

  if (correctResults + wrongResults === questions.length) {
    Swal.fire (
      'Complete!',
      `<br>${showCorrectResults} <br><br> ${showWrongResults}`,
      'success'
    ).then((result) => {
      if (result.isConfirmed) {
        window.location.reload(false);
      };
    })
  };

  return (
    <div className="max-w-2xl mx-auto lg:max-w py-16">
      <div className="block lg:flex gap-5 lg:gap-10 mx-2">
        <div className="space-y-5 lg:space-y-10 w-full lg:w-8/12">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-10">Quiz of {name}</h2>
          { questions.map(everyQuestion => <QuizCard key={everyQuestion.id} everyQuestion={everyQuestion} index={questions.indexOf(everyQuestion)} handleResult={handleResult} />) }
        </div>
        <div className="w-full lg:w-2/6 pt-5 lg:pt-[75px]">
          <div className="text-white bg-[#5f49eb] card-padding space-y-10 rounded-lg sticky top-32">
            <h2 className="text-xl font-bold text-center">Quiz Results</h2>
            <div className="space-y-5 text-lg font-medium">
              <p className="flex items-center gap-2"><CheckCircleIcon className="h-6 w-6 text-green-500 bg-white rounded-full"/>{showCorrectResults}</p>
              <p className="flex items-center gap-2"><XCircleIcon className="h-6 w-6 text-red-500 bg-white rounded-full"/>{showWrongResults}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Quiz;