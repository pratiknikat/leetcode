import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { GrPowerReset } from "react-icons/gr";
import { TbSettings } from "react-icons/tb";
import { AiOutlineFullscreen } from "react-icons/ai";

export const CodeSection = () => {
  return (
    <div className="h-[56vh] bg-white rounded-md overflow-y-scroll">
      <div
        className="flex items-center justify-between px-4 py-1"
        style={{ borderBottom: "3px solid #F0F0F0" }}
      >
        <Box sx={{ width: "80px" }}>
          <FormControl fullWidth>
            <NativeSelect
              style={{ fontSize: "13px", border: "none" }}
              defaultValue={30}
              inputProps={{
                id: "uncontrolled-native",
              }}
            >
              <option value={10}>C</option>
              <option value={20}>C++</option>
              <option value={30}>Java</option>
              <option value={40}>Python</option>
            </NativeSelect>
          </FormControl>
        </Box>
        <div className="flex items-center">
          <GrPowerReset style={{ color: "#F0F0F0", cursor: "pointer" }} />
          <TbSettings size={18} className="ml-4 cursor-pointer" />
          <AiOutlineFullscreen size={18} className="ml-4 cursor-pointer" />
        </div>
      </div>

      <div style={{ overflowY: "scroll" }}></div>
    </div>
  );
};
