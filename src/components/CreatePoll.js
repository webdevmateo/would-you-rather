import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddPoll } from '../actions/polls'

class CreatePoll extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
  }

  handleChange = (e) => {
    e.target.id === 'one'
    ? this.setState({
      optionOneText: e.target.value
    })
    : this.setState({
      optionTwoText: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { optionOneText } = this.state
    const { optionTwoText } = this.state

    dispatch(handleAddPoll(optionOneText, optionTwoText))

    this.setState({
      optionOneText: '',
      optionTwoText: '',
    })

    this.props.history.push('/')
  }

  render() {
    return (
      <div className='create-poll'>
        <h3 className='create'>Create New Poll</h3>
        <hr className='divider' />
        <p className='complete'>Complete the poll:</p>
        <p className='complete'>Would you rather...</p>
        <form
          className='enter-poll'
          onSubmit={this.handleSubmit}
        >
          <input
            id='one'
            type='text'
            className='input'
            placeholder='Enter option 1 text here.'
            value={this.state.optionOneText}
            onChange={this.handleChange}
          />
          <span className='space'>OR</span>
          <input
            id='two'
            type='text'
            className='input'
            placeholder='Enter option 2 text here.'
            value={this.state.optionTwoText}
            onChange={this.handleChange}
          />
          <button className='submit-new-poll'>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(CreatePoll)
