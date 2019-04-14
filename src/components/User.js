import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {
  render() {
    const { user, avatar, name, answers, questions } = this.props

    return (
      <div className='user'>
      <div className='image'>
        <img
          className='avatar'
          src={avatar}
          alt={`${name}`}
        />
      </div>
      <div
        className='question-detail'
      >
        {questions}
      </div>
      </div>
    )
  }
}

function mapStateToProps({ users }, { id }) {
  const user = users[id]
  const avatar = user.avatarURL
  const name = users.name
  const answers = Object.keys(user.answers).length
  const questions = user.questions.length

  return {
    user,
    avatar,
    name,
    answers,
    questions,
  }
}

export default connect(mapStateToProps)(User)
