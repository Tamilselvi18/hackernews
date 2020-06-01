import './Home.css';
import React from 'react';
import Table from '../Table';
import Chart from '../Chart';

function template() {
  return (
    <div className='home'>
      {this.props.data.length !== 0 ? (
        <div>
          <Table
            headers={this.state.headers}
            keys={this.state.keys}
            data={this.props.data}
          />
          <Chart data={this.props.data} />
        </div>
      ) : (
        <div className='no-data'>
          No Data Found in local storage. Please reload the page again to fetch
          from API
        </div>
      )}
    </div>
  );
}

export default template;
