import { saveQuestionAnswer } from '../utils/api'
import { addVote, removeVote } from './polls'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_ANSWER = 'ADD_ANSWER'
export const REMOVE_ANSWER = 'REMOVE_ANSWER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

function addAnswer (uid, qid, answer) {
  return {
    type: ADD_ANSWER,
    uid,
    qid,
    answer,
  }
}

function removeAnswer (uid, qid, answer) {
  return {
    type: REMOVE_ANSWER,
    uid,
    qid,
    answer,
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
