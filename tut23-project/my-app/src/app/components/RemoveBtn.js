import React from "react";

import { HiOutlineTrash } from "react-icons/hi";

const RemoveBtn = ({ id }) => {
  const confirmed = confirm("Are you sure you want to delete this");

  const removeTopic = async () => {
    if (confirmed) {
      await fetch(`http://localhost:3000/models/Api/topics/${id}`, {
        method: "DELETE",
      });
    }
  };

  return (
    <div>
      <button onClick={removeTopic}>
        <HiOutlineTrash size={24} color="red" />
      </button>
    </div>
  );
};

export default RemoveBtn;
