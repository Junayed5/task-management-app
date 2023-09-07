import React from "react";
import TaskCard from "./TaskCard";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

const Home = () => {
  return (
    <div className="mt-20">
      <div className="border-4 border-dashed h-64 w-60 flex items-center justify-center">
        {/* <button className="text-xl font-semibold"></button> */}
        <button
          type="button"
          class="py-2.5 px-5 mr-2 mb-2 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
        >
          create your new task
        </button>
      </div>

      <TaskCard />
      <SignUp />
      <Login />
    </div>
  );
};

export default Home;