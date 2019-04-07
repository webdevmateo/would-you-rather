export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ANSWER_POLL = 'ANSWER_POLL'

export function receivePolls (polls) {
  return {
    type: RECEIVE_POLLS,
    polls
  }
}

function answerPoll (poll) {
  return {
    type: ANSWER_POLL,
    poll
  }
}

export function handleAnswerPoll () {
  return (dispatch, getState) => {

  }
}
