import React, { Component } from 'react'
import { connect } from 'react-redux'

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
    const { dispatch, poll } = this.props
    const option = this.state.option
    let text
    option === 'one'
    ? text = poll.optionOne.text
    : text = poll.optionTwo.text
    console.log(text)

    //todo: Dispatch actions to store: add answer to user's list of answers and add user's id to answer's list of votes

    //todo: Redirect to ShowResults component
  }

  render() {

    const { poll, author, avatar} = this.props
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
