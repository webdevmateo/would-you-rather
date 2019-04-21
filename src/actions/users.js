export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_ANSWER = 'ADD_ANSWER'
export const REMOVE_ANSWER = 'REMOVE_ANSWER'
export const ADD_POLL_TO_USER = 'ADD_POLL_TO_USER'

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

export function removeAnswer (uid, qid, answer) {
  return {
    type: REMOVE_ANSWER,
    uid,
    qid,
    answer,
  }
}

export function addPollToUser (uid, qid) {
  return {
    type: ADD_POLL_TO_USER,
    uid,
    qid,
  }
}
