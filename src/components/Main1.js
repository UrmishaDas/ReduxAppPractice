import React, { Component } from 'react'

const Main1 = (props) => {  
        return (
            <div>
                <div>
                    <h1> The Main Page </h1>
                    <hr />
                </div>
                <div>
                    <button onClick={() => props.changeUsername()}>Change Username</button>
                </div>
            </div>
        )
    
}

export default Main1
