import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiBars2 } from "react-icons/hi2";

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

        {/* render catogoreis  */}
        <Link className="px-4 py-1 hover:gradient border-b-4 hidden lg:block">
          Reactions
        </Link>

        <button onClick={() => SetShowCatgories(!showCategories)}>
          <HiBars2
            // this is a ternory operator, it will stay gradient when clicked.
            className={`px-0.5 hover:gradient
                ${
                  showCategories ? "gradient" : ""
                }  border-b-4 hidden lg:block`}
            // this icon does have inbulit size, so you can change it
            size={35}
          />
        </button>
      </div>
    </nav>
  );
};

export default Header;
