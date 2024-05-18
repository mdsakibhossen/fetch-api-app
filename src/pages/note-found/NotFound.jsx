import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="grid place-items-center w-full h-screen">
      <div className='text-center'>
        <p className="text-slate-500 text-xl mb-3 font-medium">Oops !!!</p>
        <p className="text-slate-500 text-xl mb-3 font-medium uppercase">Sorry</p>
        <h1 className="text-3xl font-bold text-slate-600 mb-5">Not Found</h1>
        <Link to="/" className='underline underline-offset-2 text-blue-400'>Back To Home Page</Link>
      </div>
    </main>
  );
}

export default NotFound