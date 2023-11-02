import React, { useState } from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";
import { AiOutlineFire } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegFileCode } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";

export const ProfileController = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <p
        className="bg-[#1a1b1b] text-white p-[6px] text-[13px] rounded-[50%] mr-6 dark:bg-white dark:text-black hover:cursor-pointer"
        onClick={handleClick}
      >
        PN
      </p>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <div className="flex items-center">
            <div>
              <p
                className="bg-[#1a1b1b] text-white p-1 mr-[15px] text-[20px] rounded-[50%] p-[12px] mr-2 dark:bg-white dark:text-black hover:cursor-pointer"
                onClick={handleClick}
              >
                PN
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[17px] mb-1">pratik_n_987</h3>
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
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <div className="flex items-center justify-between">
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
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <div className="flex items-center justify-between">
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
      </Menu>
    </div>
  );
};
