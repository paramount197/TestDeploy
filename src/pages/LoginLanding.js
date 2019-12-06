import React from "react";
import Header from "../block/Header";
import Button from "../block/Button";

function LoginLanding() {
    return(
        <>
            <Header header="Welcome back human!!!" />
            <div className="notice">
                <h2> Compulsory events </h2>
                    
                        <li> Quaterley forum </li>
                        <li> Christmas meal </li>
            
            <Button name="Booked Events" />
            <Button name="Upcoming Events"/>        
            </div>
        </>    
        ); 
}

export default LoginLanding;
