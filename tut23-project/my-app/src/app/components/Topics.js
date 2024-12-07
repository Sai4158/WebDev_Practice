import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const Topics = () => {
  return (
    <div>
      <div>
        <h2>Topic name</h2>
        <div>Topic description</div>
      </div>
      <div>
        <RemoveBtn />
        <HiPencilAlt size={24} />
        <Link href={"/EditTopic/123"}></Link>
      </div>
    </div>
  );
};

export default Topics;
