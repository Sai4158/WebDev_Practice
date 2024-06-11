import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // this will be a empty array.
  const [categories, Setcatgories] = useState([]);
  const [showCategories, SetShowCatgories] = useState(false);

  return (
    <nav>
      <div>
        {/* using linke make it fast than a anchor tag */}
        <Link to="/">
          <img src="" alt="" />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
