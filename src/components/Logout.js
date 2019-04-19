import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeAuthedUser } from '../actions/authedUser'

class Logout extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(removeAuthedUser())
    this.props.history.push('/login')
  }

  render () {
    return (
      <div className='logout'>
        <button
          className='logout-button'
          onClick={this.handleSubmit}
        >
          Logout
        </button>
      </div>
    )
  }
}

export default withRouter(connect()(Logout))
