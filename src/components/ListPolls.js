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
    const { pollIds } = this.props
    const { showUnanswered } = this.state
    const answers = Object.keys(users[authedUser].answers)

    const filtered = showUnanswered
    ? pollIds.filter((id) => !answers.includes(id))
    : pollIds.filter((id) => answers.includes(id))


    return (
      <div className='poll-list'>
        <button
          className={this.state.showUnanswered
            ? 'filter-polls-selected'
            : 'filter-polls-not-selected'
          }
          onClick={this.showUnanswered}
        >
          Unanswered Polls
        </button>
        <button
          className={this.state.showUnanswered
            ? 'filter-polls-not-selected'
            : 'filter-polls-selected'
          }
          onClick={this.showAnswered}
        >
          Answered Polls
        </button>
        <ul className='polls'>
          <li>{filtered.length === 0
            && (this.state.showUnanswered
              ? 'You have no unanswered polls.'
              : 'You have not answered any polls.')
          }</li>
          {filtered
            .map((id) =>
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
