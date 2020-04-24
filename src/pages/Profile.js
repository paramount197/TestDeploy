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
      currentUser: { id: undefined },
      eventFullMessage: "",
      eventFullMessage2: "",
    };
  }

  componentDidMount() {
    this.setState({ currentUserId: this.props.match.params.handle }, () => {
      axios
        .get(`http://localhost:4000/users/?userId=${this.state.currentUserId}`)
        .then((result) => {
          this.setState({ currentUser: result.data[0] });
        });
    });
    this.getEvents();
  }

  getEvents() {
    axios.get("http://localhost:4000/events").then((result) => {
      this.setState({
        events: result.data,
      });
    });
  }

  eventBookedMessageCore() {
    this.setState({
      eventFullMessage: "Sorry this event is fully booked",
    });
  }
  eventBookedMessage() {
    this.setState({
      eventFullMessage2: "Sorry this event is fully booked",
    });
  }

  render() {
    return (
      <>
        <Header
          header={`Welcome Back ${this.state.currentUser.firstName} ${this.state.currentUser.lastName}!`}
        />
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
            handleClick={() => this.getEvents()}
            task="Book"
            eventFullMessage={() => this.eventBookedMessageCore()}
          />
          <p>{this.state.eventFullMessage}</p>
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
            handleClick={() => this.getEvents()}
            task="Book"
            eventFullMessage={() => this.eventBookedMessage()}
          />
          <p>{this.state.eventFullMessage2}</p>
        </div>
        <div className="bookedEvents">
          <h2>My booked events</h2>
          <Events
            eventsDetail={this.state.events.filter((event) => {
              return event.booked.includes(this.state.currentUser.id);
            })}
            showButton={true}
            currentUserEmail={this.state.currentUser.id}
            task="Unbook"
            handleClick={() => this.getEvents()}
          />
        </div>
      </>
    );
  }
}

export default Profile;
