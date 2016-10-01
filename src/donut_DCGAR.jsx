const React = require('react');
import parser from './script.js';
import DCGAR from '../data/DCGAR.js';
import hoursBySummary from './hoursBySummary.js';

const ReactHighcharts = require('react-highcharts');

var DCGARdata = parser(DCGAR());

var DCGAR_hours = hoursBySummary(DCGARdata);

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
      DCGAR_nato_hours: arrSummHoursByNato.reduce((a, b) => a + b, 0),
      DCGAR_navy_hours: arrSummHoursByNavy.reduce((a, b) => a + b, 0),
      DCGAR_allies_hours: arrSummHoursByAllies.reduce((a, b) => a + b, 0),
      DCGAR_army_hours: arrSummHoursByArmy.reduce((a, b) => a + b, 0),
      DCGAR_joint_hours: arrSummHoursByJoint.reduce((a, b) => a + b, 0),
      DCGAR_supporters_hours: arrSummHoursBySupporters.reduce((a, b) => a + b, 0),
      DCGAR_officials_hours: arrSummHoursByOfficials.reduce((a, b) => a + b, 0),
      DCGAR_staff_hours: arrSummHoursByStaff.reduce((a, b) => a + b, 0),
    }
  }
  let result_DCGAR = finisherFunc(DCGAR_hours);
  console.log(result_DCGAR,'<----result_DCGAR');

  return {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: 'DCGAR'
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
                ['Staff', result_DCGAR.DCGAR_staff_hours],
                ['Joint', result_DCGAR.DCGAR_joint_hours],
                ['Supporters', result_DCGAR.DCGAR_supporters_hours],
                ['Officials', result_DCGAR.DCGAR_officials_hours],
                ['Allies', result_DCGAR.DCGAR_allies_hours],
                ['Army', result_DCGAR.DCGAR_army_hours],
                ['Navy', result_DCGAR.DCGAR_navy_hours],
                ['Nato', result_DCGAR.DCGAR_nato_hours],
            ]
        }]
  }
};
let config_DCGAR = donutGENERATOR();


class TestComponent6 extends React.Component {
  render() {
    return(
      <ReactHighcharts config={config_DCGAR} />
    )
  }
}

export default TestComponent6