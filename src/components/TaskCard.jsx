import React from "react";

const TaskCard = () => {
  return (
    <div>
      <a
        href="#"
        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 relative"
      >
        {/* <div className="h-7 w-fit bg-red-500 text-white rounded-bl-xl rounded-sm px-3 absolute top-0 right-0">
            <h4 className="pb-1">In progress</h4>
          </div> */}
        <div className="h-7 w-fit bg-green-500 text-white rounded-bl-xl rounded-sm px-3 absolute top-0 right-0">
          <h4 className="pb-1">Completed</h4>
        </div>

        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Feature update
        </h5>
        <p class="font-normal text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <p>Deadline : date</p>
        <p>Priority : 100%</p>
      </a>
    </div>
  );
};

export default TaskCard;
