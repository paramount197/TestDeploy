import React from "react";
import axios from "axios";
// this is a working component to create a common get method

export const Get = url => {
  axios.get(url).then(result => {
    return result.data;
  });
};

export const Post = (url, data) => {
  console.log(data);
  axios
    .post(url, {
      id: data.id,
      name: data.name
    })
    .then(result => {
      console.log("this is the post data", result.data);
    });
};

// class Get extends React.Component {
//   componentDidMount() {
//     axios.get("http://localhost:4000/users").then(res => {
//       console.log("this is the user response", res);
//       this.setState({ user: res.data });
//     });
//     axios.get("http://localhost:4000/events").then(res2 => {
//       console.log("this is the event response", res2);
//       this.setState({ event: res2.data });
//     });
//   }
// }
