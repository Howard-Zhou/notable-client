import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import Sidebar from './components/sidebar';
import Table from './components/table';
import './App.css';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        physicians: [],
        selectedPhysician: null,
      };
  }

  fetchPhysicans = () => {
    fetch("http://localhost:8080/api/physicians",{method:"GET"})
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            physicians: responseData.physicians
          })
    })
  }

  fetchAppointments = (physicianID) => {
    fetch("http://localhost:8080/api/physicians/"+physicianID, {method:"GET"})
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData)
          this.setState({
            selectedPhysician: responseData.physician
          })
    })
  }

  componentDidMount() {
    this.fetchPhysicans();
  }

  render() {
    return (
      <Column flexGrow={1}>
        <Row vertical='center'>
          <Sidebar
            physicians={this.state.physicians}
            fetchAppointments={this.fetchAppointments}
          />

          <Table
            physician={this.state.selectedPhysician}
          />
        </Row>
      </Column>

    );
  }
}

export default App;
