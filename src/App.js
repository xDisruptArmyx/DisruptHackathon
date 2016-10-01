import React, { Component } from 'react';
import { Button, Navbar, PageHeader, DropdownButton, MenuItem } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.onSelectPerson = this.onSelectPerson.bind(this);
    this.onSelectEvent = this.onSelectEvent.bind(this);
    this.onSelectTime = this.onSelectTime.bind(this);
    this.state = {
      selectedPerson: 'Select a dude',
      selectedEvent: 'Select an event',
      selectedTime: 'Time Range',
    }
  }

  onSelectPerson(event) {
    this.setState({ selectedPerson: event})
  }

  onSelectEvent(event) {
    this.setState({ selectedEvent: event })
  }

  onSelectTime(event) {
    this.setState({ selectedTime: event })
  }

  render() {
    return (
      <div className="App container">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <DropdownButton title={this.state.selectedPerson} onSelect={this.onSelectPerson} id="1337">
            <MenuItem eventKey={'Dude 1'} ref="dude1">Dude 1</MenuItem>
            <MenuItem eventKey={'Dude 2'} ref="dude2">Dude 2</MenuItem>
            <MenuItem eventKey={'Dude 3'} ref="dude3">Dude 3</MenuItem>
            <MenuItem eventKey={'Dude 4'} ref="dude4">Dude 4</MenuItem>
            <MenuItem eventKey={'Dude 5'} ref="dude5">Dude 5</MenuItem>
            <MenuItem eventKey={'Dude 6'} ref="dude6">Dude 6</MenuItem>
            <MenuItem eventKey={'Dude 7'} ref="dude7">Dude 7</MenuItem>
          </DropdownButton>
          <DropdownButton title={this.state.selectedEvent} onSelect={this.onSelectEvent} id="137">
            <MenuItem eventKey={"Event 1"} ref="event1">This Event 1</MenuItem>
            <MenuItem eventKey={"Event 2"} ref="event1">That Event 2</MenuItem>
          </DropdownButton>
          <DropdownButton title={this.state.selectedTime} onSelect={this.onSelectTime} id="17">
            <MenuItem eventKey={"Time range 1"} ref="time1">Time Range 1</MenuItem>
            <MenuItem eventKey={"Time range 2"} ref="time2">Time Range 2</MenuItem>
          </DropdownButton>
        </div>
      </div>
    );
  }
}

export default App;
