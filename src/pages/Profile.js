import React from "react";
import Header from "../block/Header";
import Events from "../block/Events";
import axios from "axios";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      eventId: "",
      currentUserId: undefined,
      currentUser: { id: undefined }
    };
  }

  componentDidMount() {
    this.setState({ currentUserId: this.props.match.params.handle }, () => {
      axios
        .get(`http://localhost:4000/users/?userId=${this.state.currentUserId}`)
        .then(result => {
          this.setState({ currentUser: result.data[0] });
        });
    });
    axios.get("http://localhost:4000/events").then(result => {
      this.setState({
        events: result.data
      });
    });
  }

  render() {
    return (
      <>
        <Header header="Welcome back!" />
        <div className="CoreEvents">
          <h2> Core events </h2>
          <Events
            eventsDetail={this.state.events.filter(function (x) {
              if (x.coreSelection === "Core") {
                return true;
              } else {
                return false;
              }
            })}
            showButton={true}
            currentUserEmail={this.state.currentUser.id}
          />
        </div>

        <div className="NonCoreEvents">
          <h2> Non core events </h2>
          <Events
            eventsDetail={this.state.events.filter(function (x) {
              if (x.coreSelection === "Non-core") {
                return true;
              } else {
                return false;
              }
            })}
            showButton={true}
            currentUserEmail={this.state.currentUser.id}
          />
        </div>
      </>
    );
  }
}

export default Profile;
