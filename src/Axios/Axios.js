import React from "react";
import axios from "axios";
import ListItem from "../block/ListItem";

class Axios extends React.Component {
  state = {
    user: [],
    name: ""
  };

  componentDidMount() {
    axios.get("http://localhost:3000/users").then(res => {
      console.log(res);
      this.setState({ user: res.data });
    });
  }

  //   postEv() {
  //     let ev = {
  //       name: "easter Party",
  //       date: "01/01/2019"
  //     };
  //     console.log("jsdfsbk");

  function handleClick() {
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
  };

  render() {
    return (
      <>
        <ul>
          {this.state.user.map(users => (
            <ListItem eventName={users.firstName} />
          ))}
        </ul>
        <button onClick={handleClick}>post event</button>
      </>
    );
  }
}

export default Axios;
