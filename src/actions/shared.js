import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api'
import { receiveUsers, addPollToUser, addAnswer, removeAnswer } from './users'
import { receivePolls, addPoll, addVote, removeVote } from './polls'
import { showLoading, hideLoading } from 'react-redux-loading';

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
    .then(({ users, polls }) => {
      dispatch(receiveUsers(users))
      dispatch(receivePolls(polls))
      dispatch(hideLoading());
    })
  }
}

export function handleAddPoll(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    const author = authedUser

    dispatch(showLoading());

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author
    })
    .then((formattedPoll) => {
      dispatch(addPoll(formattedPoll))
      dispatch(addPollToUser(author, formattedPoll.id))
    })
    .catch((e) => {
      console.log('There was an error of type: ', e);
      alert('There was an error adding the poll.  Please try again');
    })
    .then(dispatch(hideLoading()));
  }
}

export function handleAddAnswer (qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(addAnswer(authedUser, qid, answer))
    dispatch(addVote(authedUser, qid, answer))
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    })
    .catch((e) => {
      console.log('There was an error of type: ', e);
      alert('There was an error answering the poll.  Please try again')
      dispatch(removeAnswer(authedUser, qid, answer))
      dispatch(removeVote(authedUser, qid, answer))
    })
  }
}
