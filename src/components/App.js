import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav'
import Unidentified from './Unidentified'
import ListPolls from './ListPolls'
import AnswerPoll from './AnswerPoll'
import CreatePoll from './CreatePoll'
import ListUsers from './ListUsers'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }

  render() {
    const { loading, authedUser } = this.props

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='app'>
            {loading === true
              ? null
              : <div className='container'>
                  {authedUser === null
                    ? null
                    : <Nav />
                  }
                  <Switch>
                    <PrivateRoute authedUser={authedUser} path='/' exact component={ListPolls} />
                    <PrivateRoute authedUser={authedUser} path='/questions/:question_id' component={AnswerPoll}/>
                    <PrivateRoute authedUser={authedUser} path='/add' component={CreatePoll} />
                    <PrivateRoute authedUser={authedUser} path='/leaderboard' component={ListUsers} />
                    <Route path='/login' component={Login} />
                    <Route component={Unidentified} />
                  </Switch>
                </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ users, authedUser }) {

  return {
    loading: Object.keys(users).length === 0,
    authedUser,
  }
}


export default connect(mapStateToProps)(App);
