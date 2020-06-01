//import ServerCall from '../services/ServerCall';
const hideCommentsAction = (itemToHide) => {
  return (dispatch, getState) => {
    let newArr = JSON.parse(localStorage.getItem('hackerNewsData')).filter(
      (item, i) => {
        console.log(i, '>>item', itemToHide);
        return i !== Number(itemToHide);
      }
    );

    // JSON.parse(localStorage.getItem('hackerNewsData')).splice(itemToHide, 1);
    // console.log(newArr, '@@@');
    localStorage.setItem('hackerNewsData', JSON.stringify(newArr));
    dispatch({
      type: 'HIDE_COMMENT',
      payload: JSON.parse(localStorage.getItem('hackerNewsData')),
    });
  };
};

export default hideCommentsAction;
