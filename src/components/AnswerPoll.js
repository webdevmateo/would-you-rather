import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddAnswer } from '../actions/users'
import { addVote } from '../actions/polls'

class AnswerPoll extends Component {
  state = {
    option: 'one',
  }

  toPollResults = (id) => {

    //todo: Redirect to ShowResults component
  }

  handleChange = (e) => {
    this.setState({
      option: e.target.value
    })
  }

  handleSumbit = (e) => {
    e.preventDefault()
    const { dispatch, poll, authedUser } = this.props
    const { option } = this.state
    let answer
    option === 'one'
    ? answer = 'optionOne'
    : answer = 'optionTwo'

    dispatch(handleAddAnswer(poll.id, answer))
    dispatch(addVote(authedUser, poll.id, answer))

    //todo: Redirect to ShowResults component
  }

  render() {

    const { poll, author, avatar } = this.props
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
          <form
            onSubmit={this.handleSumbit}
          >
            <div className='radios'>
              <label>
                <input
                  className='radio'
                  type='radio'
                  checked={this.state.option === 'one'}
                  onChange={this.handleChange}
                  value='one'
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
                  checked={this.state.option === 'two'}
                  onChange={this.handleChange}
                  value='two'
                  id='optionTwo'
                />
                {poll.optionTwo.text}
              </label>
            </div>
            <button className='submit-poll'>
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ polls, users, authedUser }, props) {
  const { id } = props.match.params
  const poll = polls[id]
  const author = users[poll.author].name
  const avatar = users[poll.author].avatarURL

  return {
    poll,
    author,
    avatar,
    authedUser,
  }
}

export default connect(mapStateToProps)(AnswerPoll);
