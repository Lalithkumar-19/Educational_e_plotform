import React from "react";
import "../AdminpanelComponents/topbar.css";
export default function Ins_topbar( {setSelected} ) {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Edudev instructor</span>
        </div>
        <div className="topRight" >
          <div className="topbarIconContainer" onClick={() => setSelected(6)} >
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}