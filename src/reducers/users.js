import { RECEIVE_USERS, ADD_ANSWER} from '../actions/users'

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
    default :
      return state
  }
}
