import React, { Component } from 'react'
import { connect } from 'react-redux'

class Poll extends Component {
    toPollDetail = (e, id) => {
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
              className='view-poll'
              onClick={(e) => this.toPollDetail(e, poll.id)}
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
    poll,
    author,
    avatar,
  }
}

export default connect(mapStateToProps)(Poll)
