const React = require('react');
import parser from './script.js';
import DCGS from '../data/DCGS.js';
import hoursBySummary from './hoursBySummary.js';

const ReactHighcharts = require('react-highcharts');

var DCGSdata = parser(DCGS());

var DCGS_hours = hoursBySummary(DCGSdata);

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
      DCGS_nato_hours: arrSummHoursByNato.reduce((a, b) => a + b, 0),
      DCGS_navy_hours: arrSummHoursByNavy.reduce((a, b) => a + b, 0),
      DCGS_allies_hours: arrSummHoursByAllies.reduce((a, b) => a + b, 0),
      DCGS_army_hours: arrSummHoursByArmy.reduce((a, b) => a + b, 0),
      DCGS_joint_hours: arrSummHoursByJoint.reduce((a, b) => a + b, 0),
      DCGS_supporters_hours: arrSummHoursBySupporters.reduce((a, b) => a + b, 0),
      DCGS_officials_hours: arrSummHoursByOfficials.reduce((a, b) => a + b, 0),
      DCGS_staff_hours: arrSummHoursByStaff.reduce((a, b) => a + b, 0),
    }
  }
  let result_DCGS = finisherFunc(DCGS_hours);
  console.log(result_DCGS,'<----result_DCGS');

  return {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: 'DCGS'
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
                ['Staff', result_DCGS.DCGS_staff_hours],
                ['Joint', result_DCGS.DCGS_joint_hours],
                ['Supporters', result_DCGS.DCGS_supporters_hours],
                ['Officials', result_DCGS.DCGS_officials_hours],
                ['Allies', result_DCGS.DCGS_allies_hours],
                ['Army', result_DCGS.DCGS_army_hours],
                ['Navy', result_DCGS.DCGS_navy_hours],
                ['Nato', result_DCGS.DCGS_nato_hours],
            ]
        }]
  }
};
let config_DCGS = donutGENERATOR();


class TestComponent2 extends React.Component {
  render() {
    return(
      <ReactHighcharts config={config_DCGS} />
    )
  }
}

export default TestComponent2