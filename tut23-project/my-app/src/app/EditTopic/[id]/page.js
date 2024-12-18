import EditTopicForm from "@/app/components/EditTopicForm";
import React from "react";

const page = async ({ params }) => {
  const { id } = params;

  const getTopicById = async () => {
    try {
      const res = await fetch(`http://localhost:3000/models/Api/topics/${id}`, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch the topic");
      }
      return res.json();
    } catch (error) {
      console.log("Error fetching topic:", error);
      return null;
    }
  };

  const topic = await getTopicById();

  if (!topic) {
    return <div>Error: Topic not found</div>;
  }

  const { title, description } = topic;

  return (
    <div>
      <EditTopicForm id={id} title={title} description={description} />
    </div>
  );
};

export default page;
