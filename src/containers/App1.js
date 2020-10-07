import React, { Component } from 'react'
import User1 from '../components/User1'
import Main1 from '../components/Main1'
import { connect } from 'react-redux'
import { setName } from '../actions/userAction'

class App1 extends Component {
  
  render() {
    return (
      <div>

        <Main1 changeUsername={() => this.props.setName("Sushanta")} />
        <User1 username={this.props.user.name} />
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App1)
