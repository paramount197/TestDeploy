import React from "react";
import axios from "axios";
import ListItem from "../block/ListItem";

class Post extends React.Component {
  //   postEv() {
  //     let ev = {
  //       name: "easter Party",
  //       date: "01/01/2019"
  //     };
  //     console.log("jsdfsbk");

  handleClick() {
    console.log("clicked");
    // axios
    //   .post("http://localhost:3000/events", {
    //     name: "test"
    //   })

    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  }

  render() {
    return <button onClick={this.handleClick}>post event</button>;
  }
}

export default Post;
