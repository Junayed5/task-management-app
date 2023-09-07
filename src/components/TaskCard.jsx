import React from "react";

const TaskCard = ({ task }) => {
  const completeTask = (id) => {
    fetch(`http://localhost:5000/taskComplete/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <div
        href="#"
        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 relative"
      >
        {task?.status ? (
          <div className="h-7 w-fit bg-green-500 text-white rounded-bl-xl rounded-sm px-3 absolute top-0 right-0">
            <h4 className="pb-1">Completed</h4>
          </div>
        ) : (
          <div className="h-7 w-fit bg-red-500 text-white rounded-bl-xl rounded-sm px-3 absolute top-0 right-0">
            <h4 className="pb-1">In progress</h4>
          </div>
        )}

        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {task?.title}
        </h5>
        <p class="font-normal text-gray-700">{task?.description}</p>
        <p>Deadline : {task?.deadline}</p>
        <p>priority : {task?.priority}</p>

        {!task.status && (
          <button
            type="button"
            onClick={() => completeTask(task._id)}
            class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-2"
          >
            Complete
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
