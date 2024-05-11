import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () => toast("Wow so easy!");

  return (
    //center
    <div className="h-screen w-screen flex justify-center items-center">
      <button className="bg-black text-white p-5 " onClick={notify}>
        Notify!
      </button>
      <ToastContainer />
    </div>
  );
}

export default App;
