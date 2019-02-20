import React, { Component } from 'react';
import '../styles/Select.css';

export default class Select extends Component{

  state = {
    value: 'Select...'
  }

  handleChange = e => {
    this.props.handleSort(e.target.value);
    this.setState({value: e.target.value});
  }

  render(){
    return(
      <div>
        <label htmlFor="sort">Sort by:</label>
        <select tabIndex={this.props.modalOpen ? "-1" : "0"} value={this.state.value} onChange={this.handleChange} id="sort">
          <option hidden>Select...</option>
          <option>first name</option>
          <option>last name</option>
          <option>city</option>
        </select>
      </div>
    );
  }
}
