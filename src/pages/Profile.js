import React from "react";
import Header from "../block/Header";
import Events from "../block/Events";
import axios from "axios";

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            id: 3,
            user: "ross@test.com", //needs needs to be the logged in user-name

            events: [],
            testUser: "",
            eventId: "",
            currentUser: "arbindIsSuoerAwesome.com"
        };
    }

    componentDidMount() {
        const { handle } = this.props.match.params;
        this.setState({ currentUser: handle });

        axios.get("http://localhost:4000/events").then(result => {
            this.setState({
                events: result.data
            })
            addBookedAttendee();
        })
        addBookedAttendee(){
            let attendees = this.state.events
        }

    };


    render() {
        return (
            <>
                {console.log(this.state.events)}
                <Header header="Welcome back!" />
                <div className="CoreEvents">
                    <h2> Core events </h2>
                    <Events
                        eventsDetail={this.state.events.filter(
                            function (x) {
                                if (x.coreSelection === "core") {
                                    return true;
                                }
                                else {
                                    return false;
                                }
                            }
                        )}

                        showButton={true}
                        testUser={this.state.user}


                    />
                </div>

                <div className="NonCoreEvents">
                    <h2> Non core events </h2>
                    <Events
                        eventsDetail={this.state.events.filter(
                            function (x) {
                                if (x.coreSelection === "noncore") {
                                    return true;
                                }
                                else {
                                    return false;
                                }
                            }
                        )}
                        showButton={true}
                        testUser="ArbindIsGod1@awesome.com"
                    />
                </div>
            </>
        );
    }
}

export default Profile;