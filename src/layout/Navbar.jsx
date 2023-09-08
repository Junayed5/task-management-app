import React, { useState } from "react";
import LoginModal from "../pages/LoginModal";
import SignUpModal from "../pages/SignUpModal";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";
import { signOut } from "firebase/auth";
import ProfileModal from "../pages/ProfileModal";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [showLoginModal, setShowModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <nav class="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center">
            <span class="self-center text-2xl font-semibold whitespace-nowrap ">
              Task Manager
            </span>
          </a>
          <div class="flex md:order-2">
            {user ? (
              <>
                <button
                  type="button"
                  onClick={handleSignOut}
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
                >
                  Sign out
                </button>
                <div className="mx-5">
                  <img
                    onClick={() => setShowProfileModal(true)}
                    className="h-10 w-10 rounded-full border-2 cursor-pointer"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuU542gIINaIEySG4eg4v6AIs9vZmqn1nJZQ&usqp=CAU"
                    alt=""
                  />
                </div>
              </>
            ) : (
              <div>
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-2"
                >
                  Sign in
                </button>
                <button
                  type="button"
                  onClick={() => setShowRegisterModal(true)}
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
                >
                  Sign Up
                </button>
              </div>
            )}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
        {showLoginModal ? <LoginModal setShowModal={setShowModal} /> : null}
        {showProfileModal ? (
          <ProfileModal setShowProfileModal={setShowProfileModal} />
        ) : null}
        {showRegisterModal ? (
          <SignUpModal setShowRegisterModal={setShowRegisterModal} />
        ) : null}
      </nav>
    </div>
  );
};

export default Navbar;
