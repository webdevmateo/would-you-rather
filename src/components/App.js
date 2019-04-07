import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import ListPolls from './ListPolls'
import AnswerPoll from './AnswerPoll'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }

  render() {
    const { loading } = this.props

    return (
      <div className='app'>
        {loading === true
          ? null
          : <AnswerPoll
              match={{params: {id: 'vthrdm985a262al8qx3do'}}}
            />
        }
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}


export default connect(mapStateToProps)(App);
