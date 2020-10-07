import React, { Component } from 'react'
import User from './User'
import Main from './Main'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "Urmisha"
    }
  }

  changeUsername = (newName) => {
    this.setState({
      username: newName
    })
  }
  render() {
    return (
      <div>

        <Main changeUsername={this.changeUsername} />
        <User username={this.state.username} />
        
      </div>
    )
  }
}
