import React from 'react';

export default class ClearButton extends React.Component { 
    constructor(props) {
        super(props);
    };
    render(){
        const clearStyle = {
            height: '4em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'lighter',
            fontSize: '1.4em',
            backgroundColor: '#c5c3cd',
            color: '#000',
            flex: 1,
            outline: '1px solid #888'
        }

        return(
            <div style={clearStyle} onClick={this.props.handleClear}>{this.props.children}</div>
        )
    }
} 