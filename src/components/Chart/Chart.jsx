import './Chart.css';
import React from 'react';
import LineChart from 'react-linechart';
import '../../../node_modules/react-linechart/dist/styles.css';

function template() {
  let h = '400vh';
  let w = '1200vh';

  return (
    <div className='chart'>
      {this.state.chartData[0].points.length !== 0 && (
        <LineChart
          height={h}
          width={w}
          data={this.state.chartData}
          className='linechart'
          xLabel='Vote'
          yLabel='No. of Comments'
          margins={{ top: 0, right: 20, bottom: 50, left: 55 }}
        />
      )}
    </div>
  );
}

export default template;
