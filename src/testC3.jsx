import { C3Chart } from 'c3-react';
import { Component } from 'react';

class TestChart extends Component {
  render() {
    return(
      <C3Chart data="test" type="bar" />
    )
  }
}

export default TestChart;
