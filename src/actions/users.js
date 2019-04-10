import { saveQuestionAnswer } from '../utils/api'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_ANSWER = 'ADD_ANSWER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function addAnswer (uid, qid, answer) {
  return {
    type: ADD_ANSWER,
    uid,
    qid,
    answer,
  }
}

export function handleAddAnswer (qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(addAnswer(authedUser, qid, answer))

    return saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    })
    .catch((e) => {
      console.log('There was an error of type: ', e);
      alert('There was an error answering the poll.  Please try again');
    })
  }
}
