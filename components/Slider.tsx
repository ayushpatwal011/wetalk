import Link from "next/link";
import React from "react";
import ProfilePhoto from "./shared/ProfilePhoto"

const Slider = ({user}:{user:any}) => {
  return (
    <div className="hidden lg:block flex-col w-64 h-screen bg-gray-800 text-white  ">
      {/* Profile Section */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center  space-x-4">
         <ProfilePhoto src={user ? user?.imageUrl : "/logo.png"} />
          </div>
          <div>
            <h2 className="text-lg font-bold">{user ? `${user?.firstName} ${user?.lastName}` : "username"}</h2>
            <p className="text-sm text-gray-400">{user ? `${user?.emailAddresses[0].emailAddress}` : "email"}</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow p-6">
        <ul className="space-y-4">
          <li>
            <Link
              href="#home"
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700"
            >
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="#messages"
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700"
            >
              <span>Messages</span>
            </Link>
          </li>
          <li>
            <Link
              href="#notifications"
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700"
            >
              <span>Notifications</span>
            </Link>
          </li>
          <li>
            <Link
              href="#notifications"
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700"
            >
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              href="#notifications"
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700"
            >
              <span>Contect</span>
            </Link>
          </li>
          <li>
            <Link
              href="#notifications"
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700"
            >
              <span>More</span>
            </Link>
          </li>
          <li>
            <Link
              href="#notifications"
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 "
            >
              <span>Setting</span>
            </Link>
          </li>
          
        </ul>
      </nav>

    </div>
  );
};

export default Slider;
