import React from "react";
import { Link } from "react-router-dom";
import "./Side-bar.css";

class SideBar extends React.Component {
    
    render() {
        const currentUrl = window.location.pathname;
        const userName = localStorage.getItem('userName');
        var todayDate = new Date().toISOString().slice(0, 10).replace(/-/g, '.');

        return (currentUrl === "/home" || currentUrl === "/history") 
        ? <div className="sideBar">
            <h1 className = "logo">HANDEY</h1>
            <h2 className = "todayDate">{todayDate}</h2>
            <h3 className = "welcomeMessage">{userName}님 환영합니다.</h3>
            <div className = "calendar"></div>
            <ul className = "sidebarList">
                <li><Link to="/home">HOME</Link></li>
                <li><Link to="/history">HISTORY</Link></li>
                <li>HELP</li>
                <li><Link to="/info">INFO</Link></li>
                <li><Link to="/trash">TRASH</Link></li>
            </ul>
            <div className="logout">Log Out</div>
        </div>
        : null;
    }
}

export default SideBar;