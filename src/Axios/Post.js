import React from "react";
import axios from "axios";
// To do - increment event so doesn't have to be manual
// get all Events, but only id values.
// put into Array
// sort Array
// new id = highest id + 1

class Post extends React.Component {
  handleClick = () => {
    console.log("clicked");
    axios
      .post("http://localhost:4000/events", {
        id: 8,
        name: "This is a non core event",
        date: "01/12/2020",
        location: "Wakefield house",
        programme: ["Accelerator", "IP"],
        cohort: ["September 2019"],
        noncore: ["yes"]
      })
      .then(res => {
        console.log("this is the post response", res);
        console.log("this is the post data", res.data);
        window.location.reload();
      });
  };

  render() {
    return <button onClick={this.handleClick}>Add event</button>;
  }
}

export default Post;
