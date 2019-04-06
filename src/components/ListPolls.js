import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'

class ListPolls extends Component {

  state = {
    showUnanswered: true,
  }

  showUnanswered = (e) => {
    e.preventDefault()
    this.setState({
      showUnanswered: true,
    })
  }

  showAnswered = (e) => {
    e.preventDefault()
    this.setState({
      showUnanswered: false,
    })
  }

  render() {
    const { users, authedUser } = this.props
    let { pollIds } = this.props
    let answers = []
    if (users[authedUser]) {
      answers = Object.keys(users[authedUser].answers)
    }

    this.state.showUnanswered
    ? pollIds = pollIds.filter((id) => answers.includes(id))
    : pollIds = pollIds.filter((id) => !answers.includes(id))

    return (
      <div className='pollList'>
        <button
          className=''
          onClick={this.showUnanswered}
        >
          Unanswered Questions
        </button>
        <button
          className=''
          onClick={this.showAnswered}
        >
          Answered Questions
        </button>
        <ul className='polls'>
          {pollIds.map((id) =>
            <li
              key={id}
            >
              <Poll id={id} />
            </li>
          )}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ polls, users, authedUser }) {
  return {
    pollIds: Object.keys(polls)
    .sort((a,b) => polls[b].timestamp - polls[a].timestamp),
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(ListPolls)
