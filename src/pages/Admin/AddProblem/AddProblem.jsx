import React, { useState, useRef } from "react";
import { Divider, Steps } from "antd";
import { TextProblem } from "../TextProblem";
import { Navbar } from "../../../components/Navbar/Navbar";
export const AddProblem = () => {
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
  const description1 = "hi ";
  return (
    <>
      <Navbar />

      <div className="flex justify-between mx-[90px] mt-10">
        <p>Add problem</p>
        <p>Show Instructions</p>
      </div>
      <div className="w-[70%] mt-10 mb-10 m-[auto]">
        <Steps
          current={current}
          onChange={onChange}
          items={[
            {
              title: "Step 1",
              description1,
            },
            {
              title: "Step 2",
              description1,
            },
            {
              title: "Step 3",
              description1,
            },
          ]}
        />
      </div>
      <div>{current == 0 ? <TextProblem /> : <></>}</div>
    </>
  );
};
