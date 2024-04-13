import React, { useState } from "react";
import { useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { FaRegFileCode } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";
import { TbLogin2 } from "react-icons/tb";

export const ProfileController = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Add your logout logic here
    // For example, dispatch a logout action
    // dispatch(logoutAction());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.clear();
    handleClose();
  };

  return (
    <div>
      <img
        src={
          user
            ? user.profileImg
            : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        }
        alt="Profile Image"
        width={33}
        height={33}
        className=" rounded-[50%] mr-6 dark:bg-white dark:text-black hover:cursor-pointer"
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {user ? (
          <MenuItem onClick={handleClose}>
            <Link to="/profile">
              <div className="flex items-center">
                <div>
                  <img
                    src={user.profileImg}
                    alt="Profile Image"
                    width={80}
                    height={80}
                    className="text-white text-[20px] rounded-[50%] p-[12px] mr-2 hover:cursor-pointer"
                    onClick={handleClick}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-[17px] mb-1">
                    {user.username}
                  </h3>
                  <p
                    style={{
                      width: "170px",
                      fontSize: "13px",
                      textWrap: "wrap",
                      color: "#FFA116",
                    }}
                  >
                    Access all features with our Premium subscription
                  </p>
                </div>
              </div>
            </Link>
          </MenuItem>
        ) : null}
        <MenuItem onClick={handleClose}>
          <Link to="/playground">
            <div className="flex items-center p-2 justify-between">
              <FaRegFileCode color="gray" size={18} />
              <p
                style={{
                  marginLeft: "20px",
                  fontSize: "14px",
                  color: "gray",
                }}
              >
                My Playground
              </p>
            </div>
          </Link>
        </MenuItem>

        {user ? (
          <MenuItem onClick={handleLogout}>
            <div className="flex items-center p-2 justify-between">
              <TbLogout color="gray" size={22} />
              <p
                style={{
                  marginLeft: "20px",
                  fontSize: "14px",
                  color: "gray",
                }}
              >
                Sign Out
              </p>
            </div>
          </MenuItem>
        ) : (
          <MenuItem onClick={handleClose}>
            <Link to="/login">
              <div className="flex items-center p-2 justify-between">
                <TbLogin2 color="gray" size={22} />
                <p
                  style={{
                    marginLeft: "20px",
                    fontSize: "14px",
                    color: "gray",
                  }}
                >
                  Login
                </p>
              </div>
            </Link>
          </MenuItem>
        )}
      </Menu>
    </div>
  );
};
