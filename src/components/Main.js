import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1> The Main Page </h1>
                    <hr />
                </div>
                <div>
                    <button onClick={() => this.props.changeUsername("Sushanta")}>Change Username</button>
                </div>
            </div>
        )
    }
}
