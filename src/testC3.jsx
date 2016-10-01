import C3Chart from 'react-c3js';
import 'c3/c3.css';
import React from 'react';

const data = {
  type: "bar",
  columns: [
    ['data1', 30, 200, 100, 400, 150, 250],
    ['data2', 50, 20, 10, 40, 15, 25]
  ]
};

class TestChart extends React.Component {
  render() {
    return(
      <C3Chart data={data} />
    )
  }
}

export default TestChart;
