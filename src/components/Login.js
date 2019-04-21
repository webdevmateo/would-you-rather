import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import Image from '../question-mark.jpeg'

class Login extends Component {
  state = {
    authedId: null,
    redirectToReferrer: false,
  }

  handleChange = (e) => {
    this.setState({
      authedId: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { authedId } = this.state

    if (authedId === null || authedId === 'select') {
      alert('Please select a user.')
    } else {
      dispatch(setAuthedUser(authedId))
      this.setState({
        redirectToReferrer: true,
      })
    }
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state
    const { usersArray } = this.props
    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div className='login-container'>
        <h4 className='welcome'>Welcome to the Would You Rather App!</h4>
        <p className='login-message'>Please log in to continue.</p>
        <div>
          <img
            className='logo'
            src={Image}
            alt='question mark logos'
          />
        </div>
        <form
          className='login-form'
          onSubmit={this.handleSubmit}
        >
          <select
            className='dropdown'
            onChange={this.handleChange}
            defaultValue='select'
          >
            <option value='select'>Select User</option>
            {usersArray.map((user) =>
              <option
                key={user.id}
                value={user.id}
              >
                {user.name}
              </option>
            )}
          </select>
          <button className='login-button'>Login</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ users, polls }) {
  const pollIds = Object.keys(polls)
  const usersArray = Object.values(users)

  return {
    pollIds,
    usersArray,
  }
}

export default connect(mapStateToProps)(Login)
