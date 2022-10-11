import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from './QuizCard';

const Quiz = () => {
  const quiz = useLoaderData();
  const {name, questions} = quiz.data;
  return (
    <div className="max-w-screen-md mx-auto px-2 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Quiz of {name}</h2>
      <div className="space-y-10">
        { questions.map(everyQuestion => <QuizCard key={everyQuestion.id} everyQuestion={everyQuestion} index={questions.indexOf(everyQuestion)} />) }
      </div>
    </div>
  )
}

export default Quiz;