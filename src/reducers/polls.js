import { RECEIVE_POLLS, ADD_VOTE, REMOVE_VOTE } from '../actions/polls'

export default function polls (state = {}, action) {
  switch(action.type) {
    case RECEIVE_POLLS :
      return {
        ...state,
        ...action.polls
      }
    case ADD_VOTE :
      return {
        ...state,
        [action.qid]: action.answer === 'optionOne'
        ? {
            ...state[action.qid],
            optionOne: {
              ...state[action.qid].optionOne,
              votes:
                state[action.qid].optionOne.votes.concat([action.uid])
            }
          }
        :
          {
            ...state[action.qid],
            optionTwo: {
              ...state[action.qid].optionTwo,
              votes:
                state[action.qid].optionTwo.votes.concat([action.uid])
            }
          }
        }
        case REMOVE_VOTE :
          return {
            ...state,
            [action.qid]: action.answer === 'optionOne'
            ? {
                ...state[action.qid],
                optionOne: {
                  ...state[action.qid].optionOne,
                  votes:
                    state[action.qid].optionOne.votes.filter((uid) => uid !== action.uid)

                }
              }
            :
              {
                ...state[action.qid],
                optionTwo: {
                  ...state[action.qid].optionTwo,
                  votes:
                    state[action.qid].optionTwo.votes.filter((uid) => uid !== action.uid)
                }
              }
            }
    default :
      return state
  }
}
