import { saveQuestion } from '../utils/api'
import { addPollToUser } from './users'

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ADD_VOTE = 'ADD_VOTE'
export const REMOVE_VOTE = 'REMOVE_VOTE'
export const ADD_POLL = 'ADD_POLL'

export function receivePolls (polls) {
  return {
    type: RECEIVE_POLLS,
    polls
  }
}

export function addVote (uid, qid, answer) {
  return {
    type: ADD_VOTE,
    uid,
    qid,
    answer,
  }
}

export function removeVote (uid, qid, answer) {
  return {
    type: REMOVE_VOTE,
    uid,
    qid,
    answer,
  }
}

function addPoll (poll) {
  return {
    type: ADD_POLL,
    poll,
  }
}

export function handleAddPoll(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    const author = authedUser

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
  }
}
