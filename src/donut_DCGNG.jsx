const React = require('react');
const ReactDOM = require('react-dom');
import parser from './script.js';
import G3 from '../data/G3.js';
import CG from '../data/CG.js';
import COS from '../data/COS.js';
import DCGAR from '../data/DCGAR.js';
import DCGN from '../data/DCGN.js';
import DCGNG from '../data/DCGNG.js';
import DCGS from '../data/DCGS.js';
import hoursBySummary from './hoursBySummary.js';

const ReactHighcharts = require('react-highcharts');

var G3data = parser(G3());
var CGdata = parser(CG());
var COSdata = parser(COS());
var DCGARdata = parser(DCGAR());
var DCGNdata = parser(DCGN());
var DCGNGdata = parser(DCGNG());
var DCGSdata = parser(DCGS());

var DCGS_hours = hoursBySummary(DCGSdata);
var DCGNG_hours = hoursBySummary(DCGNGdata);
var DCGN_hours = hoursBySummary(DCGNdata);
var DCGAR_hours = hoursBySummary(DCGARdata);
var COS_hours = hoursBySummary(COSdata);
var CG_hours = hoursBySummary(CGdata);
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
      DCGNG_nato_hours: arrSummHoursByNato.reduce((a, b) => a + b, 0),
      DCGNG_navy_hours: arrSummHoursByNavy.reduce((a, b) => a + b, 0),
      DCGNG_allies_hours: arrSummHoursByAllies.reduce((a, b) => a + b, 0),
      DCGNG_army_hours: arrSummHoursByArmy.reduce((a, b) => a + b, 0),
      DCGNG_joint_hours: arrSummHoursByJoint.reduce((a, b) => a + b, 0),
      DCGNG_supporters_hours: arrSummHoursBySupporters.reduce((a, b) => a + b, 0),
      DCGNG_officials_hours: arrSummHoursByOfficials.reduce((a, b) => a + b, 0),
      DCGNG_staff_hours: arrSummHoursByStaff.reduce((a, b) => a + b, 0),
    }
  }
  let result_DCGNG = finisherFunc(DCGNG_hours);

  return {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: 'DCGNG'
        },
        subtitle: {
            text: 'dees guy'
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
                ['Staff', result_DCGNG.DCGNG_staff_hours],
                ['Joint', result_DCGNG.DCGNG_joint_hours],
                ['Supporters', result_DCGNG.DCGNG_supporters_hours],
                ['Officials', result_DCGNG.DCGNG_officials_hours],
                ['Allies', result_DCGNG.DCGNG_allies_hours],
                ['Army', result_DCGNG.DCGNG_army_hours],
                ['Navy', result_DCGNG.DCGNG_navy_hours],
                ['Nato', result_DCGNG.DCGNG_nato_hours],
            ]
        }]
  }
};
let config_DCGNG = donutGENERATOR();


class TestComponent3 extends React.Component {
  render() {
    return(
      <ReactHighcharts config={config_DCGNG} />
    )
  }
}

export default TestComponent3