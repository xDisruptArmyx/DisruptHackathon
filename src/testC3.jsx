const React = require('react');
const ReactDOM = require('react-dom');
import parser from './script.js';
import G3 from '../data/G3.js';

const ReactHighcharts = require('react-highcharts');


class TestComponent extends React.Component {
  render() {
   const config = {
    chart: {
              type: this.props.chart
          },
          title: {
              text: 'Hours spent at events sorted by date'
          },
          subtitle: {
              text: 'Filter event types by clicking legend at the bottom'
          },
          xAxis: {
              categories: this.props.date
          },
          yAxis: {
              title: {
                  text: 'Hours'
              }
          },
          plotOptions: {
              line: {
                  dataLabels: {
                      enabled: true
                  },
                  enableMouseTracking: false
              }
          },
          series: [{
              type: 'column',
              name: 'Army',
              data: this.props.data[0]
          }, {
              type: 'column',
              name: 'Supporters',
              data: this.props.data[1]
          },{
            type: 'column',
            name: 'NATO',
            data: this.props.data[2]
          }, {
            type: 'column',
            name: 'Joint',
            data: this.props.data[3]
          }, {
            type: 'column',
            name: 'Staff',
            data: this.props.data[4]
          }, {
            type: 'column',
            name: 'Allies',
            data: this.props.data[5]
          }, {
            type: 'column',
            name: 'Allies',
            data: this.props.data[6]
          }]
      }
      console.log(this.props);
    return(
      <ReactHighcharts config={config} />
    )
  }
}

export default TestComponent