const React = require('react');
import parser from './script.js';
import G3 from '../data/G3.js';
import hoursBySummary from './hoursBySummary.js';

const ReactHighcharts = require('react-highcharts');

var G3data = parser(G3());

var G3_hours = hoursBySummary(G3data);

const donutGENERATOR = function(){
  var arrSummHoursByNato = [];
  var arrSummHoursByNavy = [];
  var arrSummHoursByAllies = [];
  var arrSummHoursByArmy = [];
  var arrSummHoursByJoint = [];
  var arrSummHoursBySupporters = [];
  var arrSummHoursByOfficials = [];
  var arrSummHoursByStaff = [];

  let theeData = [];
  const natoHoursPerPerson = function(data){
    theeData = data.filter((el,index)=>{
      if(el.summary === 'nato'){
        arrSummHoursByNato.push(el.hours);
      }
    });
  }

  const navyHoursPerPerson = function(data){
    theeData = data.filter((el,index)=>{
      if(el.summary === 'navy'){
        arrSummHoursByNavy.push(el.hours);
      }
    });
  }

  const alliesHoursPerPerson = function(data){
    theeData = data.filter((el,index)=>{
      if(el.summary === 'allies'){
        arrSummHoursByAllies.push(el.hours);
      }
    });
  }

  const armyHoursPerPerson = function(data){
    theeData = data.filter((el,index)=>{
      if(el.summary === 'army'){
        arrSummHoursByArmy.push(el.hours);
      }
    });
  }

  const jointHoursPerPerson = function(data){
    theeData = data.filter((el,index)=>{
      if(el.summary === 'joint'){
        arrSummHoursByJoint.push(el.hours);
      }
    });
  }

  const supportersHoursPerPerson = function(data){
    theeData = data.filter((el,index)=>{
      if(el.summary === 'supporters'){
        arrSummHoursBySupporters.push(el.hours);
      }
    });
  }

  const officialsHoursPerPerson = function(data){
    theeData = data.filter((el,index)=>{
      if(el.summary === 'officials'){
        arrSummHoursByOfficials.push(el.hours);
      }
    });
  }

  const staffHoursPerPerson = function(data){
    theeData = data.filter((el,index)=>{
      if(el.summary === 'staff'){
        arrSummHoursByStaff.push(el.hours);
      }
    });
  }

  const finisherFunc = function(hours){
    natoHoursPerPerson(hours);
    navyHoursPerPerson(hours);
    alliesHoursPerPerson(hours);
    armyHoursPerPerson(hours);
    jointHoursPerPerson(hours);
    supportersHoursPerPerson(hours);
    officialsHoursPerPerson(hours);
    staffHoursPerPerson(hours);
    return {
      G3_nato_hours: arrSummHoursByNato.reduce((a, b) => a + b, 0),
      G3_navy_hours: arrSummHoursByNavy.reduce((a, b) => a + b, 0),
      G3_allies_hours: arrSummHoursByAllies.reduce((a, b) => a + b, 0),
      G3_army_hours: arrSummHoursByArmy.reduce((a, b) => a + b, 0),
      G3_joint_hours: arrSummHoursByJoint.reduce((a, b) => a + b, 0),
      G3_supporters_hours: arrSummHoursBySupporters.reduce((a, b) => a + b, 0),
      G3_officials_hours: arrSummHoursByOfficials.reduce((a, b) => a + b, 0),
      G3_staff_hours: arrSummHoursByStaff.reduce((a, b) => a + b, 0),
    }
  }
  let result_G3 = finisherFunc(G3_hours);

  return {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: 'G3'
        },
        subtitle: {
            text: 'Total Hours'
        },
        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45
            }
        },
        series: [{
            name: 'Hours',
            data: [
                ['Staff', result_G3.G3_staff_hours],
                ['Joint', result_G3.G3_joint_hours],
                ['Supporters', result_G3.G3_supporters_hours],
                ['Officials', result_G3.G3_officials_hours],
                ['Allies', result_G3.G3_allies_hours],
                ['Army', result_G3.G3_army_hours],
                ['Navy', result_G3.G3_navy_hours],
                ['Nato', result_G3.G3_nato_hours],
            ]
        }]
  }
};
let config_G3 = donutGENERATOR();


class TestComponent4 extends React.Component {
  render() {
    return(
      <ReactHighcharts config={config_G3} />
    )
  }
}

export default TestComponent4