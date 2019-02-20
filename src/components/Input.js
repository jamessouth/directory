import React, { Component } from 'react';
import '../styles/Input.css';

export default class Input extends Component{

  state = {
    value: ''
  }

  componentDidMount(){
    this.input.focus();
  }

  handleChange = e => {
    this.props.filter(e.target.value);
    this.setState({value: e.target.value});
  }

  handleFocus = e => {
    this.props.handleInputFocus(e);
  }

  handleBlur = e => {
    this.props.handleInputBlur(e);
  }

  render(){
    return(
      <input onBlur={this.handleBlur} onFocus={this.handleFocus} role="searchbox" ref={input => this.input = input} tabIndex={this.props.modalOpen ? "-1" : "0"} value={this.state.value} onChange={this.handleChange} className="search" id="search" type="search" name="search_box" placeholder="Search"/>
    );
  }
}
