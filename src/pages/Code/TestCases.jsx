import React from "react";
import { Tabs } from "antd";
const onChange = (key) => {
  console.log(key);
};

export const TestCases = ({ items, passed, setPassed }) => {
  return (
    <div className="h-[36vh] mt-2 bg-white rounded-md overflow-y-scroll">
      {passed ? (
        <div className="px-3 mt-9">
          <div className="flex justify-between items-center p-2 px-5 bg-green-100 rounded-md">
            <p className="text-green-600">All test cases passed</p>
            <button onClick={() => setPassed(false)} className="text-red-600 ">
              Hide
            </button>
          </div>
        </div>
      ) : (
        <div className="px-3">
          <Tabs defaultActiveKey="1" onChange={onChange}>
            {items.map((item) => (
              <Tabs.TabPane key={item.key} tab={item.label} className="p-2">
                {item.children}
              </Tabs.TabPane>
            ))}
          </Tabs>
        </div>
      )}
    </div>
  );
};
