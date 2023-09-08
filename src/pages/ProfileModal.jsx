import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";

const ProfileModal = ({ setShowProfileModal }) => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <div className="flex mt-16 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-sm">
          <div class="w-72 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
            <h1 className="text-2xl font-semibold text-center">Profile</h1>

            <div>
              <img
                className="h-20 w-20 border-4 rounded-full mx-auto my-7"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuU542gIINaIEySG4eg4v6AIs9vZmqn1nJZQ&usqp=CAU"
                alt=""
              />

              <p>Email : {user?.email}</p>
            </div>

            <div className="flex items-center justify-end rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase pt-2 text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowProfileModal(false)}
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

export default ProfileModal;
