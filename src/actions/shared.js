import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receivePolls } from './polls'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
    .then(({ users, polls }) => {
      dispatch(receiveUsers(users))
      dispatch(receivePolls(polls))
    })
  }
}
