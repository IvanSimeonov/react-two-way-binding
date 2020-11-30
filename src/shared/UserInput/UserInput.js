import React from 'react';

const UserInput = (props) => {

    const inputFieldStyle = {
        marginLeft: '2.05rem'
    }

    return (
        <div className="container">
            <div className="row" style={inputFieldStyle}>
                <label>Search: </label>
                <input type="text" 
                    onChange={props.changed} 
                    value={props.value}></input> 
            </div>
        </div>
    );
}

export default UserInput;