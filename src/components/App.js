import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import ListPolls from './ListPolls'
import AnswerPoll from './AnswerPoll'
import CreatePoll from './CreatePoll'
import ListUsers from './ListUsers'
import LoadingBar from 'react-redux-loading';


class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }

  render() {
    const { loading } = this.props

    return (

      <Fragment>
        <LoadingBar />
        <div className='app'>
          {loading === true
            ? null
            : <ListUsers />

              // <AnswerPoll
              //   match={{params: {id: 'vthrdm985a262al8qx3do'}}}
              // />
          }
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}


export default connect(mapStateToProps)(App);
