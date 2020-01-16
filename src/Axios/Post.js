import React from "react";
import axios from "axios";

class Post extends React.Component {
  handleClick = () => {
    console.log("clicked");
    axios
      .post("http://localhost:4000/events", {
        id: 5,
        name: "demo Arbind2",
        date: "01/12/2020",
        location: "Wakefield house",
        programme: ["Accelerator", "IP"],
        cohort: ["September 2019"]
      })
      .then(res => {
        console.log("this is the post response", res);
        console.log("this is the post data", res.data);
      });
  };

  render() {
    return <button onClick={this.handleClick}>Post event</button>;
  }
}

// get all Events, but only id values.

// put intob Array

// sort Array

// new id = highest id + 1

export default Post;
