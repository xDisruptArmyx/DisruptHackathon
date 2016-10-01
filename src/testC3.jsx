import React from 'react';

import C3Wrapper from 'react-c3-wrapper';

class TestChart extends React.Component {
  render() {
    return (
      <div>
        <h1>React C3 Wrapper Example</h1>
        <C3Wrapper config={{
          type: "bar",
          data: {
            columns: [
              ['data1', 30, 200, 100, 400, 150, 250],
              ['data2', 50, 20, 10, 40, 15, 25]
            ]
          }
        }}/>
      </div>
    );
  }
}

export default TestChart;
