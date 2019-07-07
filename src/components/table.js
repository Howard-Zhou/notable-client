import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';

import '../App.css';

class Table extends Component {

  ifRenderPhysicianDetails = (physician) => {
    if (physician) {
      return (
        <Column flexGrow={1} horizontal='center'>
          <Row horizontal='center'>
              <h1>{`${physician.firstname} ${physician.lastname}`}</h1>
          </Row>
            <h3> {physician.email} </h3>
            <table className='customers'>
              <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Kind</th>
                </tr>
              </thead>
              <tbody>
                  {physician.appointments.map((appointment, i) => (
                      <tr key={appointment}>
                          <td className="TableCell">{i + 1}</td>
                          <td className="TableCell">{appointment.name}</td>
                          <td  className="TableCell">{appointment.time}</td>
                          <td  className="TableCell">{appointment.kind}</td>
                      </tr>
                  ))}
              </tbody>
            </table>
        </Column>
      )
    } else {
      return (
          <div>Please choose a physician</div>
      )
    }
  }
  render() {
    const {
      physician
    } = this.props;
      return (
        this.ifRenderPhysicianDetails(physician)
    );
  }
}

export default Table;
