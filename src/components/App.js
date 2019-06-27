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
  state = {
    navLoaded: false,
    navClass: 'drawer',
  }

  componentDidMount() {
    const { handleInitialData } = this.props
    handleInitialData()
  }

  displayNavLoaded = () => {
    this.setState({
      navLoaded: true,
    })
  }

  toggleDrawer = () => {
    const { navClass } = this.state

    this.setState({
      navClass: navClass === 'drawer' ? 'drawer open' : 'drawer',
    })
  }

  closeDrawer = () => {
    const { navLoaded, navClass } = this.state

    if (navLoaded && navClass === 'drawer open') {
      this.setState({
        navClass: 'drawer',
      })
    }
  }

  render() {
    const { loading, authedUser } = this.props
    const { navClass, navLoaded } = this.state

    return (
      <Router basename="/projects/wouldYouRather">
        <Fragment>
          <LoadingBar />
          <div
            className='app'
            onClick={this.closeDrawer}
          >
            {loading === true
              ? null
              : <div className='container'>
                  {authedUser === null
                    ? null
                    : <Nav
                        navClass={navClass}
                        toggleDrawer={this.toggleDrawer}
                        navLoaded={navLoaded}
                        displayNavLoaded={this.displayNavLoaded}
                      />
                  }
                  <Switch>
                    <PrivateRoute className='private' authedUser={authedUser} path='/' exact component={ListPolls} />
                    <PrivateRoute className='private' authedUser={authedUser} path='/questions/:question_id' component={AnswerPoll}/>
                    <PrivateRoute className='private' authedUser={authedUser} path='/add' component={CreatePoll} />
                    <PrivateRoute className='private' authedUser={authedUser} path='/leaderboard' component={ListUsers} />
                    <Route className='private' path='/login' component={Login} />
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


export default connect(mapStateToProps, { handleInitialData })(App);
