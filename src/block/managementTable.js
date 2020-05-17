import React from "react";
import axios from 'axios';
import "../styles/managementTable.css";

const ManagementTable = (props) => {
  return (
    <div className="container">
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Event ID</th>
              <th>Event</th>
              <th>Date</th>
              <th>Location</th>
              <th>Currently Attending</th>
              <th>Remaining Spaces</th>
              <th>Delete event</th>
            </tr>
          </thead>
          <tbody>
            {props.eventsDetails.map((event) => (
              <tr>
                <td>{event.id}</td>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.location}</td>
                <td>
                  {event.attendees.map((attendee) => (
                    <p>
                      <a href={`mailto:${attendee}`}>{attendee}</a>
                    </p>
                  ))}
                </td>
                <td>
                  {`${event.capacity - event.attendees.length}/${event.capacity}`}
                </td>
                <td>
                  <button onClick={() => axios.delete(`http://localhost:4000/events/${event.id}`).then(response => props.handleClick())}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagementTable;
