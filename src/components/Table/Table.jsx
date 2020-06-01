import './Table.css';
import React from 'react';

function template() {
  console.log(
    this.props.data,
    this.state.page,
    this.state.page + 10,
    this.props.data.slice(this.state.page, this.state.page + 10)
  );
  let prevClass =
    this.state.page === 0 ? 'disable-previous' : 'pagination-prevnext';

  let nextClass =
    this.props.data.length - this.state.page < 10
      ? 'disable-next'
      : 'pagination-prevnext';
  return (
    <div className='table'>
      {this.props.data.length > 0 && (
        <div>
          <table className='table-custom'>
            <thead>
              <tr>
                {this.props.headers.map((v, i) => {
                  return <th key={i + 'h'}>{v}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {this.props.data
                .slice(this.state.page, this.state.page + 10)
                .map((obj, i) => {
                  let rowCls = i % 2 === 0 ? 'even' : 'odd';

                  return (
                    <tr key={i + 'r'} id={'td-' + i} className={rowCls}>
                      {this.props.keys.map((o, i) => {
                        let titleEditLink = o.name === 'title' && (
                          <div>
                            {obj[o.name]}
                            <span
                              className='pseudoLink'
                              onClick={this.hideComment}
                            >
                              [hide]
                            </span>
                          </div>
                        );
                        let colData =
                          o.name === 'upvote' ? (
                            <img
                              className='upvote'
                              onClick={this.upVote}
                              alt=''
                            />
                          ) : o.name === 'title' ? (
                            titleEditLink
                          ) : (
                            obj[o.name]
                          );

                        return (
                          <td
                            key={i + 'td'}
                            style={{
                              width: o.width,
                              paddingLeft: o.paddingLeft,
                            }}
                          >
                            {colData}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div className='pagination'>
            <span className={prevClass} onClick={this.goToPreviousPage}>
              Previous
            </span>
            <span className='pagination-prevnext'>|</span>
            <span className={nextClass} onClick={this.goToNextPage}>
              Next
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default template;
