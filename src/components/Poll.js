import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Poll extends Component {
    toPollDetail = (e, id) => {
      e.preventDefault();
      alert('working')
      //todo: Redirect User to Poll Detail View
      //if user has already answered the poll, redirect to ShowResults component; if not, then redirect to AnswerPoll component
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
            <Link to={`/questions/${poll.id}`}>
              <button className='view-poll'>
                View Poll
              </button>
            </Link>
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
