import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-200 py-5 mt-5">
      <div className="container mx-auto px-3 flex flex-col items-center md:flex-row md:justify-between gap-2">
        <p>
          Copyright 2000-2024 by{" "}
          <Link to="/" className="underline text-purple-400">
            FetchAPI
          </Link>
        </p>
        <Link
          to="https://api.freeapi.app/"
          className="text-slate-500 font-bold"
        >
          Visit <span className='text-purple-300'>FreeAPI</span>
        </Link>
      </div>
    </footer>
  );
}

export default Footer