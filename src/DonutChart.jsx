const ReactHighcharts = require('react-highcharts');
import React from 'react';
const Highcharts = require('highcharts');


class DonutChart extends React.Component {
  render() {
    let total = 0;
 var colors = Highcharts.getOptions().colors,
        categories = ['Army', 'Supporters', 'Joint', 'Staff', 'Allies'],
        data = [{
            y: Math.random() * 13 + 1,
            color: 'dark green',
            drilldown: {
                name: 'Army',
                categories: ['Army'],
                data: this.props.data[0].sort(),
                color: 'dark green'
            }
        }, {
            y: Math.random() * 13 + 1,
            color: 'red',
            drilldown: {
                name: 'Supporters',
                categories: ['Supporters'],
                data: this.props.data[1].sort(),
                color: 'red'
            }
        }, {
            y: Math.random() * 13 + 1,
            color: 'purple',
            drilldown: {
                name: 'Joint',
                categories: ['Joint'],
                data: this.props.data[2].sort(),
                color: 'purple',
            }
        }, {
            y: Math.random() * 13 + 1,
            color: 'gray',
            drilldown: {
                name: 'Staff',
                categories: ['Staff'],
                data: this.props.data[3].sort(),
                color: 'gray'
            }
        }, {
            y: Math.random() * 13 + 1,
            color: 'green',
            drilldown: {
                name: 'Allies',
                categories: ['Allies'],
                data: this.props.data[4].sort(),
                color: 'green'
            }
        }, {
            y: Math.random() * 13 + 1,
            color: 'yellow',
            drilldown: {
                name: 'Officials',
                categories: ['Officials'],
                data: this.props.data[5].sort(),
                color: 'yellow'
            }
        }],
        browserData = [],
        versionsData = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;


    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {

        // add browser data
        browserData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });

        // add version data
        drillDataLen = data[i].drilldown.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
            brightness = 0.2 - (j / drillDataLen) / 5;
            versionsData.push({
                name: data[i].drilldown.categories[j],
                y: data[i].drilldown.data[j],
            });
        }
    }

    // Create the chart
    let config = {
        chart: {
            type: 'pie'
        },
        title: {
            text: "Visualization of individual's scheduled hours"
        },
        subtitle: {
            text: 'Source: <a href="http://netmarketshare.com/">netmarketshare.com</a>'
        },
        yAxis: {
            title: {
                text: 'Total percent market share'
            }
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        series: [{
            name: 'Browsers',
            data: browserData,
            size: '60%',
            dataLabels: {
                formatter: function () {
                    return this.y > 5 ? this.point.name : null;
                },
                color: '#ffffff',
                distance: -30
            }
        }, {
            name: 'Versions',
            data: versionsData,
            size: '80%',
            innerSize: '60%',
            dataLabels: {
                formatter: function () {
                    // display only if larger than 1
                    //return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%' : null;
                }
            }
        }]
    };
    return(
      <ReactHighcharts config={config} />
    )
  }
}

export default DonutChart;
