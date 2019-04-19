import React, { Component } from 'react'
import { connect } from 'react-redux'

class ShowAuthedUser extends Component {
  render() {
    const { name, avatar } = this.props
    return (
      <div className='authed-user'>
        <span className='greeting'>Hello, {name}</span>
        <div className='authed-image'>
          <img
            className='authed-avatar'
            src={avatar}
            alt={`${name}`}
          />
        </div>

      </div>
    )
  }
}

function mapStateToProps({ users, authedUser }) {
  const user = users[authedUser]
  const name = user.name
  const avatar = user.avatarURL
  return {
    name,
    avatar,
  }
}

export default connect(mapStateToProps)(ShowAuthedUser)
