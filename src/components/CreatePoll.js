import React, { Component } from 'react'
import { connect } from 'react-redux'


class CreatePoll extends Component {
  render() {
    return (
      <div>
        CreatePoll
      </div>
    )
  }
}

function mapStateToProps() {
  return {

  }
}

export default connect()(CreatePoll)
