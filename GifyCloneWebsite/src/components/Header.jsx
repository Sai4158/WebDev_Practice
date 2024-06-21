import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";

const Header = () => {
  // this will be a empty array.
  const [categories, Setcatgories] = useState([]);
  const [showCategories, SetShowCatgories] = useState(false);

  return (
    <nav>
      <div className="relative flex gap-4 justify-between items-center mb-2">
        {/* using linke make it fast than a anchor tag */}
        <Link to="/">
          <img src="/logo.svg" className="w-8" alt="gify Logo" />
          <h1 className="text-5xl font-bold tracking-tigh cursor-pointer">
            Gify
          </h1>
        </Link>

        <div className="font-bold text-md flex gap-2 item-center">
          {/* render catogoreis  */}
          <Link className="px-4 py-1 hover:gradient border-b-4 hidden lg:block">
            Reactions
          </Link>

          <button onClick={() => SetShowCatgories(!showCategories)}>
            {/* using react icons */}
            <HiMiniBars3
              // this is a ternory operator, it will stay gradient when clicked.
              className={`px-0.5 hover:gradient
                ${
                  showCategories ? "gradient" : ""
                }  border-b-4 hidden lg:block`}
              // this icon does have inbulit size, so you can change it
              size={30}
            />
          </button>
          <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
            <Link to="/favorites"> Favorites gif</Link>
          </div>
          <button>
            <HiMiniBars3 className="text-sky-400 block lg:hidden " size={30} />
          </button>
        </div>
        {showCategories && (
          <div className="absolute rigth-0 top-14 px-10 pt-6 w-full gradient z-20">
            <span>Catogires</span>
            <hr />
            <div>
              <Link className="font-bold"> Reactions</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
