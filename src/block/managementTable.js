import React from "react";
import "../styles/managementTable.css";


const ManagementTable = (props) => {
  return (props.eventsDetails.map((event) =>
    <table >
      <div className="table">
        <thead>
          <tr>
            <th>Event ID</th>
            <th>Event</th>
            <th>Date</th>
            <th>Location</th>
            <th>Currently attending</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{event.id}</td>
            <td>{event.name}</td>
            <td>{event.date}</td>
            <td>{event.location}</td>
            <td>{event.booked}</td>
          </tr>
        </tbody>
      </div>
    </table>
  ))
};

export default ManagementTable;