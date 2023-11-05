import React from "react";
import { Tabs } from "antd";
const onChange = (key) => {
  console.log(key);
};

export const TestCases = ({ items }) => {
  return (
    <div className="h-[36vh] mt-2 bg-white rounded-md overflow-y-scroll">
      <div className="px-3">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
};
