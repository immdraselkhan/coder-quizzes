import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';

const Quiz = () => {
  return (
    <div className="max-w-screen-md mx-auto px-2 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Quiz of React</h2>
      <div className="space-y-10">
        <div className="bg-[#5f49eb] p-10 space-y-5 rounded-lg">
          <div className="flex justify-between gap-5 pb-5 text-white">
            <p className="text-lg font-medium leading-8">Quiz 1: What is Javascript, you may search on Google or Wekipidea</p>
            <EyeIcon className="h-10 w-10 cursor-pointer"/>
          </div>
          <div className="flex items-center p-1 bg-white rounded cursor-pointer">
            <img className="w-10 h-10 rounded" src="default.svg" alt="" />
            <p className="m-auto">building User Interface</p>
          </div>
          <div className="flex items-center p-1 bg-white rounded cursor-pointer">
            <img className="w-10 h-10 rounded" src="default.svg" alt="" />
            <p className="m-auto">building User Interface</p>
          </div>
          <div className="flex items-center p-1 bg-white rounded cursor-pointer">
            <img className="w-10 h-10 rounded" src="default.svg" alt="" />
            <p className="m-auto">building User Interface</p>
          </div>
          <div className="flex items-center p-1 bg-white rounded cursor-pointer">
            <img className="w-10 h-10 rounded" src="default.svg" alt="" />
            <p className="m-auto">building User Interface</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz;