import React from "react";
import bike from "../assets/icon_bike.png"
import yoga from "../assets/icon_yoga.png"
import swiming from "../assets/icon_swiming.png"
import muscles from "../assets/icon_muscles.png"
import '../styles/sider.css'

function Sider() {
    return (<div className="sider">
        <div className="sider-icons">
            <img src={yoga} alt='yoga' className="sider-icon"></img>
            <img src={swiming} alt='swiming' className="sider-icon"></img>
            <img src={bike} alt='bike' className="sider-icon"></img>
            <img src={muscles} alt='muscles' className="sider-icon"></img>
        </div>
        <p className="sider-copyrights">Copyright, SportSee</p>
    </div>)
}

export default Sider