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
    };
  }

  componentDidMount() {
    this.setState({ currentUserId: this.props.match.params.handle }, () => {
      axios
        .get(`http://localhost:4000/users/?userId=${this.state.currentUserId}`)
        .then((result) => {
          this.setState({ currentUser: result.data[0] }, () => {
            this.getEvents();
          });
        });
    });
  }

  getEvents() {
    axios.get("http://localhost:4000/events").then((result) => {
      let intakeProgrammeCheck = result.data.filter((e) => {
        return e.intake === "September 2018" && e.programme === "Accelerator";
      });
      console.log(intakeProgrammeCheck);

      this.setState({
        events: intakeProgrammeCheck,
      });
    });
    console.log("The current user is" + this.state.currentUser.id);
  }

  render() {
    //console.log("The current user is" + this.state.currentUser);
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
            handleClick={() => this.getEvents()}
          />
        </div>
        <div className="bookedEvents">
          <h2>My booked events</h2>
          <Events
            eventsDetail={this.state.events.filter((event) => {
              return event.booked.includes(this.state.currentUser.id);
            })}
          />
        </div>
      </>
    );
  }
}

export default Profile;
