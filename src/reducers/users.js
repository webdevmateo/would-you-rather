import { RECEIVE_USERS, ADD_ANSWER, REMOVE_ANSWER, ADD_POLL_TO_USER } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_ANSWER :
      return {
        ...state,
        [action.uid]: {
          ...state[action.uid],
          answers: {
            ...state[action.uid].answers,
            [action.qid]: action.answer
          }
        }
      }
    case REMOVE_ANSWER :
      return {
        ...state,
        [action.uid]: {
          ...state[action.uid],
          answers:           Object.keys(state[action.uid].answers).reduce((acc, key) => {
          if (key !== action.qid) {
            return {...acc, [key]: state[action.uid].answers[key]}
          }
          return acc;
          }, {})
        }
      }
    case ADD_POLL_TO_USER :
      return {
        ...state,
        [action.uid]: {
          ...state[action.uid],
          questions: state[action.uid].questions.concat([action.qid])
        }
      }
    default :
      return state
  }
}
