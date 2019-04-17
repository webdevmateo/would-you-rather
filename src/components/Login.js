import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

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
    dispatch(setAuthedUser(authedId))
    this.setState({
      redirectToReferrer: true,
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state
    const { usersArray } = this.props

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div className='show-results'>
        <h4 className='welcome'>Welcome to the Would You Rather App!</h4>

        <form
          onSubmit={this.handleSubmit}
        >
          <select
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
          <button
            disabled={this.state.authedId === null || this.state.authedId === 'select'}
          >Login</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ users }) {

  const usersArray = Object.values(users)

  return {
    usersArray,
  }
}

export default connect(mapStateToProps)(Login)
