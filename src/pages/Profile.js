import React from "react";
import Header from "../block/Header";
import Events from "../block/Events";
import axios from "axios";

class Profile extends React.Component {

    state = {
        events: []
    };

    componentDidMount() {
        axios.get("http://localhost:4000/events").then(result => {
            this.setState({
                events: result.data
            })
        })
    };

    render() {
        return (
            <>
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
                    />
                </div>
            </>
        );
    }
}

export default Profile;