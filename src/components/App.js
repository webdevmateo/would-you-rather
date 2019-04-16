import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import ListPolls from './ListPolls'
import AnswerPoll from './AnswerPoll'
import CreatePoll from './CreatePoll'
import ListUsers from './ListUsers'
import Login from './Login'
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
            : <Login />

              // <AnswerPoll
              //   match={{params: {id: 'vthrdm985a262al8qx3do'}}}
              // />
          }
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps({ users }) {

  return {
    loading: Object.keys(users).length === 0
  }
}


export default connect(mapStateToProps)(App);
