const React = require('react');
import parser from './script.js';
import CG from '../data/CG.js';
import hoursBySummary from './hoursBySummary.js';

const ReactHighcharts = require('react-highcharts');

var CGdata = parser(CG());

var CG_hours = hoursBySummary(CGdata);

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
      CG_nato_hours: arrSummHoursByNato.reduce((a, b) => a + b, 0),
      CG_navy_hours: arrSummHoursByNavy.reduce((a, b) => a + b, 0),
      CG_allies_hours: arrSummHoursByAllies.reduce((a, b) => a + b, 0),
      CG_army_hours: arrSummHoursByArmy.reduce((a, b) => a + b, 0),
      CG_joint_hours: arrSummHoursByJoint.reduce((a, b) => a + b, 0),
      CG_supporters_hours: arrSummHoursBySupporters.reduce((a, b) => a + b, 0),
      CG_officials_hours: arrSummHoursByOfficials.reduce((a, b) => a + b, 0),
      CG_staff_hours: arrSummHoursByStaff.reduce((a, b) => a + b, 0),
    }
  }
  let result_CG = finisherFunc(CG_hours);
  console.log(result_CG,'<----result_CG');

  return {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: 'CG'
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
                ['Staff', result_CG.CG_staff_hours],
                ['Joint', result_CG.CG_joint_hours],
                ['Supporters', result_CG.CG_supporters_hours],
                ['Officials', result_CG.CG_officials_hours],
                ['Allies', result_CG.CG_allies_hours],
                ['Army', result_CG.CG_army_hours],
                ['Navy', result_CG.CG_navy_hours],
                ['Nato', result_CG.CG_nato_hours],
            ]
        }]
  }
};
let config_CG = donutGENERATOR();


class TestComponent8 extends React.Component {
  render() {
    return(
      <ReactHighcharts config={config_CG} />
    )
  }
}

export default TestComponent8