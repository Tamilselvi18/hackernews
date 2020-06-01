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
        { name: 'news_details', width: '70%', paddingLeft: '0%' },
        // { name: 'author', width: '0%', paddingLeft: '0%' },
        // { name: 'url', width: '0%', paddingLeft: '0%' },
        // { name: 'created_at_i', idth: '0%', paddingLeft: '0%' },
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
