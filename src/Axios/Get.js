import React from "react";
import axios from "axios";
import ListItem from "../block/ListItem";

class Get extends React.Component {
  state = {
    user: []
  };

  componentDidMount() {
    axios.get("http://localhost:3000/users").then(res => {
      console.log("this is the response", res);
      this.setState({ user: res.data });
    });
  }

  render() {
    return (
      <ul>
        {this.state.user.map(users => (
          // <ListItem eventName={users.firstName} />
          <li>
            {users.firstName} {users.lastName}
          </li>
        ))}
      </ul>
    );
  }
}

export default Get;
