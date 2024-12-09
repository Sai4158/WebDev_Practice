import React from "react";

const EditTopicForm = () => {
  return (
    <div>
      <form action="" className="flex flex-col gap-3 mx-80">
        <input
          type="text"
          placeholder="Topic Title"
          className="border border-slate-500 px-8 py-2"
        />

        {/* Topic desc */}
        <input
          type="text"
          placeholder="Topic description"
          className="border border-slate-500 px-8 py-2"
        />

        {/* Submit button */}
        <button
          type="submit"
          className="bg-green-600 font-bold  text-white py-3 px-4"
        >
          Update Topic
        </button>
      </form>
    </div>
  );
};

export default EditTopicForm;
