import React from "react";

import { Tabs } from "antd";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Testcase",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Result",
    children: "Content of Tab Pane 2",
  },
];

export const TestCases = () => {
  return (
    <div className="h-[36vh] mt-2 bg-white rounded-md overflow-y-scroll">
      <div className="px-3">
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          indicatorSize={(origin) => origin - 16}
        />
      </div>
    </div>
  );
};
