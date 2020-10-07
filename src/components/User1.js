import React, { Component } from 'react'

const User1 = (props) => {
    
        return (
            <div>
                <div>
                    <h1> The User Page </h1>
                    <hr />
                </div>
                <div>
        <p> Username : {props.username}</p>
                </div>
            </div>
        )
    
}

export default User1
