import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'

class ListUsers extends Component {
  render() {
    const { ids } = this.props

    return (
      <div className='leader-board'>
        <ul className='user-list'>
          {ids.map((id) => {
            return (
              <li
                key={id}
                className='user-list-item'
              >
                <User id={id}></User>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ users }) {

  const entries = Object.entries(users)

  let temp = entries.map((entry) => {
  
    return {
      id: entry[0],
      sum: (Object.keys(entry[1].answers).length) + (entry[1].questions.length)
    }
  })

  const sorted = temp.sort((a,b) => {
    return b.sum - a.sum
  })

  const ids = sorted.map((user) => user.id)

  return {
    ids,
  }
}

export default connect(mapStateToProps)(ListUsers)
