import React from "react";
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
                  {event.booked.map((attendee) => (
                    <p>
                      <a href={`mailto:${attendee}`}>{attendee}</a>
                    </p>
                  ))}
                </td>
                <td>
                  {event.attendees -
                    event.booked.length +
                    "/" +
                    event.attendees}
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
