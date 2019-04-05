import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, polls]) => ({
    users,
    polls
  }))
}

export function addPoll (info) {
  return _saveQuestion(info)
}

export function addAnswer (info) {
  return _saveQuestionAnswer(info)
}
