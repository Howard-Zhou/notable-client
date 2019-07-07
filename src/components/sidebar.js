import React, { Component } from 'react';
import { Column } from 'simple-flexbox';

import '../App.css';

class Sidebar extends Component {

  handleFetchPhysicians = (id, fetchAppointments) => {
    fetchAppointments(id)
  }

  render() {
    const {
      physicians,
      fetchAppointments
    } = this.props;
      return (
        <Column flexGrow={0.3} horizontal='center'>
            <h3> Physicians </h3>
            {physicians.map((p) => {
                return (
                  <span
                    key={p.id}
                    onClick={() => this.handleFetchPhysicians(p.id, fetchAppointments)}
                    className="Physician">
                    {`${p.lastname}, ${p.firstname}`}
                  </span>
                )
            })}

            <button className="Button">Logout</button>

        </Column>
    );
  }
}

export default Sidebar;
