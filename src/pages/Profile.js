import React from "react";
import Header from "../block/Header";

function Profile() {
    return (
        <>
            <Header header="Welcome back human!!!" />
            <div className="notice">
                <h2> Compulsory events </h2>
                <li> Quaterley forum </li>
                <li> Christmas meal </li>
            </div>
        </>
    );
}

export default Profile;
