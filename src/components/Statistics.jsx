import React, { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { TopicsContext } from '../layouts/Main';

const Statistics = () => {

  const allTopics = useContext(TopicsContext);

  const data = allTopics.map(topic => {return {name: topic.name, Questions: topic.total}});

  return (
    <div className="max-w-2xl mx-auto my-40">
      <div className="text-2xl lg:text-3xl font-bold text-center my-10">
        <h2>Total Questions Statistics</h2>
      </div>
      <div className="w-full h-80">
        <ResponsiveContainer className="-ml-5">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="Questions" fill="#8884d8" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
};

export default Statistics;