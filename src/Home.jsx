import React, { useEffect, useState } from "react";
import "./Home.css";
import { SlOptions } from "react-icons/sl";
import { FaBriefcase } from "react-icons/fa";
import { IoLogoGameControllerA } from "react-icons/io";
import { IoMdSchool } from "react-icons/io";
import { FaPersonRunning } from "react-icons/fa6";
import { BsChatDotsFill } from "react-icons/bs";
import { BsFillHeartPulseFill } from "react-icons/bs";
import jsonData from "./assets/pack.json";
import logo from "./assets/img.png";
const Home = () => {
  const [currentStat, setCurrentStat] = useState("day");
  const iconMapping = {
    FaBriefcase: <FaBriefcase />,
    FaPersonRunning: <FaPersonRunning />,
    IoLogoGameControllerA: <IoLogoGameControllerA />,
    BsChatDotsFill: <BsChatDotsFill />,
    IoMdSchool: <IoMdSchool />,
    BsFillHeartPulseFill: <BsFillHeartPulseFill />,
  };
  return (
    <>
      <div className="container">
        <div className="grid-div">
          <div className="user-card">
            <div className="userCardContainer">
              <div className="topUser">
                <div className="image">
                  <img src={logo} alt="" />
                </div>
                <div className="titless">
                  <span>Report for</span>
                  <h1>{jsonData.user}</h1>
                </div>
              </div>
              <div className="buttomUser">
                <span
                  onClick={() => {
                    setCurrentStat((old) => "day");
                  }}
                >
                  Daily
                </span>
                <span
                  onClick={() => {
                    setCurrentStat((old) => "week");
                  }}
                >
                  Weekly
                </span>
                <span
                  onClick={() => {
                    setCurrentStat((old) => "month");
                  }}
                >
                  Monthly
                </span>
              </div>
            </div>
          </div>
          {jsonData.activities.map((row, index) => {
            return (
              <>
                <div key={index} className="card">
                  <div className="cardBody" style={{ background: row.color }}>
                    <div className="cardIcon">
                      <span>{iconMapping[row.icon]}</span>
                    </div>
                    <div className="infos">
                      <div className="topBar">
                        <div className="title">{row.name}</div>
                        <div className="icon">
                          <SlOptions />
                        </div>
                      </div>
                      <div className="time">
                        {currentStat === "day"
                          ? row.time[0][0]
                          : currentStat === "week"
                          ? row.time[1][0]
                          : row.time[2][0]}
                        hrs
                      </div>
                      <div className="Buttom">
                        Last Day -{" "}
                        {currentStat === "day"
                          ? row.time[0][1]
                          : currentStat === "week"
                          ? row.time[1][1]
                          : row.time[2][1]}
                        hrs
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
