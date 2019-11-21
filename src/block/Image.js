import React from "react";
import '../styles/image.css';

function Image(props) {
    return <img src={props.src} className={props.styleName}></img>;
}

export default Image;