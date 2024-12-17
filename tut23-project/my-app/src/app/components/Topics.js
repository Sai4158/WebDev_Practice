import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

// Gets topic information form the DB

const getTopic = async () => {
  try {
    const res = await fetch("http://localhost:3000/models/Api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const Topics = async () => {
  await getTopic();

  const topic = await getTopic();
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
