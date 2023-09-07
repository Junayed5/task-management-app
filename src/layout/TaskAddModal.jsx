import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";

const TaskAddModal = ({ setShowModal }) => {
  const [user] = useAuthState(auth);

  const taskSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const deadline = e.target.deadline.value;
    const priority = e.target.priority.value;
    const addedUser = user.email;
    const status = false;

    const task = { title, description, deadline, priority, addedUser, status };

    const res = await fetch("http://localhost:5000/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const result = await res.json();

    if (result.acknowledged) {
      setShowModal(false);
    }
  };

  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-sm">
          <div class="w-96 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
            <form onSubmit={taskSubmit} class="space-y-6">
              <h5 class="text-xl font-medium text-gray-900">Create a task</h5>
              <div>
                <label
                  for="title"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Title"
                  required
                />
              </div>
              <div>
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Description
                </label>
                <textarea
                  type="text"
                  name="description"
                  id="description"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Description"
                  required
                />
              </div>
              <div>
                <label
                  for="deadline"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Deadline
                </label>
                <input
                  type="date"
                  name="deadline"
                  id="deadline"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label
                  for="priority"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Priority
                </label>
                <input
                  type="text"
                  name="priority"
                  id="priority"
                  placeholder="Priority"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <button
                type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </form>
            <div className="flex items-center justify-end rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase pt-2 text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default TaskAddModal;
