import React, { Component } from 'react';
import { Button, Navbar, PageHeader, DropdownButton, MenuItem } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TestChart from './testC3.jsx';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.onSelectPerson = this.onSelectPerson.bind(this);
    this.onSelectEvent = this.onSelectEvent.bind(this);
    this.onSelectTime = this.onSelectTime.bind(this);
    this.state = {
      selectedPerson: 'Select a person',
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
        <div className="react_content_container">
          <ReactCSSTransitionGroup
                  transitionName="example"
                  transitionAppear={true}
                  transitionAppearTimeout={5000}>
          <div className="App-header">
            <DropdownButton title={this.state.selectedPerson} onSelect={this.onSelectPerson} id="1337">
              <MenuItem eventKey={'CG'} ref="dude1">CG</MenuItem>
              <MenuItem eventKey={'COS'} ref="dude2">COS</MenuItem>
              <MenuItem eventKey={'DCG-AR'} ref="dude3">DCG-AR</MenuItem>
              <MenuItem eventKey={'DCG-N'} ref="dude4">DCG-N</MenuItem>
              <MenuItem eventKey={'DCG-NG'} ref="dude5">DCG-NG</MenuItem>
              <MenuItem eventKey={'DCG-S'} ref="dude6">DCG-S</MenuItem>
              <MenuItem eventKey={'G3'} ref="dude7">G3</MenuItem>
            </DropdownButton>
            <DropdownButton title={this.state.selectedEvent} onSelect={this.onSelectEvent} id="137">
              <MenuItem eventKey={"NATO"} ref="event1">NATO</MenuItem>
              <MenuItem eventKey={"ALLIES"} ref="event1">ALLIES</MenuItem>
              <MenuItem eventKey={"ARMY"} ref="event1">ARMY</MenuItem>
              <MenuItem eventKey={"SUPPORTERS"} ref="event1">SUPPORTERS</MenuItem>
              <MenuItem eventKey={"JOINT"} ref="event1">JOINT</MenuItem>
              <MenuItem eventKey={"STAFF"} ref="event1">STAFF</MenuItem>
            </DropdownButton>
            <DropdownButton title={this.state.selectedTime} onSelect={this.onSelectTime} id="17">
              <MenuItem eventKey={"October"} ref="time1">October</MenuItem>
              <MenuItem eventKey={"November"} ref="time2">November</MenuItem>
              <MenuItem eventKey={"December"} ref="time2">December</MenuItem>
              <MenuItem eventKey={"All"} ref="time2">All</MenuItem>
            </DropdownButton>
          </div>
          <TestChart />
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default App;
