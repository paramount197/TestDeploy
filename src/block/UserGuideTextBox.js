import React from "react";
import "../styles/usersguide.css";

function UserGuideContent(props) {
    return (
        <div>
            <img src={props.src} className="display" alt={props.alt}></img>
            <div className="box">
                <p> {props.text} </p >
            </div>
        </div>
    );
}

export default UserGuideContent; 
