import React from 'react';
import template from './Chart.jsx';

class Chart extends React.Component {
  static getDerivedStateFromProps(props, state) {
    let newArr = [];
    props.data.map((v) => {
      let newObj = {};
      newObj['x'] = v.points;
      newObj['y'] = v.num_comments;
      newArr.push(newObj);
      return newArr;
    });

    return {
      chartData: [
        {
          color: 'steelblue',
          points: newArr,
        },
      ],
    };
  }

  render() {
    return template.call(this);
  }
}

export default Chart;
