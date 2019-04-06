import React, { Component } from 'react'
import { connect } from 'react-redux'

class Poll extends Component {
    toPollDetail = (e) => {
      e.preventDefault();

      //todo: Redirect User to Poll Detail View
    }

    render() {
      const { poll, author, avatar } = this.props

      return (
        <div className='poll'>
          <h4 className='author'>{author} asks:</h4>
          <div className='image'>
            <img
              className='avatar'
              src={avatar}
              alt={`${author}`}
            />
          </div>
          <div
            className='question-detail'
          >
            <p className='question'>Would you rather</p>
            <span className='options'>
              ...{poll.optionOne.text}...
            </span>
            <button
              className='viewPoll'
              onClick={this.toPollDetail}
            >
              View Poll
            </button>
          </div>
        </div>
      )
    }
}

function mapStateToProps({ polls, users, authedUser }, { id }) {
  const poll = polls[id]
  const author = users[poll.author].name
  const avatar = users[poll.author].avatarURL
  return {
    authedUser,
    poll,
    author,
    avatar,
  }
}

export default connect(mapStateToProps)(Poll)
