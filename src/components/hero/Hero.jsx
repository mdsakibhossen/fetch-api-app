import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      className="text-slate-400 py-40"
      style={{
        backgroundImage:
          "linear-gradient(to top,black,transparent),url(https://images.pexels.com/photos/273250/pexels-photo-273250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-3 text-center">
        <h1 className="text-4xl text-slate-100 mb-5">Fetching APIS</h1>
        <p>
          Fetching Users, Products & Books Info From{" "}
          <Link className="underline" to="https://api.freeapi.app/">
            FreeAPI
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Hero