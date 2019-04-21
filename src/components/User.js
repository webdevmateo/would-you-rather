import React from 'react'
import { connect } from 'react-redux'

const User = (props) => {
  const { avatar, name, answers, questions } = props
  return (
    <div className='user'>
      <div className='user-detail-image'>
        <img
          className='user-avatar'
          src={avatar}
          alt={`${name}`}
        />
      </div>
      <div
        className='user-question-detail'>
        <h3 className='user-name'>{name}</h3>
        <p className='answered-created'>Answered Polls
          <span className='right'>{answers}</span>
        </p>
        <p className='answered-created'>Created Polls
          <span className='right'>{questions}</span>
        </p>
      </div>
      <div className='score'>
        <h4 className='score-header'>Score</h4>
        <p>{questions + answers}</p>
      </div>
    </div>
  )
}

function mapStateToProps({ users }, { id }) {
  const user = users[id]
  const avatar = user.avatarURL
  const name = user.name
  const answers = Object.keys(user.answers).length
  const questions = user.questions.length

  return {
    avatar,
    name,
    answers,
    questions,
  }
}

export default connect(mapStateToProps)(User)
