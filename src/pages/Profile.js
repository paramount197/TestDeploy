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
      currentUser: undefined
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
      addBookedAttendee();
    });
    let addBookedAttendee = () => {
      let attendees = this.state.events;
    };
  }

  render() {
    return (
      <>
        <Header header="Welcome back!" />
        <p>{this.state.currentUserId}</p>
        <div className="CoreEvents">
          <h2> Core events </h2>
          <Events
            eventsDetail={this.state.events.filter(function(x) {
              if (x.coreSelection === "core") {
                return true;
              } else {
                return false;
              }
            })}
            showButton={true}
            testUser={this.state.user}
          />
        </div>

        <div className="NonCoreEvents">
          <h2> Non core events </h2>
          <Events
            eventsDetail={this.state.events.filter(function(x) {
              if (x.coreSelection === "noncore") {
                return true;
              } else {
                return false;
              }
            })}
            showButton={true}
            testUser="ArbindIsGod1@awesome.com"
          />
        </div>
      </>
    );
  }
}

export default Profile;
