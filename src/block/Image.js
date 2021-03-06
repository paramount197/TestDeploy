import React from "react";
import "../styles/image.css";
import "../styles/gallery.css";

function Image(props) {
  return (
    <img src={props.src} className={props.styleName} alt={props.alt}></img>
  );
}

export default Image;
