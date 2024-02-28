import React from "react";

import "./index.css";

const Sidebar = () => {

  return (
    <div className="sidebar-container">
      <div className="logo-container">
        <div className="logo" />
        <p>Logo</p>
      </div>
      <div className="sidebar-contents">
        <div className="sidebar-top-container">
          <div
            className='sidebar-top-items'> <p>Bid</p>
          </div>
          <div
            className='sidebar-top-items '> <p>POD</p>
          </div>
          <div
            className='sidebar-top-items '> <p>Vendor</p>
          </div>
          <div
            className='sidebar-top-items '> <p>User</p>
          </div>
        <div className="sidebar-bottom-container">
          <div
            className='sidebar-bottom-items'>
           <p>Settings</p>
          </div>
          <div
            className='sidebar-bottom-items'> <p>Profile</p>
          </div>
          <div className='sidebar-bottom-items'> <p>Contact Us</p>
          </div>
          <div
            className='sidebar-bottom-items'>
           <p>Logout</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;