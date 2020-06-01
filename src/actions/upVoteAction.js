//import ServerCall from '../services/ServerCall';
const upVoteAction = (itemToVote) => {
  return (dispatch, getState) => {
    let arr = JSON.parse(localStorage.getItem('hackerNewsData'));

    let incVal = Number(arr[itemToVote]['points']) + 1;
    let obj = { ...arr[itemToVote], points: incVal };
    arr.splice(itemToVote, 1, obj);

    localStorage.setItem('hackerNewsData', JSON.stringify(arr));
    dispatch({
      type: 'UP_VOTE',
      payload: JSON.parse(localStorage.getItem('hackerNewsData')),
    });
  };
};

export default upVoteAction;
