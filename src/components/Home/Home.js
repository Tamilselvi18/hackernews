import React from 'react';
import template from './Home.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import hackerNewsAction from '../../actions/hackerNewsAction';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: ['Comments', 'Vote Count', 'Up Vote', 'News Details'],
      keys: [
        { name: 'num_comments', width: '10%', paddingLeft: '2%' },
        { name: 'points', width: '10%', paddingLeft: '0%' },
        { name: 'upvote', width: '10%', paddingLeft: '2%' },
        { name: 'title', width: '70%', paddingLeft: '0%' },
      ],
    };
  }

  render() {
    return template.call(this);
  }

  async loadGridData() {
    await this.props.hackerNewsAction();
  }

  componentDidMount() {
    this.loadGridData();
  }
}

const msp = (state) => {
  return { data: state.reducer.data };
};

const mdp = (dispatch) => {
  return {
    hackerNewsAction: bindActionCreators(hackerNewsAction, dispatch),
  };
};
export default connect(msp, mdp)(Home);
