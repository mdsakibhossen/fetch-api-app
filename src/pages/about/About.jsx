import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <section
        className="text-slate-400 py-40"
        style={{
          backgroundImage:
            "linear-gradient(to top,black,transparent),url(https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-3 text-center">
          <h1 className="text-4xl text-slate-100 mb-5">About This Website</h1>
          <p>
            Fetching Users, Products & Books Info From{" "}
            <Link className="underline" to="https://api.freeapi.app/">
              FreeAPI
            </Link>
          </p>
        </div>
      </section>
      <section className="about">
        <div className="container mx-auto px-3 py-5">
          {/* <div className="heading mb-5">
            <h2 className="text-3xl text-center">About</h2>
            <p className="text-slate-400 text-center italic">
              Lorem ipsum dolor sit amet.
            </p>
          </div> */}
          <div className="info">
            <h3 className="font-semibold text-xl mb-3">
              This Website is made for practicing Fetching APIs from{" "}
              <Link className="underline" to="https://api.freeapi.app/">
                FreeAPI
              </Link>
            </h3>
            <div className="flex flex-wrap gap-5">
              <div>
                <p className="text-lg">I have fetched here:</p>
                <ul className="list-inside list-disc ps-5 mb-3">
                  <li>Users</li>
                  <li>Products</li>
                  <li>Books</li>
                </ul>
              </div>

              <div>
                <p className="text-lg">I have added here:</p>
                <ul className="list-inside list-disc ps-5 mb-3">
                  <li>Loading Page</li>
                  <li>Not Found Page</li>
                </ul>
              </div>
              <div>
                <p className="text-lg">I have used here:</p>
                <ul className="list-inside list-disc ps-5 mb-3">
                  <li>React Router</li>
                  <li>Custom Hook</li>
                  <li>Reusable Components</li>
                </ul>
              </div>

              <div>
                <p className="text-lg">Other Features:</p>
                <ul className="list-inside list-disc ps-5 mb-3">
                  <li>Responsive</li>
                  <li>Toggle Menu</li>
                </ul>
              </div>

              <div>
                <p className="text-lg">Frameworks/Library:</p>
                <ul className="list-inside list-disc ps-5 mb-3">
                  <li>React JS</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About