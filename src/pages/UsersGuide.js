import React from "react";
import Header from "../block/Header";
import Intro from "../block/Intro";
import Blurb from "../block/Blurb";
import "../styles/usersguide.css";
import Image from "../block/Image";
import Image1 from "../images/placeholder.png";
import Image2 from "../images/placeholder2.png";
import Image3 from "../images/placeholder3.png";
import Image4 from "../images/placeholder4.png";


function UsersGuide() {
   return (
      <>
         <div>
            <Header header="Users Guide Page" />
            <Intro intro="Welcome to the UserGuide Page." />
            <Blurb blurb="Here you'll be able to learn how to navigate the TDP Events Webpage" />
         </div>
         <body>
            <div styleName="display" />
            <Image
               src={Image1}
               styleName="display"
               alt="Placeholder"
            />
            <Image
               src={Image2}
               styleName="display"
               alt="Placeholder2"
            />
            <Image
               src={Image3}
               styleName="display"
               alt="Placeholder3"
            />
            <Image
               src={Image4}
               styleName="display"
               alt="Placeholder4"
            />
            <div className="box1">
               <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laborin
                                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                 reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                    anim id est laborum. </p>
            </div>
            <div className="box2">
               <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laborin
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                    anim id est laborum. </p>
            </div>
            <div className="box3">
               <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laborin
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                    anim id est laborum. </p>
            </div>
            <div className="box4">
               <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laborin
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                    anim id est laborum. </p>
            </div>
         </body>
      </>
   );
}

export default UsersGuide;