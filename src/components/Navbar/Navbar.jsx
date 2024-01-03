import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineFire } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { ProfileController } from "./ProfileController";

export const Navbar = () => {
  const [count, setCount] = useState(0);
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);

  return (
    <div className="shadow-md p-[15px] rounded-md ml-2 mr-2 mb-2 bg-white dark:bg-[#282828] flex justify-between">
      <Link to={"/"}>
        <p className="text-[20px] dark:text-white">Logo</p>
      </Link>

      <div className="flex items-center">
        <IoMdNotificationsOutline
          size={22}
          className="text-[20px] dark:text-white mr-4"
        />
        <div className="flex items-center mr-5">
          <AiOutlineFire size={20} className="text-[20px] dark:text-white" />
          <p className="pl-1  dark:text-white">{count}</p>
        </div>
        <div>
          <ProfileController />
        </div>
      </div>
    </div>
  );
};
