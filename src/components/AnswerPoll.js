import React, { Component } from 'react'
import { connect } from 'react-redux'

class AnswerPoll extends Component {
    toPollResults = (e, id) => {
      e.preventDefault()
      //todo: Redirect to ShowResults component
    }

    render() {

      const { pollLength, userLength, poll, author,
      avatar} = this.props

      if (pollLength > 0 && userLength > 0) {
        return (
          <div className='answer-poll'>
            <h4 className='author'>{author} asks:</h4>
            <div className='detail-image'>
              <img
                className='detail-avatar'
                src={avatar}
                alt={`${author}`}
              />
            </div>
            <div className='detail-question-detail'>
              <h3>Would You Rather ...</h3>
              <div className='radios'>
                <label>
                  <input
                    className='radio'
                    type='radio'
                    name='options'
                    value={poll.optionOne.text}
                    id='optionOne'
                  />
                  {poll.optionOne.text}
                </label>
              </div>
              <div className='radios'>
                <label>
                  <input
                    className='radio'
                    type='radio'
                    name='options'
                    value={poll.optionTwo.text}
                    id='optionTwo'
                  />
                  {poll.optionTwo.text}
                </label>
              </div>
              <button
                className='submit-poll'
                onClick={(e) => this.toPollResults(e, poll.id)}
              >
                Submit
              </button>
            </div>
          </div>
        )
      }
        return (
          <div>...Loading</div>
        )
    }
}

function mapStateToProps({ polls, users, authedUser }, props) {
  const { id } = props.match.params
  const pollLength = Object.keys(polls).length
  const userLength = Object.keys(users).length
  let poll, author, avatar
  if (pollLength > 0 && userLength > 0) {
      poll = polls[id]
      author = users[poll.author].name
      avatar = users[poll.author].avatarURL
  }


  return {
    pollLength,
    userLength,
    poll,
    author,
    avatar
  }
}

export default connect(mapStateToProps)(AnswerPoll);
