import React, { Component } from 'react';
import { Button, Navbar, PageHeader, DropdownButton, MenuItem } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TestChart from './testC3.jsx';
import parser from './script.js';
import CG from '../data/CG.js';
import G3 from '../data/G3.js';
import dataParser from './dataParser.js';
import COS from '../data/COS.js';
import DCGAR from '../data/DCGAR.js';
import DCGN from '../data/DCGN.js';
import DCGNG from '../data/DCGNG.js';
import DCGS from '../data/DCGS.js';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.onSelectPerson = this.onSelectPerson.bind(this);
    this.onSelectChart = this.onSelectChart.bind(this);
    this.onSelectTime = this.onSelectTime.bind(this);
    this.filter = this.filter.bind(this);
    this.state = {
      selectedPerson: 'Select a person',
      selectedChart: 'Select an chart',
      selectedTime: 'Time Range',
      data: '',
      renderChart: false,
    }
  }

  onSelectPerson(event) {
    this.setState({ selectedPerson: event})
  }

  onSelectChart(event) {
    this.setState({ selectedChart: event })
  }

  onSelectTime(event) {
    this.setState({ selectedTime: event })
  }

  filter(){
    let data;
    if(this.state.selectedPerson === 'CG'){
      data = CG;
    } else if(this.state.selectedPerson === 'COS'){
      data = COS
    } else if(this.state.selectedPerson === 'DCG-AR'){
      data = DCGAR;
    } else if(this.state.selectedPerson === 'DCG-N'){
      data = DCGN;
    } else if(this.state.selectedPerson === 'DCG-NG'){
      data = DCGNG
    } else if(this.state.selectedPerson === 'G3'){
      data = G3();
    } else if(this.state.selectedPerson === 'DCG-S'){
      data = DCGS;
    }
    let firstParse = parser(data);
    let parsedData = dataParser(firstParse);
    this.setState({ data: parsedData })
    this.setState({ renderChart: true })
  }

  render() {
    let parsedData;
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
            <DropdownButton title={this.state.selectedChart} onSelect={this.onSelectChart} id="137">
              <MenuItem eventKey={"line"} ref="event1">Line</MenuItem>
              <MenuItem eventKey={"bar"} ref="event1">Bar</MenuItem>
              <MenuItem eventKey={"area"} ref="event1">Area</MenuItem>
              <MenuItem eventKey={"columnrange"} ref="event1">Column Rage</MenuItem>
              <MenuItem eventKey={"Combination chart"} ref="event1">Combination Chart</MenuItem>
              <MenuItem eventKey={"bubble"} ref="event1">Bubble</MenuItem>
            </DropdownButton>
            <Button bsStyle="info" onClick={this.filter}>Filter</Button>
          </div>
          { this.state.renderChart ?
            <TestChart data={this.state.data.dataArray} date={this.state.data.dateArray} chart={this.state.selectedChart}/>
            : null
          }
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default App;
