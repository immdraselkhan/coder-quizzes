/*
* Blog component
*/

import React from 'react';

const Blog = () => {
  return (
    <article className="max-w-3xl px-3 mx-auto my-20">
      <div className="text-2xl lg:text-3xl font-bold text-center my-10">
        <h2>Freequently Asked Questions</h2>
      </div>
      <div className="space-y-5">
        <details className="card-padding w-full rounded-lg bg-[#5f49eb] text-white" open={true}>
          <summary className="text-xl font-medium"><span className="ml-2">What is the purpose of React Router?</span></summary>
          <p className="pt-5 leading-8">Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.<br /><br />React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
        </details>
        <details className="card-padding w-full rounded-lg bg-[#5f49eb] text-white" open="">
        <summary className="text-xl font-medium"><span className="ml-2">How does Context API works?</span></summary>
          <p className="pt-5 leading-8">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.<br /><br />Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.</p>
        </details>
        <details className="card-padding w-full rounded-lg bg-[#5f49eb] text-white" open="">
        <summary className="text-xl font-medium"><span className="ml-2">What is the useRef hook?</span></summary>
          <p className="pt-5 leading-8">The useRef hook is the new addition in React 16.8. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.</p>
        </details>
      </div>
    </article>
  )
};

export default Blog;