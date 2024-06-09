import React from "react";

const HomePage = () => {
  return (
    <header className="text-white bg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="https://psu.instructure.com/images/thumbnails/138133358/8TZ5AgbhGQPQ9mwZ815tEuohgNyHoaogq3UAHQjk"
            alt=""
            className="w-12"
          />
          <span class="ml-3 text-xl text-white">Sai Rangineeni</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center ">
          <a href="/" className="mr-5  hover:text-white-900">
            Home page
          </a>
          <a className="mr-5 hover:text-white-900">Education</a>
          <a className="mr-5 hover:text-white-900">Skills</a>
          <a className="mr-5 hover:text-white-900">Contact me</a>
        </nav>

        {/* this is for the button */}
        <a href="/portfolio">
          <button className="inline-flex items-center border-0 py-1 px-2 w-30 gap-3 transition-all hover:bg-gray-700  rounded text-white mt-4 md:mt-0">
            <span className="hover:scale-110 transition-all ">Portfolio</span>
            <img
              src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-forward-icon-png-image_925823.jpg"
              alt=""
              className="w-5 pl-1 gap-4"
            />
          </button>
        </a>
      </div>
    </header>
  );
};

export default HomePage;
