import React from "react";
import Header from "../block/Header";
import Intro from "../block/Intro";
import Blurb from "../block/Blurb";
import Image1 from "../images/placeholder.png";
import Image2 from "../images/placeholder2.png";
import Image3 from "../images/placeholder3.png";
import Image4 from "../images/placeholder4.png";
import UserGuideTextBox from "../block/UserGuideTextBox";


function UsersGuide() {
   return (
      <>
         <div>
            <Header header="Users Guide Page" />
            <Intro intro="Welcome to the UserGuide Page." />
            <Blurb blurb="Here you'll be able to learn how to navigate the TDP Events Webpage" />
         </div>
         <UserGuideTextBox
               Image
               src={Image1}
               alt="Test Image 1"
               text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     used do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laborin
                     nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                     deserunt mollit anim id est laborum."
         />
         <UserGuideTextBox
               Image
               src={Image2}
               alt="Test Image 2"
               text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     used do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laborin
                     nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                     deserunt mollit anim id est laborum."
         />
         <UserGuideTextBox
               Image
               src={Image3}
               alt="Test Image 3"
               text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     used do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laborin
                     nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                     deserunt mollit anim id est laborum."
         />
         <UserGuideTextBox
               Image
               src={Image4}
               alt="Test Image 4"
               text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     used do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laborin
                     nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                     deserunt mollit anim id est laborum."
         />
      </>
   );
}

export default UsersGuide;