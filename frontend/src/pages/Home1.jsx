import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-800">
            Uber
          </a>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-black">
              Ride
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Drive
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Help
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Sign Up
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Log In
            </a>
          </nav>
          <button className="md:hidden text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 md:text-5xl">
            Move the way you want with{" "}
            <span className="text-indigo-600">Uber</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Get a reliable ride in minutes with the Uber app.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <a
              href="#"
              className="px-6 py-3 bg-indigo-600 text-white rounded-md text-lg hover:bg-indigo-700"
            >
              Get Started
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md text-lg hover:bg-gray-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h11M9 21V3m-6 9h3m9 6h3m-9 6h3m3-6h3"
                  />
                </svg>
              ),
              title: "Ride",
              description:
                "Convenient and affordable rides at your fingertips.",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              ),
              title: "Drive",
              description: "Earn on your own schedule as a driver-partner.",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.5 5.5L19 19m-7-7a3.5 3.5 0 11-5 5M6 16l1 1m6 0h6"
                  />
                </svg>
              ),
              title: "Safety",
              description: "Your safety is our priority at every step.",
            },
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-indigo-100 p-6 rounded-full inline-block">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800">
        <div className="container mx-auto px-6 py-6 text-gray-400">
          <div className="flex justify-between">
            <p>&copy; 2024 Uber, Inc. All rights reserved.</p>
            <nav className="space-x-6">
              <a href="#" className="hover:text-white">
                Privacy
              </a>
              <a href="#" className="hover:text-white">
                Terms
              </a>
              <a href="#" className="hover:text-white">
                Help
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
