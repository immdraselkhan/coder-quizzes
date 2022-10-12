/*
* Error component
*/

import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const {status, statusText} = useRouteError();
  return (
    <section className="max-w-fit px-3 mx-auto flex items-center h-screen">
      <div className="flex flex-col items-center">
        <h2 className="font-extrabold text-9xl">{status}</h2>
        <p className="text-white font-semibold mt-14 px-2 bg-[#5f49eb] rotate-12 absolute">{statusText}</p>
        <p className="text-2xl lg:text-3xl font-bold my-10">Sorry, we couldn't find this page!</p>
        <Link to="/" className="text-white px-10 py-3 font-semibold bg-[#5f49eb] hover:bg-[#3a28a7] rounded-full">Back to home</Link>
      </div>
    </section>
  )
};

export default Error;