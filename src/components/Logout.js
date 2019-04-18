import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeAuthedUser } from '../actions/authedUser'

class Logout extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(removeAuthedUser())
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

export default connect()(Logout)
