import React from "react";

import { HiOutlineTrash } from "react-icons/hi";

const RemoveBtn = () => {
  return (
    <div>
      <button>
        <HiOutlineTrash size={24} color="red" />
      </button>
    </div>
  );
};

export default RemoveBtn;
