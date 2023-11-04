import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Streak } from "./Streak";
import { Problems } from "../../components/Problem/Problems";

export const Profile = () => {
  const data = [
    { value: 5, day: "2016-03-01" },
    { value: 2, day: "2016-03-02" },
    { value: 8, day: "2016-03-03" },
    { value: 1, day: "2016-03-04" },
    { value: 7, day: "2016-03-05" },
    { value: 3, day: "2016-03-06" },
    { value: 6, day: "2016-03-07" },
    { value: 4, day: "2016-03-08" },
    { value: 9, day: "2016-03-09" },
    { value: 2, day: "2016-03-10" },
    { value: 7, day: "2016-03-11" },
    { value: 1, day: "2016-03-13" },
    { value: 8, day: "2016-03-14" },
    { value: 3, day: "2016-03-15" },
    { value: 6, day: "2016-03-16" },
    { value: 4, day: "2016-03-17" },
    { value: 9, day: "2016-03-18" },
    { value: 2, day: "2016-03-19" },
    { value: 7, day: "2016-03-20" },
    // Add more data points as needed
  ];
  return (
    <div className="bg-[#f7f9fb]">
      <Navbar />
      <div className="flex m-3 mx-[120px]">
        <div className="w-[25%] px-[21px] py-[16px] shadow-md bg-white bg-red h-[90vh] rounded-md">
          <div className="flex mt-2 mb-5">
            <div>
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/business-male-7267567-5914557.png?f=webp"
                alt="Profile Photo"
                width={90}
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#F0F0F0",
                }}
              />
            </div>
            <div className="ml-4 justify-between items-between">
              <h2 style={{ fontWeight: "bold", color: "#1a1b1b" }}>
                pratik_n_987
              </h2>
              <p style={{ color: "#262626BF" }}>Rank 12,988,624</p>
            </div>
          </div>
          <hr />
        </div>
        <div className="w-[75%] ml-4 bg-[#f7f9fb]">
          <div className="bg-white shadow-md ml-4 rounded-md ">
            <div>
              <h3 className="ml-4 flex pt-5 font-sans font-[20px] text-[1rem]">
                <b>30</b>
                <p className="ml-1" style={{ color: "#262626BF" }}>
                  {" "}
                  submissions in the last year
                </p>
              </h3>
              <div className="h-[180px] w-[900px]">
                <Streak data={data} />
              </div>
            </div>
          </div>

          <div
            className=" bg-white shadow-md ml-4 rounded-md mt-4 p-3"
            style={{ maxHeight: "100vh" }}
          >
            <Problems />
          </div>
        </div>
      </div>
    </div>
  );
};
