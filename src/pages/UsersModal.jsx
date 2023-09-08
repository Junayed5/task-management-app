import React, { useEffect, useState } from "react";

const UsersModal = ({ setUserModal, shareWithOthers }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-sm">
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-3">
            <h1 className="text-xl text-center font-semibold my-2">
              User List
            </h1>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Share
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr class="bg-white border-b ">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {user?.name}
                      </th>
                      <td class="px-6 py-4">{user?.email}</td>
                      <td class="px-6 py-4">
                        <button
                          type="button"
                          onClick={() => shareWithOthers(user?.email)}
                          class="font-medium text-blue-600 hover:underline"
                        >
                          Share
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-end rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase pt-2 text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setUserModal(false)}
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

export default UsersModal;
