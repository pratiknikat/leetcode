import React from "react";
import { Link } from "react-router-dom";
const SolvedQuestions = ({ problems }) => {
  console.log(problems);
  return (
    <div>
      {problems.map((prob) => (
        <>
          <Link to={`/problem/${prob._id}`}>
            <div
              style={{ marginBottom: "8px", marginLeft: "30px" }}
              key={prob.id}
            >
              {prob.problemTitle}
            </div>
          </Link>

          <hr />
        </>
      ))}
    </div>
  );
};

export default SolvedQuestions;
