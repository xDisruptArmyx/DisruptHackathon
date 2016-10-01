const React = require('react');
import parser from './script.js';
import G3 from '../data/G3.js';
import COS from '../data/COS.js';
import hoursBySummary from './hoursBySummary.js';

const ReactHighcharts = require('react-highcharts');

var COSdata = parser(COS());

var COS_hours = hoursBySummary(COSdata);

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
      COS_nato_hours: arrSummHoursByNato.reduce((a, b) => a + b, 0),
      COS_navy_hours: arrSummHoursByNavy.reduce((a, b) => a + b, 0),
      COS_allies_hours: arrSummHoursByAllies.reduce((a, b) => a + b, 0),
      COS_army_hours: arrSummHoursByArmy.reduce((a, b) => a + b, 0),
      COS_joint_hours: arrSummHoursByJoint.reduce((a, b) => a + b, 0),
      COS_supporters_hours: arrSummHoursBySupporters.reduce((a, b) => a + b, 0),
      COS_officials_hours: arrSummHoursByOfficials.reduce((a, b) => a + b, 0),
      COS_staff_hours: arrSummHoursByStaff.reduce((a, b) => a + b, 0),
    }
  }
  let result_COS = finisherFunc(COS_hours);
  console.log(result_COS,'<----result_COS');

  return {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: 'COS'
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
                ['Staff', result_COS.COS_staff_hours],
                ['Joint', result_COS.COS_joint_hours],
                ['Supporters', result_COS.COS_supporters_hours],
                ['Officials', result_COS.COS_officials_hours],
                ['Allies', result_COS.COS_allies_hours],
                ['Army', result_COS.COS_army_hours],
                ['Navy', result_COS.COS_navy_hours],
                ['Nato', result_COS.COS_nato_hours],
            ]
        }]
  }
};
let config_COS = donutGENERATOR();


class TestComponent7 extends React.Component {
  render() {
    return(
      <ReactHighcharts config={config_COS} />
    )
  }
}

export default TestComponent7