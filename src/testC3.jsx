const React = require('react');
const ReactDOM = require('react-dom');
import parser from './script.js';
import G3 from '../data/G3.js';

const ReactHighcharts = require('react-highcharts');


class TestComponent extends React.Component {
  render() {
   const config = {
    chart: {
              type: this.props.chart,
              options3d: {
                  enabled: true,
                  alpha: 45
              }
          },

          title: {
              text: 'Hours spent at events sorted by date'
          },
          subtitle: {
              text: 'Filter and compare by clicking the legend at the bottom'
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
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {

                      }
                    }
                  },
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
              data: this.props.data[0],
              color: 'darkgreen',
              y: 25,
          }, {
              type: 'column',
              name: 'Supporters',
              data: this.props.data[1],
              color: 'red',
              y:15
          },{
            type: 'column',
            name: 'NATO',
            data: this.props.data[2],
            color: 'blue',
            y: 10
          }, {
            type: 'column',
            name: 'Joint',
            data: this.props.data[3],
            color: 'purple',
            y: 20
          }, {
            type: 'column',
            name: 'Staff',
            data: this.props.data[4],
            color: 'gray',
            y: 15
          }, {
            type: 'column',
            name: 'Allies',
            data: this.props.data[5],
            color: 'green',
            y:10
          }, {
            type: 'column',
            name: 'Officials',
            data: this.props.data[6],
            color: 'yellow',
            y: 5
          }]
      }
    return(
      <ReactHighcharts config={config} />
    )
  }
}

export default TestComponent