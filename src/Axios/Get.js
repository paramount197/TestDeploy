import React from "react";
import axios from "axios";
import ListItem from "../block/ListItem";

class Get extends React.Component {
  state = {
    user: [],
    event: []
  };

  componentDidMount() {
    axios.get("http://localhost:3000/users").then(res => {
      console.log("this is the user response", res);
      this.setState({ user: res.data });
    });
    axios.get("http://localhost:3000/events").then(res2 => {
      console.log("this is the event response", res2);
      this.setState({ event: res2.data });
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.user.map(users => (
            // <ListItem eventName={users.firstName} />
            <li>
              {users.firstName} {users.lastName}
            </li>
          ))}
        </ul>
        <ul>
          {this.state.event.map(events => (
            <li>{events.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Get;
