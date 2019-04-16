import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  state = {
    authedId: null,
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
    //todo: redirect to '/'
  }

  render() {
    const { usersArray } = this.props

    return (
      <div className='show-results'>
        <h4 className='welcome'>Welcome to the Would You Rather App!</h4>

        <form
          onSubmit={this.handleSubmit}
        >
          <select
            onChange={this.handleChange}
          >
            <option selected disabled>Select User</option>
            {usersArray.map((user) =>
              <option
                key={user.id}
                value={user.id}
              >
                {user.name}
              </option>
            )}
          </select>
          <button>Login</button>
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
