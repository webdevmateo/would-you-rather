import React, { Component } from 'react'
import { connect } from 'react-redux'


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
    console.log(this.state.optionOneText)
    console.log(this.state.optionTwoText)

    //todo: Dispatch new poll to store and database
    //todo: Redirect user to home after submit
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
          OR
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

function mapStateToProps({}) {
  return {

  }
}

export default connect()(CreatePoll)
