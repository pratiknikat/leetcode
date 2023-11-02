import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Problems } from "../../components/Problem/Problems";

export const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <h1
        style={{
          width: "60%",
          display: "flex",
          margin: "30px auto",
        }}
      >
        Problems
      </h1>
      <div
        style={{
          width: "70%",
          display: "flex",
          margin: "auto",
        }}
      >
        <Problems />
      </div>
    </div>
  );
};
