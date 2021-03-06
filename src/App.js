import React, { Component } from 'react';
import { Button, Navbar, PageHeader, DropdownButton, MenuItem } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import TestComponent from './testC3.jsx';
import TestChart2 from './donut_DCGS.jsx';
import TestChart3 from './donut_DCGNG.jsx';
import TestChart4 from './donut_G3.jsx';
import TestChart5 from './donut_DCGN.jsx';
import TestChart6 from './donut_DCGAR.jsx';
import TestChart7 from './donut_COS.jsx';
import TestChart8 from './donut_CG.jsx';

import parser from './script.js';
import CG from '../data/CG.js';
import G3 from '../data/G3.js';
import dataParser from './dataParser.js';
import COS from '../data/COS.js';
import DCGAR from '../data/DCGAR.js';
import DCGN from '../data/DCGN.js';
import DCGNG from '../data/DCGNG.js';
import DCGS from '../data/DCGS.js';
import donutParser from './DonutParser.js';
import DonutChart from './DonutChart.jsx';

import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.onSelectPerson = this.onSelectPerson.bind(this);
    this.onSelectChart = this.onSelectChart.bind(this);
    this.onSelectTime = this.onSelectTime.bind(this);
    this.filter = this.filter.bind(this);
    this.initialLoad = this.initialLoad.bind(this);
    this.renderMattChart = this.renderMattChart.bind(this);
    this.state = {
      selectedPerson: 'Select Person',
      selectedChart: 'Select Chart',
      data: '',
      renderChart: false,
      renderDonut: false,
      firstLoad: true,
      mattChart: false,
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
    if(this.state.selectedChart === 'pie'){

      this.setState({ mattChart: true });
    } else if(this.state.selectedChart === 'donut') {
      if(this.state.selectedPerson === 'CG') {
        data = CG();
      } else if(this.state.selectedPerson === 'COS'){
      data = COS();
      } else if(this.state.selectedPerson === 'DCG-AR'){
        data = DCGAR();
      } else if(this.state.selectedPerson === 'DCG-N'){
      data = DCGN();
      } else if(this.state.selectedPerson === 'DCG-NG'){
        data = DCGNG();
      } else if(this.state.selectedPerson === 'G3'){
        data = G3();
      } else if(this.state.selectedPerson === 'DCG-S'){
        data = DCGS();
      }
      let firstParse = parser(data);
      let parsedDonutData = donutParser(firstParse);
      this.setState({ data: {donutData: parsedDonutData} });
      this.setState({ firstLoad: false });
      this.setState({ renderChart: false });
      this.setState({ renderDonut: true });
      this.setState({ mattChart: false });

    }
    else if(this.state.selectedPerson === 'CG'){
      data = CG();
      let firstParse = parser(data);
      let parsedData = dataParser(firstParse);
      this.setState({ data: parsedData });
      this.setState({ firstLoad: false });
      this.setState({ renderChart: true });
      this.setState({ renderDonut: false });
      this.setState({ mattChart: false });

    } else if(this.state.selectedPerson === 'COS'){
      data = COS();
      let firstParse = parser(data);
      let parsedData = dataParser(firstParse);
      this.setState({ data: parsedData });
      this.setState({ firstLoad: false });
      this.setState({ renderChart: true });
      this.setState({ renderDonut: false });
      this.setState({ mattChart: false });

    } else if(this.state.selectedPerson === 'DCG-AR'){
      data = DCGAR();
      let firstParse = parser(data);
      let parsedData = dataParser(firstParse);
      this.setState({ data: parsedData });
      this.setState({ firstLoad: false });
      this.setState({ renderChart: true });
      this.setState({ renderDonut: false });
      this.setState({ mattChart: false });

    } else if(this.state.selectedPerson === 'DCG-N'){
      data = DCGN();
      let firstParse = parser(data);
      let parsedData = dataParser(firstParse);
      this.setState({ data: parsedData });
      this.setState({ firstLoad: false });
      this.setState({ renderChart: true });
      this.setState({ renderDonut: false });
      this.setState({ mattChart: false });

    } else if(this.state.selectedPerson === 'DCG-NG'){
      data = DCGNG();
      let firstParse = parser(data);
      let parsedData = dataParser(firstParse);
      this.setState({ data: parsedData });
      this.setState({ firstLoad: false });
      this.setState({ renderChart: true });
      this.setState({ renderDonut: false });
      this.setState({ mattChart: false });

    } else if(this.state.selectedPerson === 'G3'){
      data = G3();
      let firstParse = parser(data);
      let parsedData = dataParser(firstParse);
      this.setState({ data: parsedData });
      this.setState({ firstLoad: false });
      this.setState({ renderChart: true });
      this.setState({ renderDonut: false });
      this.setState({ mattChart: false });

    } else if(this.state.selectedPerson === 'DCG-S'){
      data = DCGS();
      let firstParse = parser(data);
      let parsedData = dataParser(firstParse);
      this.setState({ data: parsedData });
      this.setState({ firstLoad: false });
      this.setState({ renderChart: true });
      this.setState({ renderDonut: false });
      this.setState({ mattChart: false });

    }
  }

  renderMattChart(){
    // let mattDiv = document.getElementById('mattDiv');

    if(this.state.selectedPerson === 'CG'){
      // this.setState({firstLoad: false})
      // this.setState({ renderChart: false });
      // this.setState({ renderDonut: false });
      // this.setState({ renderDonut: false });
      return (<TestChart8 />)
    } else if(this.state.selectedPerson ==='COS'){
      // return (<TestChart7 />)
    } else if(this.state.selectedPerson === 'DCG-AR') {
      // return (<TestChart6 />)
    } else if(this.state.selectedPerson === 'DCG-N') {
      // return <TestChart5 />
    } else if(this.state.selectedPerson === 'DCG-NG') {
      // return <TestChart3 />
    } else if(this.state.selectedPerson === 'DCG-S') {
      // return <TestChart2 />
    } else if(this.state.selectedPerson === 'G3') {
      // return <TestChart4 />
    }

   }


  initialLoad(){
    let firstParse = parser(COS());
    let parsedData = dataParser(firstParse);
    return(
      <TestComponent data={parsedData.dataArray} date={parsedData.dateArray} chart="Combined chart" />
    )
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
            <h2 id="title">Disrupt Army Analytics</h2>
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
              <MenuItem eventKey={"bar"} ref="event1">Bar</MenuItem>
              <MenuItem eventKey={"line"} ref="event1">Line</MenuItem>
              <MenuItem eventKey={"donut"} ref="event1">Donut</MenuItem>
            </DropdownButton>
            <Button bsStyle="info" onClick={this.filter}>Filter</Button>
          </div>
          <div>
          { this.state.renderChart ?
            <TestComponent data={this.state.data.dataArray} date={this.state.data.dateArray} chart={this.state.selectedChart}/>
            : null
          }
          </div>
          <div>
          {
            this.state.renderDonut ?
            <DonutChart data={this.state.data.donutData} />
            : null
          }
          </div>
          <div>
            {this.state.firstLoad ?
              this.initialLoad()
              : null
            }
          </div>
          <div>
            {this.state.mattChart ?
              this.renderMattChart()
              : null
            }
          </div>
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default App;
