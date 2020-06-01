import ServerCall from '../services/ServerCall';
const hackerNewsAction = () => {
  return (dispatch, getState) => {
    var hackerNewsArr = [];
    if (
      !localStorage.getItem('hackerNewsData') ||
      JSON.parse(localStorage.getItem('hackerNewsData')).length === 0
    ) {
      ServerCall.getHackerNewsData().then((r) => {
        r.data.hits.forEach((element, index, array) => {
          var newObj = {};
          newObj['num_comments'] = element.num_comments;
          newObj['points'] = element.points;
          newObj['upvote'] = '';
          newObj['title'] = element.title;
          hackerNewsArr.push(newObj);
        });

        localStorage.setItem('hackerNewsData', JSON.stringify(hackerNewsArr));

        dispatch({
          payload: JSON.parse(localStorage.getItem('hackerNewsData')),
          type: 'HACKER_NEWS',
        });
      });
    } else {
      JSON.parse(localStorage.getItem('hackerNewsData')).forEach(
        (element, index, array) => {
          var newObj = {};
          newObj['num_comments'] = element.num_comments;
          newObj['points'] = element.points;
          newObj['upvote'] = '';
          newObj['title'] = element.title;
          hackerNewsArr.push(newObj);
        }
      );

      dispatch({
        payload: JSON.parse(localStorage.getItem('hackerNewsData')),
        type: 'HACKER_NEWS',
      });
    }
  };
};

export default hackerNewsAction;
