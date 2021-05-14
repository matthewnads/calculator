import React from 'react';
import { render } from 'react-dom';
import './App.css';
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import Input from './components/Input';
import * as math from 'mathjs';

export class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      calculated: false
    }
  };

  addToInput = val => {
  
    if(this.state.calculated === true) {
      this.setState({input:val});
      this.setState({calculated: false});
    } else {
      this.setState({input: this.state.input + val});
    }
  }

  handleEqual = () => {
    this.setState({
      input: math.evaluate(this.state.input)
    });
    this.setState({calculated: true});
  }

  render() {
    return (
      <div className="App">
        <div className='calc-wrapper'>
          <Input input={this.state.input}></Input>
          <div className='row'>
            <Button handleClick={this.addToInput} value='7'/>
            <Button handleClick={this.addToInput} value='8'/>
            <Button handleClick={this.addToInput} value='9'/>
            <Button handleClick={this.addToInput} value='/'/>
          </div>
          <div className='row'>
            <Button handleClick={this.addToInput} value='4'/>
            <Button handleClick={this.addToInput} value='5'/>
            <Button handleClick={this.addToInput} value='6'/>
            <Button handleClick={this.addToInput} value='*'/>
          </div>
          <div className='row'>
            <Button handleClick={this.addToInput} value='1'/>
            <Button handleClick={this.addToInput} value='2'/>
            <Button handleClick={this.addToInput} value='3'/>
            <Button handleClick={this.addToInput} value='+'/>
          </div>
          <div className='row'>
            <Button handleClick={this.addToInput} value='.'/>
            <Button handleClick={this.addToInput} value='0'/>
            <Button handleClick={this.handleEqual} value='='/>
            <Button handleClick={this.addToInput} value='-'/>
          </div>
          <div className='row'> 
            <ClearButton handleClear={()=> this.setState({input:''})} >Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
