import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

const Logout = (props) => {
  
  function handleSubmit (e) {
    e.preventDefault()
    const { setAuthedUser } = props
    setAuthedUser(null)
    props.history.push('/login')
  }

  return (
    <div className='logout'>
      <button
        className='logout-button'
        onClick={handleSubmit}
      >
        Logout
      </button>
    </div>
  )
}

export default withRouter(connect(null, { setAuthedUser })(Logout))
