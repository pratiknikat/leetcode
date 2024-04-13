import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Streak } from "./Streak";
import { Problems } from "../../components/Problem/Problems";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { endpoints, problemApi } from "../../services/apis";
import { apiConnector } from "../../services/apiconnector";
import { ProgressBar } from "./ProgressBar";
import SolvedQuestions from "./SolvedQuestions";

export const Profile = () => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  if (!token) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
        className="login-container"
      >
        <img
          width="45%"
          height="45%"
          src="https://static.vecteezy.com/system/resources/previews/005/879/539/non_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg"
          alt="Login Image"
        />
        <Link to="/login">
          <button
            className="bg-gray-500 px-5 p-2 rounded-md text-white"
            style={{ marginTop: "16px", fontSize: "1.5rem" }}
          >
            Login
          </button>
        </Link>
      </div>
    );
  }

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await apiConnector("POST", endpoints.SHOWPROFILE, {
          userId: user._id,
        });
        console.log(res);
        setUserData(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profile details:", error);
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user._id]);

  return (
    <div className="bg-[#f7f9fb]">
      <Navbar />

      <div className="flex m-3 mx-[120px]">
        <div className="w-[25%] px-[21px] py-[16px] shadow-md bg-white bg-red h-[90vh] rounded-md">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <div className="flex mt-2 mb-5">
                <div>
                  <img
                    src={user.profileImg}
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
                    {user.username}
                  </h2>
                  <p style={{ color: "#262626BF" }}>Score {userData.score}</p>
                </div>
              </div>
              <hr />
              <div className="mb-8">
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "5px",
                      marginTop: "23px",
                    }}
                  >
                    <p style={{ fontWeight: "bold", fontSize: "13px" }}>Easy</p>
                    <p style={{ fontSize: "13px" }}>{userData.easy}/10</p>
                  </div>
                  <ProgressBar
                    totalQuestions={10}
                    solvedQuestions={userData.easy}
                    solvedColor="#00B8A3"
                    remainingColor="#2CBB5D40"
                  />
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "5px",
                      marginTop: "20px",
                    }}
                  >
                    <p style={{ fontWeight: "bold", fontSize: "13px" }}>
                      Medium
                    </p>
                    <p style={{ fontSize: "13px" }}>{userData.medium}/290</p>
                  </div>
                  <ProgressBar
                    totalQuestions={290}
                    solvedQuestions={userData.medium}
                    solvedColor="#FFC01E"
                    remainingColor="#FFC01E40"
                  />
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "5px",
                      marginTop: "20px",
                    }}
                  >
                    <p style={{ fontWeight: "bold", fontSize: "13px" }}>Hard</p>
                    <p style={{ fontSize: "13px" }}>{userData.hard}/120</p>
                  </div>
                  <ProgressBar
                    totalQuestions={200}
                    solvedQuestions={userData.hard}
                    solvedColor="#EF4743"
                    remainingColor="#EF474340"
                  />
                </div>
              </div>
              <hr />
              <div className="mt-4">
                <p> Badge</p>
                {/* if userdata submmision  of length is greater than equal to 1 the show https://assets.leetcode.com/static_assets/marketing/lg50.png this image if user data submmision is greater than 10 then show https://assets.leetcode.com/static_assets/marketing/lg100.png */}
                <div className="mt-3 flex flex-wrap">
                  {userData.submission && userData.submission.length >= 1 ? (
                    <img
                      src="https://assets.leetcode.com/static_assets/marketing/lg50.png"
                      alt="badge"
                      width={70}
                      height={70}
                    />
                  ) : null}
                  {userData.submission && userData.submission.length >= 10 ? (
                    <img
                      src="https://assets.leetcode.com/static_assets/marketing/lg100.png"
                      alt="badge"
                      width={70}
                      height={70}
                    />
                  ) : null}
                </div>
              </div>
            </>
          )}
        </div>
        <div className="w-[75%] ml-4 bg-[#f7f9fb]">
          <div className="bg-white shadow-md ml-4 rounded-md ">
            <div>
              <h3 className="ml-4 flex pt-5 font-sans font-[20px] text-[1rem]">
                {userData.submission ? userData.submission.length : 0}
                <p className="ml-1" style={{ color: "#262626BF" }}>
                  {" "}
                  submissions in the last year
                </p>
              </h3>
              <div className="h-[180px] w-[900px]">
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <Streak data={userData.submission} />
                )}
              </div>
            </div>
          </div>

          <div
            className=" bg-white shadow-md ml-4 rounded-md mt-4 p-3"
            style={{ maxHeight: "100vh", minHeight: "60vh" }}
          >
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <p>Solved Problem</p>
                <br />
                <hr />
                <br />
                {userData.problems ? (
                  <SolvedQuestions problems={userData.problems} />
                ) : (
                  <p>You have not solved any problems yet.</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
