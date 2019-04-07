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
    const answers = Object.keys(users[authedUser].answers)

    return (
      <div className='poll-list'>
        <button
          className={this.state.showUnanswered
            ? 'filter-polls-selected'
            : 'filter-polls-not-selected'
          }
          onClick={this.showUnanswered}
        >
          Unanswered Questions
        </button>
        <button
          className={this.state.showUnanswered
            ? 'filter-polls-not-selected'
            : 'filter-polls-selected'
          }
          onClick={this.showAnswered}
        >
          Answered Questions
        </button>
        <ul className='polls'>
          {(this.state.showUnanswered
            ? pollIds.filter((id) => answers.includes(id))
            : pollIds.filter((id) => !answers.includes(id)))
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
