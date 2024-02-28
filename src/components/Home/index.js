import React from "react";
import Navbar from "./Navbar/index";
import HomeMiddles from "./HomeMiddles/index";
import Sidebar from "./Sidebar/index";
import { MdArrowDropDown } from "react-icons/md";
import { FaFilter } from "react-icons/fa";

import "./index.css";


const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Sidebar />
      
      <div className="home-contents">
      <div className="middel-nav">
           <div className="home-middle-left">
              <p>Live(30)</p>
              <p className="green-respon">Responded(30)</p>
              <p className="red-respon">UnResponded(30)</p>
            </div>
<div className="home-middle-right">
              <p className="bid-bleack">Bid Created</p>
              <p>Today</p>
              <p>Yesterday</p>
              <div className="calendar-btn">
                Calendar
                <MdArrowDropDown />
              </div>
              <FaFilter className="filter" />
            </div>
          </div>
          <HomeMiddles />
       </div>
    </div>
  );
};

export default Home