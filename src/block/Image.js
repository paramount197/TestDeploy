import React from "react";
import '../styles/image.css';

function Image(props) {
    return <img src={props.src} className="eventPageImage"></img>;
}

export default Image;