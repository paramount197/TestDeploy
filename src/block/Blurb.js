import React from "react";

function Blurb(props) {
    return <>
        <p>{props.line1}</p>
        <p>{props.line2}</p>
        <p>{props.line3}</p>
    </>
}

export default Blurb;