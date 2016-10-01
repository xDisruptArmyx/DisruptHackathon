const React = require('react');
const ReactDOM = require('react-dom');
import parser from './script.js';
import G3 from '../data/G3.js';

const ReactHighcharts = require('react-highcharts');

var data = parser(G3());
var dataArray =[[],[],[],[],[],[]];

var dateArray =[];


data.forEach((obj) => {
  if(obj.summary === 'army'){
    dataArray[0].push(obj.hours)
  } else if (obj.summary === 'supporters'){
    dataArray[1].push(obj.hours)
  } else if(obj.summary === 'nato'){
    dataArray[2].push(obj.hours)
  } else if(obj.summary === 'joint'){
    dataArray[3].push(obj.hours)
  } else if(obj.summary === 'staff'){
    dataArray[4].push(obj.hours)
  } else if(obj.summary === 'allies'){
    dataArray[5].push(obj.hours)
  }
})

data.forEach((obj) => {
  if(dateArray.indexOf(obj.date) < 0){
  dateArray.push(obj.date)
  }
})
dateArray.sort();

let largest = 0;
dataArray.forEach((item) => {
  if(item.length > largest){
    largest = item.length;
  }
})


for(var i = 0; dataArray[1].length !== largest; i++) {

  if(Math.random() > 0.25) {
    dataArray[1].splice(Math.floor(Math.random() * dataArray[1].length) + 1, 0, 0);
  }
}
for(var i = 0; dataArray[2].length !== largest; i++) {

  if(Math.random() > 0.25) {
    dataArray[2].splice(Math.floor(Math.random() * dataArray[2].length) + 1, 0, 0);
  }
}
for(var i = 0; dataArray[3].length !== largest; i++) {

  if(Math.random() > 0.25) {
    dataArray[3].splice(Math.floor(Math.random() * dataArray[3].length) + 1, 0, 0);
  }
}
for(var i = 0; dataArray[4].length !== largest; i++) {

  if(Math.random() > 0.25) {
    dataArray[4].splice(Math.floor(Math.random() * dataArray[4].length) + 1, 0, 0);
  }
}
for(var i = 0; dataArray[5].length !== largest; i++) {

  if(Math.random() > 0.25) {
    dataArray[5].splice(Math.floor(Math.random() * dataArray[5].length) + 1, 0, 0);
  }
}
 const config = {
  chart: {
            type: 'Combination chart'
        },
        title: {
            text: 'Hours spent at events sorted by date'
        },
        subtitle: {
            text: 'Filter event types by clicking legend at the bottom'
        },
        xAxis: {
            categories: dateArray
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
            data: dataArray[0]
        }, {
            type: 'column',
            name: 'Supporters',
            data: dataArray[1]
        },{
          type: 'column',
          name: 'NATO',
          data: dataArray[2]
        }, {
          type: 'column',
          name: 'Joint',
          data: dataArray[3]
        }, {
          type: 'column',
          name: 'Staff',
          data: dataArray[4]
        }, {
          type: 'column',
          name: 'Allies',
          data: dataArray[5]
        }]
    }

class TestComponent extends React.Component {
  render() {
    return(
      <ReactHighcharts config={config} />
    )
  }
}

export default TestComponent