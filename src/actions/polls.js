export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ADD_VOTE = 'ADD_VOTE'

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
