import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const Topics = () => {
  return (
    <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start mx-28">
      <div>
        <h2 className="font-bold-text text-2xl">Topic name</h2>
        <div>Topic description</div>
      </div>

      <div className="flex gap-2">
        <RemoveBtn />
        <Link href={"/EditTopic/123"}>
          <HiPencilAlt size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Topics;
