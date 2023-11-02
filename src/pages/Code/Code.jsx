import React, { useState } from "react";
import { ProblemStatement } from "./ProblemStatement";
import { AiOutlineFire } from "react-icons/ai";
import { LuTimer } from "react-icons/lu";
import { ProfileController } from "../../components/Navbar/ProfileController";
import { CodeSection } from "./CodeSection";
import { TestCases } from "./TestCases";
export const Code = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-[#F0F0F0] pt-2">
      <div className="w-[98%] m-auto h-[45px] flex bg-white rounded-md items-center justify-between">
        <div className="ml-8">Code School</div>
        <div className="flex items-center justify-center">
          <button className="bg-[#F0F0F0] text-[#1a1b1b] text-[13px] px-3 py-1 rounded-md">
            Run
          </button>
          <button className="bg-[#3876BF] ml-3 text-white text-[13px] px-2 py-1 rounded-md">
            Submit
          </button>
        </div>
        <div className="flex items-center">
          <div className="mr-2">
            <LuTimer size={20} />
          </div>
          <div className="flex items-center mr-5">
            <AiOutlineFire size={20} className="text-[20px] dark:text-white" />
            <p className="pl-1  dark:text-white">{count}</p>
          </div>
          <div>
            <ProfileController />
          </div>
        </div>
      </div>

      <div className="min-h-screen flex  p-3 bg-[#F0F0F0]">
        <div className="w-[47%]">
          <ProblemStatement />
        </div>
        <div className="ml-2 w-[53%]">
          <div>
            <CodeSection />
          </div>
          <div>
            <TestCases />
          </div>
        </div>
      </div>
    </div>
  );
};
