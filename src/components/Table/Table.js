import React from 'react';
import template from './Table.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import hideCommentsAction from '../../actions/hideCommentsAction';
import upVoteAction from '../../actions/upVoteAction';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 0,
    };
    this.hideComment = this.hideComment.bind(this);
    this.upVote = this.upVote.bind(this);
    this.goToPreviousPage = this.goToPreviousPage.bind(this);
    this.goToNextPage = this.goToNextPage.bind(this);
  }
  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  async hideComment(event) {
    const itemToHide = event.target.parentElement.parentElement.parentElement.id.split(
      '-'
    )[1];
    await this.props.hideCommentsAction(itemToHide);
    await this.setState({
      data: JSON.parse(localStorage.getItem('hackerNewsData')),
    });
    await console.log(this.state.data, 'state local');
  }

  async upVote(event) {
    console.log(event.target.parentElement.parentElement, '^^');
    const itemToVote = event.target.parentElement.parentElement.id.split(
      '-'
    )[1];
    await this.props.upVoteAction(itemToVote);
    await this.setState({
      data: JSON.parse(localStorage.getItem('hackerNewsData')),
    });
  }

  async goToNextPage() {
    if (this.props.data.length - this.state.page < 10) return false;
    await this.setState({
      page: this.state.page + 10,
    });
  }

  async goToPreviousPage() {
    if (this.state.page === 0) return false;
    await this.setState({
      page: this.state.page - 10,
    });
  }
  render() {
    return template.call(this);
  }
}

const msp = (state) => {
  return { data: state.reducer.data };
};

const mdp = (dispatch) => {
  return {
    hideCommentsAction: bindActionCreators(hideCommentsAction, dispatch),
    upVoteAction: bindActionCreators(upVoteAction, dispatch),
  };
};

export default connect(msp, mdp)(Table);
