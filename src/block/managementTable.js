import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const ManagementTable = (props) => {
  return props.eventsDetails.map((event) => (
    <Table responsive="sm">
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
    </Table>
  ));
};

export default ManagementTable;
