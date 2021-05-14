import React from 'react';

export default class Input extends React.Component { 
    constructor(props) {
        super(props);
    };
    render(){
        const inputStyle = {
            height: '4em',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: '1.4em',
            backgroundColor: '#000000',
            color: '#ffffff',
            padding: '0.5em',
            outline: '1px solid #888'
        }

        return(
            <div style={inputStyle}>{this.props.input}</div>

        )
    }
} 