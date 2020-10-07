import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1> The User Page </h1>
                    <hr />
                </div>
                <div>
        <p> Username : {this.props.username}</p>
                </div>
            </div>
        )
    }
}
