import React from 'react';

export default class Button extends React.Component { 
    constructor(props) {
        super(props);

        this.isOperator= this.isOperator.bind(this); 
        this.chooseStyle= this.chooseStyle.bind(this);
        this.onUp = this.onUp.bind(this);
        this.onDown = this.onDown.bind(this); 
        this.state = {
            btnColour : '#e0e1e6',
            btnColourDown: '#999a9e',
            opColour: '#fe9241',
            opColourDown: '#bd6c2f'
        }
    };

    isOperator() {
        return (!isNaN(this.props.value))||this.props.value === '.'|| this.props.value === '='; 
    }

    chooseStyle(s1, s2) {
      
        if(this.isOperator(this.props.value)) {
            return s1;
        }
        else {
            return Object.assign(s1,s2);
        }
    }

    onDown() {
        this.setState({btnColour: '#999a9e'})
        this.setState({opColour:'#bd6c2f' })
    }
    onUp(s1,s2) {
        this.setState({ btnColour : '#e0e1e6'})
        this.setState({opColour: '#fe9241'})
    }
    render(){
        const buttonStyle = {
            height: '4em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'lighter',
            fontSize: '1.4em',
            backgroundColor: this.state.btnColour,
            color: '#888',
            flex: 1,
            outline: '1px solid #888'
        }

        const operatorStyle = {
            backgroundColor: this.state.opColour,
            color: 'white'
        }
        return(
            <div style={this.chooseStyle(buttonStyle, operatorStyle)}
            onClick={()=> this.props.handleClick(this.props.value)}
            onMouseDown= {
                this.onDown
            }
            onMouseUp = {
                this.onUp
            }
        
            >
                {this.props.value}
            </div>
        )
    }
} 