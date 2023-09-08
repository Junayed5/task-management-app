import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import SignUp from "../pages/SignUpModal";
import Login from "../pages/LoginModal";
import TaskAddModal from "../layout/TaskAddModal";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";

const Home = () => {
  const [user] = useAuthState(auth);
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [tasks]);

  const filter = tasks.filter((task) => task.shareWith);
  const teamTask = filter.filter((f) => f.shareWith.includes(user?.email));

  return (
    <div className="mt-20">
      {user && (
        <h1 className="text-3xl font-semibold text-center py-5">My tasks</h1>
      )}
      <div className="grid grid-cols-3 ">
        {tasks
          ?.filter((task) => task?.addedUser === user?.email)
          ?.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}

        <div className="border-4 border-dashed h-40 w-60 flex items-center justify-center">
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="py-2.5 px-5 mr-2 mb-2 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
          >
            create your new task
          </button>
        </div>
      </div>
      {user && (
        <h1 className="text-3xl font-semibold text-center py-5">Team task</h1>
      )}
      <div className="grid grid-cols-3 ">
        {teamTask
          ?.filter((task) => task?.addedUser === user?.email)
          ?.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
      </div>

      {showModal && user?.email ? (
        <TaskAddModal setShowModal={setShowModal} />
      ) : null}
    </div>
  );
};

export default Home;
