import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export const ProblemStatement = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      style={{
        typography: "body1",
        padding: "10px",
        borderRadius: "5px",
        marginBottom: "10px",
        height: "93vh",
        backgroundColor: "White",
        overflow: "scroll",
      }}
    >
      <TabContext value={value}>
        <Box style={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              style={{
                textTransform: "inherit",
                fontSize: "12px",
                padding: "0px",
              }}
              label="Description"
              value="1"
            />
            <Tab
              style={{ textTransform: "lowercase" }}
              label="Solutions"
              value="2"
            />
            <Tab
              style={{ textTransform: "lowercase" }}
              label="Submit"
              value="3"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div>
            <>
              <p>
                <strong>1 . Two Sum</strong>
              </p>
              <p>
                <strong>
                  <br />
                </strong>
              </p>
              <p>
                Given an array of integers&nbsp;nums&nbsp;and an
                integer&nbsp;target, return&nbsp;indices of the two numbers such
                that they add up to&nbsp;target.
              </p>
              <p>
                <br />
              </p>
              <p>
                {" "}
                You may assume that each input would have&nbsp;exactly&nbsp;one
                solution, and you may not use the&nbsp;same&nbsp;element twice.{" "}
              </p>
              <p>
                <br />
              </p>
              <p>You can return the answer in any order.</p>
              <p>
                <br />
              </p>
              <p>
                <br />
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>Example 1:</strong>
              </p>
              <p style={{ marginLeft: 40 }}>
                <strong>
                  &nbsp;&nbsp;
                  <img
                    src="https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg"
                    alt="img"
                    width={269}
                    height={190}
                  />
                </strong>
                <br />
              </p>
              <p style={{ marginLeft: 40 }}>
                Input: nums = [2,7,11,15],&nbsp; &nbsp; target = 9
              </p>
              <p style={{ marginLeft: 40 }}>Output: [0,1]</p>
              <p style={{ marginLeft: 40 }}>
                Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
              </p>
              <p style={{ marginLeft: 40 }}>
                <br />
              </p>
              <p>
                <strong>Example 2: </strong>
              </p>
              <p style={{ marginLeft: 40 }}>
                Input: nums = [3,2,4],&nbsp; &nbsp; &nbsp; target = 6
              </p>
              <p style={{ marginLeft: 40 }}>Output: [1,2]</p>
              <p style={{ marginLeft: 40 }}>
                <br />
              </p>
              <p>
                <strong>Example 3: </strong>
              </p>
              <p style={{ marginLeft: 40 }}>
                Input: nums = [3,3],&nbsp; &nbsp; &nbsp; &nbsp;target = 6
              </p>
              <p style={{ marginLeft: 40 }}>Output: [0,1]</p>
              <p>
                <br />
              </p>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: 14 }}>
                  <strong>Follow-up</strong>:&nbsp;Can you come up with an
                  algorithm that is less than&nbsp;O(n2)&nbsp;time complexity?
                </span>
              </p>
            </>
          </div>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
};
